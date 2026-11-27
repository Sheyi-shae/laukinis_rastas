import AboutHero from '@/_components/about/AboutHero'
import AboutTestimonials from '@/_components/about/AboutTestimonials'
import OurJourney from '@/_components/about/our-journey'
import OurStory from '@/_components/about/our-story'
import OurPhilosophy from '@/_components/about/OurPhilosophy'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apie mus – rąstinių namų statybos patirtis",

  description:
    "Susipažinkite su „Laukinis rąstas“ istorija, prasidėjusia 2003 metais. Mūsų patirtis, kanadietiška laukinio rąsto technologija ir pagarba natūraliai medienai kuria išskirtinius rąstinius namus.",

  alternates: {
    canonical: "https://laukinisrastas.lt/apie-mus",
  },

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://laukinisrastas.lt/apie-mus",
    siteName: "Laukinis rąstas",
    title: "Apie mus | Laukinis rąstas",
    description:
      "Nuo 2003 metų puoselėjame rąstinių namų statybos tradicijas, natūralios medienos grožį ir kruopštų meistrų darbą.",
    images: [
      {
        url: "/images/about/about-us.JPG",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – rąstinių namų meistrystė",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Apie mus | Laukinis rąstas",
    description:
      "Sužinokite apie Laukinio rąsto istoriją, patirtį ir požiūrį į natūralių rąstinių namų statybą.",
    images: ["/images/about/about-us.JPG"],
  },
};
export default function page() {
  return (
      <div>
          <AboutHero />
          <OurStory />
          <OurJourney />
          <OurPhilosophy />
          <AboutTestimonials />
          <WorkshopCTA/>
    </div>
  )
}
