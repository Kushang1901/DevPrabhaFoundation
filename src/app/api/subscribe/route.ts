import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { getDb } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    console.log("========================================");
    console.log("📰 NEW NEWSLETTER SUBSCRIBER");
    console.log(`📧 Email: ${email}`);
    console.log(`🕒 Timestamp: ${new Date().toISOString()}`);
    console.log("========================================");

    // Append to local subscribers.json
    const subsFilePath = path.join(process.cwd(), "subscribers.json");
    let subscribers: Array<{ email: string; date: string }> = [];
    if (fs.existsSync(subsFilePath)) {
      try {
        subscribers = JSON.parse(fs.readFileSync(subsFilePath, "utf8"));
      } catch {
        subscribers = [];
      }
    }

    if (!subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      subscribers.push({ email: email.toLowerCase(), date: new Date().toISOString() });
      fs.writeFileSync(subsFilePath, JSON.stringify(subscribers, null, 2), "utf8");
    }

    // 2. Permanently record newsletter subscriber to MongoDB Atlas
    try {
      const db = await getDb();
      if (db) {
        await db.collection("subscribers").updateOne(
          { email: email.toLowerCase() },
          { $setOnInsert: { email: email.toLowerCase(), subscribedAt: new Date() } },
          { upsert: true }
        );
        console.log("✅ Subscriber saved to MongoDB Atlas (subscribers collection)");
      }
    } catch (dbErr) {
      console.warn("⚠️ MongoDB Atlas write warning (subscribers):", dbErr);
    }

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
        from: `"Dev Prabha Foundation" <${smtpUser}>`,
        to: email,
        subject: "Welcome to Dev Prabha Foundation Updates",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e7e5e4; border-radius: 8px;">
            <h2 style="color: #1b4332;">Dev Prabha Foundation</h2>
            <p>Dear Supporter,</p>
            <p>Thank you for subscribing to welfare and hospital project updates from Dev Prabha Foundation. You will receive notifications regarding upcoming free medical camps, scholarship distributions, and rural progress reports.</p>
            <p>Warm regards,<br/><strong>Dev Prabha Foundation Team</strong><br/>Sugauli, East Champaran, Bihar</p>
          </div>
        `,
      });

      await transporter.sendMail({
        from: `"DPF Subscriber Bot" <${smtpUser}>`,
        to: recipientEmail,
        subject: `New Newsletter Subscriber: ${email}`,
        text: `New subscriber registered for updates: ${email} on ${new Date().toLocaleString()}`,
      });
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for subscribing! You are now registered to receive medical camp dates and welfare updates.",
    });
  } catch (error: any) {
    console.error("❌ Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to register subscription.", details: error.message },
      { status: 500 }
    );
  }
}
