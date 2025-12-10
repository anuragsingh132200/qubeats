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
  title: "Qubeats - Quantum Sensing with Atomic Precision",
  description:
    "Quantum sensing platforms built for aerospace, defense, and life sciences innovators.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
