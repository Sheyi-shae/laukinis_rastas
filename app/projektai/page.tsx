import Testimonials from '@/_components/home/testimonial'
import FredisProject from '@/_components/projects/FredisProject'
import ProjectsNavigation from '@/_components/projects/ProjectNavigator'
import ProjectsExhibition from '@/_components/projects/ProjectsExhibition'
import ProjectsGallery from '@/_components/projects/ProjectsGallery'
import ProjectsHero from '@/_components/projects/ProjectsHero'
import RaimondaProject from '@/_components/projects/RaimondaProject'
import RuslanasProject from '@/_components/projects/RuslanasProject'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'
import type { Metadata } from "next";
import CompletedProjectsShowcase from '@/_components/projects/CompletedProjectsShowcase'

export const metadata: Metadata = {
  title: "Įgyvendinti rąstinių namų ir pirčių projektai",

  description:
    "Peržiūrėkite įgyvendintus Laukinio rąsto projektus: rąstinius namus, pirtis ir poilsio pastatus. Atraskite natūralaus medžio grožį, meistrystę ir individualius sprendimus.",

  alternates: {
    canonical: "https://laukinisrastas.lt/projektai",
  },

  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: "https://laukinisrastas.lt/projektai",
    siteName: "Laukinis rąstas",
    title: "Įgyvendinti projektai | Laukinis rąstas",
    description:
      "Susipažinkite su mūsų įgyvendintais rąstinių namų, pirčių ir poilsio pastatų projektais. Tikri darbai, natūrali mediena ir kruopšti meistrystė.",
    images: [
      {
        url: "/images/projects/projects-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Laukinis rąstas – įgyvendinti rąstinių namų projektai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Įgyvendinti projektai | Laukinis rąstas",
    description:
      "Rąstiniai namai, pirtys ir poilsio pastatai – tikri Laukinio rąsto darbai.",
    images: ["/images/projects/projects-hero.jpg"],
  },
};
export default function page() {
  return (
    // <div>
    //   <ProjectsHero />
    //   <ProjectsNavigation />
    //   <ProjectsExhibition />
    //   <RaimondaProject />
    //   <FredisProject />
    //   <RuslanasProject />
    //   <ProjectsGallery />
    //   <Testimonials/>
    //   <WorkshopCTA/>
    // </div>
     <main className="overflow-hidden">
      <ProjectsHero />

      <ProjectsNavigation />

      <div id="ekspozicija" className="scroll-mt-28">
        <ProjectsExhibition />
      </div>

      <CompletedProjectsShowcase />

      <div id="projektu-galerija" className="scroll-mt-28">
        <ProjectsGallery />
      </div>
      <Testimonials/>
      <WorkshopCTA/>
    </main>
  )
}
