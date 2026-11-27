
import type { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/_components/navbar";
import Footer from "@/_components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.laukinisrastas.lt"),

  title: {
    default:
      "Rąstinių namų statyba pagal kanadietišką technologiją | Laukinis rąstas",
    template: "%s | Laukinis rąstas",
  },

  description:
    "Statome išskirtinius rąstinius namus, pirtis ir poilsio pastatus iš atrinktos Karpatų kalnų eglės. Kanadietiška laukinio rąsto technologija, individualūs projektai ir meistrų rankų darbas.",

  applicationName: "Laukinis rąstas",

  authors: [{ name: "Laukinis rąstas" }],
  creator: "Laukinis rąstas",
  publisher: "Laukinis rąstas",

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://www.laukinisrastas.lt",
    siteName: "Laukinis rąstas",
    title:
      "Rąstinių namų statyba pagal kanadietišką technologiją | Laukinis rąstas",
    description:
      "Rąstiniai namai, pirtys ir poilsio pastatai iš laukinio rąsto. Natūrali mediena, kanadietiška technologija ir individualūs projektai.",
    images: [
      {
        url: "/images/og/laukinis-rastas.jpg",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – rąstinių namų statyba",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Laukinis rąstas | Rąstinių namų statyba",
    description:
      "Rąstiniai namai, pirtys ir poilsio pastatai pagal kanadietišką technologiją.",
    images: ["/images/og/laukinis-rastas.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSans.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
