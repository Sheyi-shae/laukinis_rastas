import AboutHero from '@/_components/about/AboutHero'
import AboutTestimonials from '@/_components/about/AboutTestimonials'
import OurJourney from '@/_components/about/our-journey'
import OurStory from '@/_components/about/our-story'
import OurPhilosophy from '@/_components/about/OurPhilosophy'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'

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
