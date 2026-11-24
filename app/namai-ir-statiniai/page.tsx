import HolidayHomes from '@/_components/buildings/HolidayHomes'
import HomesHero from '@/_components/buildings/home-hero'
import LogSaunas from '@/_components/buildings/LogSaunas'
import ProjectVisionCTA from '@/_components/buildings/ProjectVisionCTA'
import ResidentialHomes from '@/_components/buildings/residential-homes'
import WorkshopCTA from '@/_components/tech-production/WorkshopCTA'
import React from 'react'

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
