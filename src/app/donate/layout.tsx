import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Direct (80G Tax Exempt)",
  description:
    "Support Dev Prabha Foundation with 0% gateway fees via direct bank or UPI transfer. Instant official Section 80G(5) tax exemption e-receipt generation.",
  alternates: { canonical: "/donate" },
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I get my Section 80G tax receipt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you make a direct transfer and enter your UTR/Reference number along with your PAN card, an official e-receipt is generated immediately for download. We also email a copy for your income tax filings.",
        },
      },
      {
        "@type": "Question",
        name: "Why direct bank / UPI transfer instead of Razorpay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment gateways take 2% to 3% in processing fees. Direct account transfers ensure 100% of your funds go straight to healthcare and village beneficiaries without deductions.",
        },
      },
      {
        "@type": "Question",
        name: "Can I donate using Google Pay, PhonePe, or Paytm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Simply scan our official UPI QR code with any mobile UPI app or send directly to our official trust VPA.",
        },
      },
      {
        "@type": "Question",
        name: "What projects do my donations support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your donations directly fund the upcoming 200-bed DevPrabha Memorial Hospital in Sugauli, Sanjeevani Free Medical Camps, school retention tutoring, and rural women skill centers.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
