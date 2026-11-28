import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Sugauli Headquarters",
  description:
    "Reach Dev Prabha Foundation in Bangra, Sugauli, East Champaran, Bihar - 845456. Call +91 9480259311 or email info@dpf.org.in for inquiries, CSR partnerships, and support.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
