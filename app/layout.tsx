import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics";
import {
  OWNER_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  METADATA_BASE_ORIGIN,
} from "@/lib/constants";
import { SOCIAL } from "@/content/data/social";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "Madhesh Gupta | Java Developer & CS Student";
const ogTitle = "Madhesh Gupta | Java Developer";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA_BASE_ORIGIN),
  title: {
    default: title,
    template: `%s | ${OWNER_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Java Developer",
    "Python",
    "Spring Boot",
    "Student Portfolio",
    "Madhesh Gupta",
  ],
  authors: [{ name: OWNER_NAME, url: SITE_URL }],
  creator: OWNER_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: METADATA_BASE_ORIGIN,
    title: ogTitle,
    description: "Java Developer & CS Student | Building Real-World Solutions",
    siteName: ogTitle,
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: "Java Developer & CS Student | Building Real-World Solutions",
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: OWNER_NAME,
  email: SOCIAL.email,
  url: SITE_URL,
  sameAs: [SOCIAL.github, SOCIAL.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${inter.className}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrains.variable} min-h-screen font-sans antialiased`}>
        <Providers>
          <Analytics />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
