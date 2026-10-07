import { Archivo_Black, Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { media } from "@/data/media";

const display = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Cabin({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://stkzsc.org"),
  title: {
    default: "STKZ SC | Youth Soccer Club in Jacksonville, Texas",
    template: "%s | STKZ SC",
  },
  description: "STKZ SC is a development-first youth soccer organization serving Jacksonville and East Texas. Every Player. Every Chance.",
  openGraph: {
    title: "STKZ SC",
    description: "Developing Players. Creating Opportunities. Building Community.",
    url: "https://stkzsc.org",
    siteName: "STKZ SC",
    images: [{ url: media.home, alt: "STKZ SC youth soccer action" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://4q000fmy3bu2yndr.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//4q000fmy3bu2yndr.public.blob.vercel-storage.com" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
