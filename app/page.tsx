import Hero from "@/_components/hero";
import LaukinisHero from "@/_components/hero-2";
import BuildingCategories from "@/_components/home/buiding-category";
import CompletedProjects from "@/_components/home/completed-projects";
import HowItWorks from "@/_components/home/how-it-works";
import Testimonials from "@/_components/home/testimonial";
import VisitWorkshop from "@/_components/home/visit-our-workshop";
import WhyChooseUs from "@/_components/home/why-choose-us";
export default function Home() {
  return (
    <div>
      <LaukinisHero/>
    <Hero />
      <BuildingCategories />
      <WhyChooseUs />
      <HowItWorks />
      <CompletedProjects />
      <Testimonials />
      <VisitWorkshop/>
      </div>
  );
}
