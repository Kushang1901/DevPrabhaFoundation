import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact Photo Gallery",
  description:
    "Visual stories from Dev Prabha Foundation's medical camps, school retention drives, and women empowerment centers in Sugauli, Bihar.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
