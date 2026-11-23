import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";

export const viewport: Viewport = {
  themeColor: "#1b4332",
};

export const metadata: Metadata = {
  title: "Dev Prabha Foundation | Empowering Communities & Social Welfare",
  description:
    "Dev Prabha Foundation is dedicated to empowering communities through education, healthcare, social welfare, women empowerment, child development, and humanitarian initiatives.",
  keywords: [
    "Dev Prabha Foundation",
    "NGO",
    "social welfare",
    "charity organization",
    "women empowerment",
    "education support",
    "healthcare initiatives",
    "child development",
    "nonprofit organization",
    "community support",
  ],
  authors: [{ name: "Dev Prabha Foundation" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c1917] antialiased"
      >
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-[80px] md:pt-[106px]">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingActions />
      </body>
    </html>
  );
}
