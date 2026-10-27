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
  title: "Repchek | fix your form and track your progress",
  description:
    "Repchek watches your set with your phone camera, tells you when your form is wrong, counts your reps and tracks your progress.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Repchek: know if you’re improving at the gym",
    description:
      "Fix your form live, count your reps and track your progress. Works in your phone browser.",
    url: SITE_URL,
    siteName: "Repchek",
    type: "website",
    images: [{ url: "/og.png", width: 512, height: 512, alt: "Repchek logo" }],
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
