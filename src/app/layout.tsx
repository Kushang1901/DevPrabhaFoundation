import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import TranslationLoader from "@/components/TranslationLoader";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Only reset to English on true browser reload, preserving live language switches
                  var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
                  if (nav && nav.type === 'reload') {
                    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie = "googtrans=/en/en; path=/;";
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c1917] antialiased"
      >
        {/* Hidden Google Translate Target (kept in DOM with minimal layout for proper script initialization) */}
        <div
          id="google_translate_element"
          style={{
            position: "fixed",
            top: "-9999px",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
            zIndex: -1,
          }}
          aria-hidden="true"
        />
        <Preloader />
        <TranslationLoader />
        <Navbar />
        <main className="flex-grow pt-[62px] sm:pt-[66px] md:pt-[88px] lg:pt-[94px]">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingActions />
      </body>
    </html>
  );
}
