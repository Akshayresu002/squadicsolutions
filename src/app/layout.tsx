import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SquadicSolutions | Web Development, Software & AI Solutions",
  description: "SquadicSolutions is a modern technology company offering web development, custom software engineering, AI systems, data analytics and enterprise automation solutions.",
  verification: {
  google: "xysSosO5rXZOhdKbfBaNsNonoCevlHPtHdd9_er-ozw",
},
  keywords: ["SquadicSolutions", "Squadic Solutions", "Web Development Company", "AI Software Company"],
  openGraph: {
    title: "SquadicSolutions | Web Development, Software & AI Solutions",
    description: "SquadicSolutions is a modern technology company offering web development, custom software engineering, AI systems, data analytics and enterprise automation solutions.",
    type: "website",
    siteName: "SquadicSolutions",
    url: "https://squadicsolutions.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "SquadicSolutions | Web Development, Software & AI Solutions",
    description: "SquadicSolutions is a modern technology company offering web development, custom software engineering, AI systems, data analytics and enterprise automation solutions.",
  },
  alternates: {
    canonical: "https://squadicsolutions.online",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SquadicSolutions",
  "url": "https://squadicsolutions.online",
  "description": "SquadicSolutions is a modern technology company offering web development, custom software engineering, AI systems, data analytics and enterprise automation solutions.",
  "logo": "https://squadicsolutions.online/logo.png",
  "foundingDate": "2023",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@squadicsolutions.online",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/squadicsolutions",
    "https://linkedin.com/company/squadicsolutions"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
