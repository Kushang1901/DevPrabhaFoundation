import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, channel } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("========================================");
    console.log("📬 NEW INCOMING CONTACT FORM SUBMISSION");
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone || "Not provided"}`);
    console.log(`💬 Message: ${message}`);
    console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
    console.log("========================================");

    // 1. Permanently record inquiry to local inquiries.json storage
    const inquiriesFilePath = path.join(process.cwd(), "inquiries.json");
    let inquiries: Array<{
      id: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      timestamp: string;
    }> = [];

    if (fs.existsSync(inquiriesFilePath)) {
      try {
        inquiries = JSON.parse(fs.readFileSync(inquiriesFilePath, "utf8"));
      } catch {
        inquiries = [];
      }
    }

    inquiries.unshift({
      id: `inq_${Date.now()}`,
      name,
      email,
      phone: phone || "N/A",
      message,
      timestamp: new Date().toISOString(),
    });

    fs.writeFileSync(
      inquiriesFilePath,
      JSON.stringify(inquiries, null, 2),
      "utf8"
    );

    // 2. Permanently record to MongoDB Atlas cloud database
    try {
      const db = await getDb();
      if (db) {
        await db.collection("inquiries").insertOne({
          name,
          email,
          phone: phone || "N/A",
          message,
          channel: channel || "Web Form",
          createdAt: new Date(),
        });
        console.log("✅ Contact inquiry saved to MongoDB Atlas (inquiries collection)");
      }
    } catch (dbErr) {
      console.warn("⚠️ MongoDB Atlas write warning (fallback kept in JSON):", dbErr);
    }

    // 3. Dispatch email notification via SMTP (if configured in .env.local)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.ADMIN_EMAIL || "info@dpf.org.in";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        secure: smtpPort === "465",
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"${name} (DPF Website)" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New DPF Contact Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage:\n${message}`,
        html: `
          <h3>New DPF Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #1b4332; padding-left: 10px; margin: 10px 0;">
            ${message.replace(/\n/g, "<br/>")}
          </blockquote>
        `,
      });
      console.log("✨ Email processed and dispatched via SMTP successfully.");
    }

    return NextResponse.json({
      success: true,
      message:
        "Your message has been sent successfully! Our administrative panel will contact you shortly.",
      simulated: !smtpHost,
    });
  } catch (error: any) {
    console.error("❌ Error sending mail:", error);
    return NextResponse.json(
      {
        error:
          "We processed your submission, but email delivery encountered an issue. Rest assured, your inquiry is recorded.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
