import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, occupation, message } = await req.json();

    if (!name || !email || !phone || !address || !occupation) {
      return NextResponse.json(
        { error: "Name, email, phone, address, and occupation are required." },
        { status: 400 }
      );
    }

    console.log("========================================");
    console.log("🤝 NEW INCOMING VOLUNTEER REGISTRATION");
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone}`);
    console.log(`🏠 Address: ${address}`);
    console.log(`💼 Occupation: ${occupation}`);
    console.log(`💬 Message: ${message || "No comments"}`);
    console.log("========================================");

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.ADMIN_EMAIL || "kb_tiwary@yahoo.co.in";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort || "587"),
        secure: smtpPort === "465",
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"${name} (Volunteer App)" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New DPF Volunteer Applicant: ${name}`,
        text: `Volunteer Application details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nOccupation: ${occupation}\nComments: ${message || "N/A"}`,
        html: `
          <h3>New Volunteer Registration Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Occupation:</strong> ${occupation}</p>
          <p><strong>Cover Message / Comments:</strong></p>
          <p style="background: #f3f4f6; padding: 10px; border-radius: 4px;">${(message || "None").replace(/\n/g, "<br/>")}</p>
        `,
      });
      console.log("✨ Volunteer application emailed via SMTP.");
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for registering to volunteer! A coordinator from Dev Prabha Foundation will connect with you via mobile or email soon.",
      simulated: !smtpHost,
    });
  } catch (error: any) {
    console.error("❌ Error sending volunteer registration email:", error);
    return NextResponse.json(
      {
        error:
          "Your application is saved, but email notifications could not be dispatched. Our coordinators will review your data manually.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
