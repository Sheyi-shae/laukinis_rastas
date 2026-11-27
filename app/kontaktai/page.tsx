import CompanyDetails from '@/_components/contact/CompanyDetails'
import ContactHero from '@/_components/contact/contact-hero'

import ContactDetails from '@/_components/contact/ContactDetails'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktai – rąstinių namų statyba ir konsultacijos",

  description:
    "Susisiekite su „Laukinis rąstas“ komanda dėl rąstinio namo, pirties ar poilsio pastato statybos. Aptarkime jūsų idėją ir individualų projektą.",

  alternates: {
    canonical: "https://laukinisrastas.lt/kontaktai",
  },

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://laukinisrastas.lt/kontaktai",
    siteName: "Laukinis rąstas",
    title: "Kontaktai | Laukinis rąstas",
    description:
      "Turite rąstinio namo ar pirties idėją? Susisiekite su „Laukinis rąstas“ komanda ir aptarkime jūsų būsimą projektą.",
    images: [
      {
        url: "/images/homes/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – rąstinių namų statyba",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kontaktai | Laukinis rąstas",
    description:
      "Susisiekite dėl rąstinių namų, pirčių ir poilsio pastatų projektų.",
    images: ["/images/homes/home-hero.jpg"],
  },
};
export default function page() {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <CompanyDetails />
    </div>
  )
}
