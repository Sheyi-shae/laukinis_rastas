import CanadianTechnology from '@/_components/tech-production/canadian-technology'
import CraftsmanshipExperience from '@/_components/tech-production/CraftsmanshipExperience'
import NaturalMicroclimate from '@/_components/tech-production/natural-micro-climate'
import TechnologyHero from '@/_components/tech-production/technology-hero'
import TechnologyAdvantages from '@/_components/tech-production/TechnologyAdvantages'
import ThermalComfort from '@/_components/tech-production/thermal-comfort'
import TimberOrigin from '@/_components/tech-production/timber-origin'
import WoodPreparation from '@/_components/tech-production/wood-preparation'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rąstinių namų statybos technologija ir gamyba",

  description:
    "Sužinokite, kaip gaminami Laukinio rąsto namai. Atrinkta Karpatų kalnų eglė, kanadietiška laukinio rąsto technologija, kruopštus medienos paruošimas ir meistrų darbas.",

  alternates: {
    canonical: "https://laukinisrastas.lt/technologija-ir-gamyba",
  },

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://laukinisrastas.lt/technologija-ir-gamyba",
    siteName: "Laukinis rąstas",
    title: "Rąstinių namų technologija ir gamyba | Laukinis rąstas",
    description:
      "Atraskite kanadietišką laukinio rąsto statybos technologiją, Karpatų kalnų eglės savybes ir kruopštų kiekvieno rąstinio namo gamybos procesą.",
    images: [
      {
        url: "/images/technology/technology-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – rąstinių namų gamybos technologija",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rąstinių namų technologija ir gamyba",
    description:
      "Kanadietiška laukinio rąsto technologija, Karpatų kalnų eglė ir meistrų patirtis.",
    images: ["/images/technology/technology-hero.jpg"],
  },
};
export default function page() {
  return (
      <div>
          <TechnologyHero />    
          <TimberOrigin />
          <WoodPreparation />
          <CanadianTechnology />
          <ThermalComfort />
          <NaturalMicroclimate />
          <CraftsmanshipExperience />
          <TechnologyAdvantages />
          <WorkshopCTA/>
    </div>
  )
}
