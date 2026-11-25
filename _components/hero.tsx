
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Play,
  Leaf,
  ShieldCheck,
  House,
  Menu,
  X,
  Trees,
  PhoneCall,
  FolderKanban,
} from "lucide-react";
import { motion } from "framer-motion";
import { SecondaryButton } from "./primary-button";

const navigation = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Our Houses", href: "/houses", dropdown: true },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const features = [
{
icon: Leaf,
title: "Ekologiškas",
subtitle: "ir tvarus",
},
{
icon: ShieldCheck,
title: "Patvari",
subtitle: "konstrukcija",
},
{
icon: House,
title: "Individualūs projektai",
subtitle: "jūsų gyvenimo būdui",
},
];

export default function Hero() {

  return (
    <main className="wooden-home-page">
      {/* HERO */}
      <section className="wooden-hero ">

        {/* Background image */}
        <div className="hero-image">
   
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
    src="/images/hero-bg.png"
    alt="Modern wooden house surrounded by nature"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</motion.div>
        </div>

        {/* Left cream overlay */}
        <div className="hero-cream-panel" />

       

        {/* HERO CONTENT */}
        <div className="hero-content mt-8">

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-eyebrow">
              
              LAUKINIS RĄSTAS | NATŪRALŪS RĄSTINIAI NAMAI
            </div>

            <h1>
              Namas, kuris 
              <span>tarnaus kartoms.</span>
            </h1>

            <p className="hero-description text-justify">
              Statome išskirtinius rąstinius namus iš Karpatų eglės, naudodami kanadietišką „laukinio rąsto“ technologiją. Kiekvienas namas – unikalus meistrystės kūrinys, kuriame susijungia natūralios medienos grožis, ilgaamžiškumas ir jaukus mikroklimatas.
            </p>

            <div className="hero-actions">
              <Link href="/houses" className="primary-button uppercase tracking-[0.19em] whitespace-nowrap">
                Paskambinti
                <PhoneCall size={17} />
              </Link>

              {/* <Link href="/about" className="story-button ">
                <span className="play-icon">
                  <FolderKanban size={17} fill="currentColor" />
                </span>
                Mūsų projektai
              </Link> */}
              <SecondaryButton name="Mūsų projektai"/>
            </div>
          </motion.div>

          {/* FEATURE INDICATORS */}
          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {features.map((feature) => {
              
              return (
                <div className="hero-feature" key={feature.title}>
                 

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
