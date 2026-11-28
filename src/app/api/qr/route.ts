import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const amount = searchParams.get("amount") || "500";
    const donorName = searchParams.get("name") || "Well-wisher";

    const accountName = process.env.DPF_ACCOUNT_NAME || "DEV PRABHA FOUNDATION";
    const upiId = process.env.DPF_UPI_ID || process.env.UPI_ID || "";

    if (!upiId) {
      return NextResponse.json(
        { error: "Official UPI ID is not configured in environment variables." },
        { status: 503 }
      );
    }

    const upiUri = `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(accountName)}&am=${encodeURIComponent(
      amount
    )}&cu=INR&tn=${encodeURIComponent(`Donation by ${donorName}`)}`;

    const qrServiceUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=0b2545&backgroundColor=ffffff&data=${encodeURIComponent(
      upiUri
    )}`;

    return NextResponse.redirect(qrServiceUrl, { status: 307 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "QR generation error", details: error.message },
      { status: 500 }
    );
  }
}
