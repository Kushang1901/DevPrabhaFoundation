import React from "react";
import { TRUST_DETAILS } from "@/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dpf.org.in";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${BASE_URL}/#organization`,
    name: TRUST_DETAILS.ngoName,
    alternateName: ["DevPrabha Foundation", "DPF", "Dev Prabha Foundation Trust"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/triallogo-3.png`,
      width: 1673,
      height: 289,
    },
    image: `${BASE_URL}/images/Aboutus.jpeg`,
    description:
      "Dev Prabha Foundation is a registered Public Charitable Trust (Reg: 2034/2017, 12A & 80G Certified) in Sugauli, East Champaran, Bihar advancing Healthcare, Education, Livelihood, and Partnership (HELP), including a 200-bed Multispecialty Hospital.",
    foundingDate: "2017-03-04",
    nonprofitStatus: "Nonprofit501c3Equivalent",
    taxID: TRUST_DETAILS.section80G,
    email: TRUST_DETAILS.contactEmail,
    telephone: TRUST_DETAILS.contactPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bangra, Sugauli",
      addressLocality: "Sugauli",
      addressRegion: "Bihar",
      postalCode: "845456",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.7825,
      longitude: 84.7418,
    },
    areaServed: [
      { "@type": "City", name: "Sugauli" },
      { "@type": "AdministrativeArea", name: "East Champaran" },
      { "@type": "State", name: "Bihar" },
      { "@type": "Country", name: "India" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9480259311",
        contactType: "customer service",
        email: TRUST_DETAILS.contactEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Bhojpuri", "Maithili"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9480259311",
        contactType: "donations",
        email: TRUST_DETAILS.secondaryEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: ["https://www.facebook.com/devprabhafoundation/"],
    knowsAbout: [
      "Rural Healthcare Camps",
      "Multispecialty Hospital Construction",
      "Girl-Child Education & School Retention",
      "Women Self-Help Groups (SHGs)",
      "Vocational Tailoring & Skill Training",
      "Section 80G Tax-Exempt Charitable Donations",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Dev Prabha Foundation",
    description:
      "Official website of Dev Prabha Foundation — Healthcare, Education, Livelihood in Partnership across Sugauli, East Champaran, Bihar.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
