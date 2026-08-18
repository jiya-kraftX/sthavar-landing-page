import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { IntroLoader } from "@/components/IntroLoader";
import { SITE } from "@/constants/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Sea Facing Villas in Dapoli",
    "Luxury Villa in Dapoli",
    "Sea Facing Rowhouse",
    "Dapoli Property Investment",
    "Clear Title Land Dapoli",
    "NA Plots Dapoli",
    "Second Home Near Mumbai",
    "Second Home Near Pune",
    "Sthavar Group",
  ],
  authors: [{ name: "Sthavar Group" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10262b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col bg-cream text-espresso antialiased">
        <IntroLoader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
