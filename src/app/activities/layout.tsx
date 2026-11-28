import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welfare Activities & Field Programs",
  description:
    "Explore Dev Prabha Foundation's field programs: Sanjeevani free medical camps, girl-child education hubs, women SHG tailoring centers, and environmental drives in East Champaran, Bihar.",
  alternates: { canonical: "/activities" },
};

export default function ActivitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
