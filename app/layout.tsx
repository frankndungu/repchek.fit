import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "repchek: every workout moves you forward",
  description:
    "Count your reps, get live form feedback, and track your progress at home or in the gym.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "repchek: every workout moves you forward",
    description:
      "Count your reps, get live form feedback, and track your progress at home or in the gym.",
    url: SITE_URL,
    siteName: "repchek",
    type: "website",
    images: [{ url: "/og.png", width: 512, height: 512, alt: "repchek logo" }],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
