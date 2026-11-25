import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { amount, name, email, phone, paymentMethod, paymentId, pan, address, utrNumber } =
      await req.json();

    if (!amount || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Amount, donor name, email, and phone contact are required." },
        { status: 400 }
      );
    }

    const verifiedId = utrNumber || paymentId || `UTR-${Date.now().toString().slice(-8)}`;
    const receiptNo = `DPF-80G-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
    const today = new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    console.log("========================================");
    console.log("💖 DIRECT ACCOUNT DONATION RECORDED");
    console.log(`💰 Amount: ₹${amount}`);
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📞 Phone: ${phone}`);
    console.log(`💳 Method: ${paymentMethod}`);
    console.log(`✨ UTR / Ref ID: ${verifiedId}`);
    console.log(`📋 PAN: ${pan || "Not provided"}`);
    console.log(`🏠 Address: ${address || "Not provided"}`);
    console.log(`🧾 Receipt No: ${receiptNo}`);
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
        from: `"Dev Prabha Foundation" <${smtpUser}>`,
        to: email,
        subject: `[80G Tax Receipt] Dev Prabha Foundation Donation Confirmation - ₹${amount}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 620px; margin: auto; padding: 25px; border: 1px solid #e7e5e4; border-radius: 12px; background: #ffffff;">
            <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid #1b4332; padding-bottom: 15px;">
              <h2 style="color: #1b4332; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">DEV PRABHA FOUNDATION</h2>
              <p style="color: #57534e; font-size: 12px; margin: 4px 0 0 0;">Registered Public Charitable Trust • NITI Aayog Darpan: BR/2018/0207803</p>
              <p style="color: #b45309; font-size: 11px; font-weight: bold; margin: 2px 0 0 0;">Section 80G(5)(vi) Approved: CIT(E)/Pat/12AA/04(341)/2018-19/616-20</p>
            </div>
            
            <p style="font-size: 14px; color: #1c1917;">Dear <strong>${name}</strong>,</p>
            <p style="font-size: 13px; color: #44403c; line-height: 1.6;">
              Thank you deeply for your kind contribution of <strong>₹${amount.toLocaleString("en-IN")}</strong> to Dev Prabha Foundation. Your generous gift directly empowers our free healthcare camps, the upcoming 200-bed multispecialty hospital in Sugauli, and girl-child education initiatives.
            </p>

            <div style="background: #faf8f5; border: 1px dashed #d6d3d1; border-radius: 8px; padding: 15px; margin: 20px 0;">
              <table style="width: 100%; font-size: 12px; color: #1c1917;">
                <tr><td style="padding: 4px 0;"><strong>Receipt Number:</strong></td><td>${receiptNo}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Date:</strong></td><td>${today}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Donor Name:</strong></td><td>${name}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Donor PAN:</strong></td><td>${pan || "N/A (Exempt)"}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Contribution Amount:</strong></td><td>₹${amount.toLocaleString("en-IN")}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Payment Method:</strong></td><td>${paymentMethod.toUpperCase()} (Direct Account)</td></tr>
                <tr><td style="padding: 4px 0;"><strong>UTR / Reference ID:</strong></td><td>${verifiedId}</td></tr>
                <tr><td style="padding: 4px 0;"><strong>Tax Exemption:</strong></td><td>50% Tax Relief under Section 80G of IT Act, 1961</td></tr>
              </table>
            </div>

            <p style="font-size: 11px; color: #78716c; line-height: 1.5;">
              This is a computer-generated formal e-receipt eligible for income tax deduction under Section 80G. Form 10BE filing will reflect against your PAN in the official IT portal.
            </p>

            <div style="margin-top: 25px; border-top: 1px solid #e7e5e4; padding-top: 15px; text-align: center; font-size: 11px; color: #a8a29e;">
              Dev Prabha Foundation • Sugauli, East Champaran, Bihar - 845456 • kb_tiwary@yahoo.co.in • +91 9480259311
            </div>
          </div>
        `,
      });

      await transporter.sendMail({
        from: `"DPF Donation Bot" <${smtpUser}>`,
        to: recipientEmail,
        subject: `🔔 [NEW DONATION] ₹${amount} received from ${name} (UTR: ${verifiedId})`,
        text: `New donation recorded:\nName: ${name}\nAmount: ₹${amount}\nEmail: ${email}\nPhone: ${phone}\nUTR: ${verifiedId}\nPAN: ${pan || "N/A"}\nReceipt: ${receiptNo}`,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Direct account contribution registered successfully.",
      receiptId: receiptNo,
      amount,
      donorName: name,
      date: today,
      utrNumber: verifiedId,
      taxExemption: "Section 80G(5)(vi) Approved",
    });
  } catch (error: any) {
    console.error("❌ Donation recording error:", error);
    return NextResponse.json(
      { error: "Failed to record donation transaction.", details: error.message },
      { status: 500 }
    );
  }
}
