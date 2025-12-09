import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import PageGridBackground from "@/components/common/PageGridBackground";
import AnnouncementBanner from "@/components/common/AnnouncementBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QuBeats Quantum Sensing",
  description:
    "Quantum sensing platforms built for aerospace, defense, and life sciences innovators.",
};

export default function RootLayout({ children }) {
  return (
    <html>
    <body>
          <AnnouncementBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
    </body>
    </html>
  );
}
