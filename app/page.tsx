import Hero from "@/_components/hero";
import BuildingCategories from "@/_components/home/buiding-category";
import CompletedProjects from "@/_components/home/completed-projects";
import HowItWorks from "@/_components/home/how-it-works";
import Testimonials from "@/_components/home/testimonial";
import VisitWorkshop from "@/_components/home/visit-our-workshop";
import VisitShowroom from "@/_components/home/visit-showroom";
import WhyChooseUs from "@/_components/home/why-choose-us";
import HomepageCTA from "@/_components/HomepageCta";
import WorkshopCTA from "@/_components/tech-production/WorkshopCTA";
export default function Home() {
  return (
    <div>
    <Hero />
      <BuildingCategories />
      <WhyChooseUs />
      <HowItWorks />
      <CompletedProjects />
      <Testimonials />
      <VisitWorkshop />
      {/* <HomepageCTA /> */}
      <WorkshopCTA/>
      {/* <VisitShowroom/> */}
      </div>
  );
}
