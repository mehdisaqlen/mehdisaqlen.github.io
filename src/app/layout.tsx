import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
const space_grotesk = Space_Grotesk({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Saqlen Mehdi | Full Stack Developer",
  description: "Full Stack Next.JS Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Nav />
        <Hero />
        {children}

        <Footer />
      </body>
    </html>
  );
}
