import { Archivo_Black, Cabin } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    images: [{ url: "https://cdn.prod.website-files.com/6ac51e204a6da6912f741813/6ac529942a49a703374bc6be_STKZ%20SC%20Shield%20Logo.png", width: 1000, height: 1000, alt: "STKZ SC shield logo" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
