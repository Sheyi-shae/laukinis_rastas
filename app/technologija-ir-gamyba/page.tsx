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
