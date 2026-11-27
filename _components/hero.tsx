
"use client";

import { motion } from "framer-motion";
import {
  House,
  Leaf,
  PhoneCall,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "./primary-button";



const features = [
{
icon: Leaf,
title: "Autentiškas rąstinių namų grožis",
subtitle: "ir tvarus",
},
{
icon: ShieldCheck,
title: "Ilgaamžiai namai gyvenimui ir poilsiui",
subtitle: "konstrukcija",
},
{
icon: House,
title: "Individualūs meistrų šedevrai ",
subtitle: "jūsų gerovei",
},
];

export default function Hero() {

  return (
    <main className="wooden-home-page">
      {/* HERO */}
      <section className="wooden-hero ">

        {/* Background image */}
<div className="hero-image mt-0 md:mt-9 relative w-[150%] h-full overflow-hidden origin-top"> {/* Ensure container has relative positioning and dimensions */}
  <motion.div
    initial={{ scale: 1.15, opacity: 0.3 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      scale: {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
      },
      opacity: {
        duration: 1.4,
        ease: "easeOut",
      },
    }}
    className="absolute inset-0"
  >
    <Image
      src="/images/hero-bg.jpg"
      alt="hero-backgrond"
      fill
      priority
      sizes="100vw " 
      className=" object-contain object-top" 
    />
  </motion.div>
</div>


        {/* Left cream overlay */}
        <div className="hero-cream-panel" />

       

        {/* HERO CONTENT */}
        <div className="hero-content ">

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-eyebrow mt-20">
              
              LAUKINIS RĄSTAS | NATŪRALŪS RĄSTINIAI NAMAI
            </div>

            <h1>
              Namas, kuris 
              <span>tarnaus kartoms.</span>
            </h1>

            <p className="hero-description text-justify">
              Statome išskirtinius rąstinius namus iš Karpatų eglės, naudodami kanadietišką „laukinio rąsto“ technologiją. Kiekvienas namas – unikalus meistrystės kūrinys, kuriame susijungia natūralios medienos grožis, ilgaamžiškumas ir jaukus mikroklimatas.
            </p>

            <div className="flex flex-col md:flex-row gap-5 md:gap-10 mx-auto mt-10">
              <Link href="tel" className="primary-button uppercase tracking-[0.19em] whitespace-nowrap">
                Paskambinti
                <PhoneCall size={17} />
              </Link>
              

              {/* <Link href="/about" className="story-button ">
                <span className="play-icon">
                  <FolderKanban size={17} fill="currentColor" />
                </span>
                Mūsų projektai
              </Link> */}
              <SecondaryButton name="Mūsų projektai" link="/projektai"/>
            </div>
          </motion.div>

          {/* FEATURE INDICATORS */}
          
          <motion.div
            className="hero-features "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature) => {
               const Icon = feature.icon;
              return (
                <div className="hero-feature" key={feature.title}>
                  <Icon size={27} strokeWidth={1.7} />

                  <div>
                    <strong>{feature.title}</strong>
                    <span>{feature.subtitle}</span>
                  </div>
                </div>
              );
            })}
            </motion.div>
        
        </div>

        {/* SCROLL INDICATOR */}
      
      </section>

     
    </main>
  );
}
