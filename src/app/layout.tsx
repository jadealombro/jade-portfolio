import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Jade Alombro — WordPress Developer",
    template: "%s | Jade Alombro — WordPress Developer",
  },
  description:
    "Jade Alombro is a web developer specializing in WordPress. Custom business websites, WooCommerce development, and ongoing site support.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://jadealombro.com"
  ),
  openGraph: {
    siteName: "Jade Alombro — WordPress Developer",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
