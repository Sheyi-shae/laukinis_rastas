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

export default function page() {
  return (
    <div>
      <ProjectsHero />
      <ProjectsNavigation />
      <ProjectsExhibition />
      <RaimondaProject />
      <FredisProject />
      <RuslanasProject />
      <ProjectsGallery />
      <Testimonials/>
      <WorkshopCTA/>
    </div>
  )
}
