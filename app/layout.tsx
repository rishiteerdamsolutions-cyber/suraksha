import type { Metadata } from "next";
import { Geist, Instrument_Serif, Inter, Playfair_Display } from "next/font/google";
import faviconPng from "@/favicon.png";
import logoPng from "@/logo.png";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["italic"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://surakshahospitalkarimnagar.com"),
  title: "Suraksha Hospital, Karimnagar | Advanced Orthopedic Care",
  description:
    "Suraksha Hospital, Karimnagar offers trusted orthopedic care including joint replacement, fracture and trauma treatment, sports injuries, spine care, and physiotherapy.",
  keywords: [
    "Suraksha Hospital Karimnagar",
    "Orthopedic hospital Karimnagar",
    "Joint replacement Karimnagar",
    "Fracture care Karimnagar",
    "Sports injury treatment Karimnagar",
    "Spine care Karimnagar",
    "Physiotherapy Karimnagar",
    "Dr Chokkarapu Ramu"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Suraksha Hospital, Karimnagar | Advanced Orthopedic Care",
    description:
      "Premium orthopedic care in Karimnagar with specialist consultation, surgery, and rehabilitation support.",
    url: "/",
    siteName: "Suraksha Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: logoPng.src,
        width: 512,
        height: 512,
        alt: "Suraksha Hospital Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraksha Hospital, Karimnagar | Advanced Orthopedic Care",
    description:
      "Trusted orthopedic care in Karimnagar: joint replacement, fractures, sports injuries, spine care, and physiotherapy.",
    images: [logoPng.src]
  },
  icons: {
    icon: [{ url: faviconPng.src, type: "image/png" }],
    apple: [{ url: logoPng.src, type: "image/png" }]
  },
  robots: {
    index: true,
    follow: true
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${geist.variable} ${instrumentSerif.variable} font-[var(--font-inter)]`}
      >
        {children}
      </body>
    </html>
  );
}
