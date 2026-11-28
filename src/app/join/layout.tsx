import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer & Join Our Mission",
  description:
    "Join Dev Prabha Foundation as a volunteer, doctor, educator, or community coordinator in Bihar and across India.",
  alternates: { canonical: "/join" },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
