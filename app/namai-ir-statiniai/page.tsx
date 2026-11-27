import HolidayHomes from '@/_components/buildings/HolidayHomes'
import HomesHero from '@/_components/buildings/home-hero'
import LogSaunas from '@/_components/buildings/LogSaunas'
import ProjectVisionCTA from '@/_components/buildings/ProjectVisionCTA'
import ResidentialHomes from '@/_components/buildings/residential-homes'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rąstiniai namai, pirtys ir poilsio pastatai",

  description:
    "Atraskite išskirtinius rąstinius namus, rankų darbo rąstines pirtis ir jaukius poilsio pastatus. Laukinis rąstas – individualūs projektai iš Karpatų kalnų eglės.",

  alternates: {
    canonical: "https://laukinisrastas.lt/namai-ir-statiniai",
  },

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://laukinisrastas.lt/namai-ir-statiniai",
    siteName: "Laukinis rąstas",
    title: "Rąstiniai namai, pirtys ir poilsio pastatai | Laukinis rąstas",
    description:
      "Rąstiniai gyvenamieji namai, pirtys ir poilsio pastatai iš natūralaus laukinio rąsto. Individualūs sprendimai ir meistrų rankų darbas.",
    images: [
      {
        url: "/images/homes/home1.jpg",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – natūralus rąstinis namas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rąstiniai namai, pirtys ir poilsio pastatai",
    description:
      "Individualūs rąstinių namų, pirčių ir poilsio pastatų projektai.",
    images: ["/images/home1.jpg"],
  },
};
export default function page() {
  return (
      <div>
          <HomesHero />
          <ResidentialHomes />
          <LogSaunas />
          <HolidayHomes />
          <ProjectVisionCTA />
          <WorkshopCTA/>
    </div>
  )
}
