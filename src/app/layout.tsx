import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Script from "next/script";

const space_grotesk = Space_Grotesk({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Saqlen Mehdi | React Developer",
  description: "Full Stack Next.JS Developer",

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TQ8L18XFFY"
        />

        <Script strategy="afterInteractive" id="google-analytics-script">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TQ8L18XFFY');
`}
        </Script>
      </head>
      <body className={space_grotesk.className}>
        <Nav />
        <Hero />
        {children}

        <Footer />
      </body>
    </html>
  );
}
