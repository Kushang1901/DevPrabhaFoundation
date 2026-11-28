import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dev Prabha Foundation | Healthcare, Education & Social Welfare",
    short_name: "DevPrabha DPF",
    description:
      "Public Charitable Trust (Reg: 2034/2017, 80G & 12A Certified) advancing healthcare, 200-bed hospital construction, child education, and women empowerment in Sugauli, East Champaran, Bihar.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8f5",
    theme_color: "#1b4332",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
