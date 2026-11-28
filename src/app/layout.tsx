import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import TranslationLoader from "@/components/TranslationLoader";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dpf.org.in";

export const viewport: Viewport = {
  themeColor: "#1b4332",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dev Prabha Foundation | Healthcare, Education & Livelihood in Bihar",
    template: "%s | Dev Prabha Foundation",
  },
  description:
    "Dev Prabha Foundation (Reg: 2034/2017, 12A & 80G Certified) is building a 200-bed Multispecialty Hospital in Sugauli, East Champaran, Bihar, and advancing rural healthcare, education, and women empowerment.",
  keywords: [
    "Dev Prabha Foundation",
    "DevPrabha Foundation",
    "NGO in Bihar",
    "NGO in Sugauli",
    "East Champaran NGO",
    "200 bed hospital Sugauli",
    "80G tax exempt charity India",
    "women empowerment SHG Bihar",
    "rural child education Bihar",
    "free medical camps Bihar",
    "social welfare trust",
  ],
  authors: [{ name: "Dev Prabha Foundation", url: SITE_URL }],
  creator: "Dev Prabha Foundation",
  publisher: "Dev Prabha Foundation",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Dev Prabha Foundation",
    title: "Dev Prabha Foundation | Healthcare, Education & Livelihood in Bihar",
    description:
      "Registered Public Charitable Trust (80G & 12A Certified) constructing a 200-bed Multispecialty Hospital in Sugauli, Bihar and running grassroots health & education initiatives.",
    images: [
      {
        url: "/images/Aboutus.jpeg",
        width: 1200,
        height: 630,
        alt: "Dev Prabha Foundation — Healthcare, Education & Social Dignity in Bihar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Prabha Foundation | Healthcare, Education & Livelihood in Bihar",
    description:
      "80G Certified NGO in Sugauli, East Champaran, Bihar building a 200-bed Multispecialty Hospital & empowering rural families.",
    images: ["/images/Aboutus.jpeg"],
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Sugauli, East Champaran, Bihar",
    "geo.position": "26.7825;84.7418",
    ICBM: "26.7825, 84.7418",
  },
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
        <StructuredData />
        <Navbar />
        <main className="flex-grow pt-[62px] sm:pt-[66px] md:pt-[88px] lg:pt-[94px]">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingActions />
      </body>
    </html>
  );
}
