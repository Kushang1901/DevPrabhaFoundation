import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const amount = searchParams.get("amount") || "500";
    const donorName = searchParams.get("name") || "Well-wisher";

    const accountName = process.env.DPF_ACCOUNT_NAME || "DEV PRABHA FOUNDATION";
    const upiId = process.env.DPF_UPI_ID || "devprabhafoundation@pnb";

    const upiUri = `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(accountName)}&am=${encodeURIComponent(
      amount
    )}&cu=INR&tn=${encodeURIComponent(`Donation by ${donorName}`)}`;

    return NextResponse.redirect(upiUri, { status: 302 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Payment redirect error", details: error.message },
      { status: 500 }
    );
  }
}
