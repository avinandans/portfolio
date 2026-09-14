import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinandan Singha | Senior React.js / Frontend Engineer",
  description: "Senior Frontend Engineer with 5+ years of experience building scalable React.js, Next.js, TypeScript and AI-powered applications.",
  metadataBase: new URL("https://avinandan.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Avinandan Singha | Senior React.js / Frontend Engineer",
    description: "Building fast, scalable & intelligent digital experiences.",
    type: "website",
    url: "https://avinandan.dev"
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinandan Singha | Senior Frontend Engineer",
    description: "React.js • Next.js • TypeScript • AI"
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Avinandan Singha",
  jobTitle: "Senior React.js / Frontend Engineer",
  url: "https://avinandan.dev",
  email: "dev.avinandan.2@gmail.com",
  sameAs: [
    "https://github.com/avinandans",
    "https://linkedin.com/in/avinandan-singha-84630a197"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-noise" aria-hidden="true" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}