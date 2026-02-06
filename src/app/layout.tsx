import "./globals.css";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { Metadata } from "next";

const SITE_URL = "https://www.raastarealty.com";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&h=630&auto=format&fit=crop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raasta Realty | Top Dubai Real Estate Consultancy",
    template: "%s | Raasta Realty Dubai",
  },
  description:
    "Dubai's most trusted real estate consultancy. Buy, sell & invest in premium Dubai properties with expert guidance. RERA-certified agents, 6% charity commitment, and end-to-end support for investors, buyers & sellers across Business Bay, Downtown, Marina & beyond.",
  keywords: [
    "Dubai real estate",
    "Dubai property",
    "buy property Dubai",
    "sell property Dubai",
    "Dubai real estate agent",
    "Dubai property investment",
    "Dubai apartments for sale",
    "Dubai villa for sale",
    "off plan properties Dubai",
    "Business Bay real estate",
    "Downtown Dubai property",
    "Dubai Marina apartments",
    "RERA certified broker Dubai",
    "real estate consultancy Dubai",
    "Raasta Realty",
    "best real estate company Dubai",
    "Dubai property consultant",
    "luxury real estate Dubai",
    "Dubai property for investors",
    "Dubai real estate 2026",
  ],
  authors: [{ name: "Raasta Realty", url: SITE_URL }],
  creator: "Raasta Realty",
  publisher: "Raasta Realty",
  applicationName: "Raasta Realty",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Real Estate",
  classification: "Real Estate Consultancy",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "Raasta Realty",
    title: "Raasta Realty | Top Dubai Real Estate Consultancy",
    description:
      "Dubai's most trusted real estate consultancy. Buy, sell & invest in premium Dubai properties with RERA-certified experts. 6% of every deal goes to charity.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Raasta Realty - Top Dubai Real Estate Consultancy",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raasta Realty | Top Dubai Real Estate Consultancy",
    description:
      "Dubai's most trusted real estate consultancy. Buy, sell & invest in premium Dubai properties with RERA-certified experts.",
    images: [OG_IMAGE],
    creator: "@raastarealty",
    site: "@raastarealty",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo_black.svg",
    apple: "/logo_black.svg",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.1972;55.2744",
    ICBM: "25.1972, 55.2744",
    "theme-color": "#10b981",
    "apple-mobile-web-app-title": "Raasta Realty",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Raasta Realty",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo_black.svg`,
      },
      description:
        "Dubai's most trusted real estate consultancy. RERA-certified agents providing expert property buying, selling & investment guidance across Dubai.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1610, 16th Floor, The Prism Tower",
        addressLocality: "Business Bay",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-52-936-8338",
        contactType: "customer service",
        email: "connect@raastarealty.com",
        availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
      },
      sameAs: [
        "https://www.instagram.com/raastarealty",
        "https://www.linkedin.com/company/raastarealty",
        "https://www.facebook.com/raastarealty",
        "https://www.tiktok.com/@raastarealty",
      ],
      foundingDate: "2024",
      areaServed: {
        "@type": "City",
        name: "Dubai",
        containedInPlace: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#agent`,
      name: "Raasta Realty",
      url: SITE_URL,
      description:
        "Purpose-driven Dubai real estate consultancy. We help clients buy, sell, and invest in premium properties across Dubai with transparency and trust.",
      priceRange: "AED 500K - AED 50M+",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1610, 16th Floor, The Prism Tower",
        addressLocality: "Business Bay",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      telephone: "+971-52-936-8338",
      email: "connect@raastarealty.com",
      areaServed: [
        "Business Bay",
        "Downtown Dubai",
        "Dubai Marina",
        "Palm Jumeirah",
        "Jumeirah Village Circle",
        "Dubai Hills Estate",
        "DAMAC Hills",
        "Dubai Creek Harbour",
        "Mohammed Bin Rashid City",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Raasta Realty",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/properties?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Amarna:ital,wght@0,100..700;1,100..700&family=Sacramento&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
