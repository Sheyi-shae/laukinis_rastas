
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function TechnologyHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#243A2F] sm:min-h-[740px] lg:min-h-[820px]">

      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/technology/wood.png"
          alt="Rankomis apdirbami natūralūs rąstai ir medinis namas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17271F]/45" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17271F]/30 via-[#17271F]/30 to-[#17271F]/85" />

      {/* Content */}
      <div className="container relative z-10 flex justify-center px-6 py-36 sm:py-40 lg:py-44">

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.15,
              },
            },
          }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >

         
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl font-serif text-[42px] leading-[1.12] tracking-tight text-[#F7F5EE] sm:text-6xl lg:text-[76px] xl:text-[84px]"
          >
            Namai, kuriuose
            <br className="hidden sm:block" />

            <span className="italic text-[#D9C9B1]">
              gamta susitinka su
            </span>

            <br className="hidden sm:block" />

            meistryste.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-sm leading-8 text-white/85 sm:text-base sm:leading-9"
          >
            Kiekvienas „Laukinio rąsto“ namas prasideda nuo kruopščiai
            atrinktos Karpatų kalnų eglės. Pasitelkdami kanadietišką
            „laukinio rąsto“ technologiją, išsaugome natūralias medienos
            formas ir kiekvieną rąstą individualiai pritaikome būsimo
            namo konstrukcijai.
          </motion.p>

         

        </motion.div>
      </div>

      

    </section>
  );
}
