
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function TechnologyHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#243A2F] sm:min-h-[740px] lg:min-h-[800px]">

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/technology/technology-hero.jpg"
          alt="Natūralių rąstų namas, pastatytas naudojant laukinio rąsto technologiją"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Balanced image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17271F]/55" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17271F]/40 via-[#17271F]/35 to-[#17271F]/75" />

      {/* Content */}
      <div className="container relative z-10 flex justify-center py-32 sm:py-36 lg:py-40">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center justify-center gap-4"
          >
           

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9C9B1] sm:text-xs">
              Technologija ir gamyba
            </span>

          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl font-serif text-4xl leading-[1.15] tracking-tight text-[#F7F5EE] sm:text-6xl lg:text-7xl xl:text-[82px]"
          >
            Namai, kuriuose
            <br />
            susitinka{" "}
            <span className="italic text-[#D9C9B1]">
              gamta ir meistrystė.
            </span>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            className="my-8 h-px w-16 bg-[#D9C9B1]/70"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-sm leading-8 text-white/85 sm:text-base sm:leading-9"
          >
            Kiekvienas „Laukinio rąsto“ namas prasideda nuo kruopščiai
            atrinktos Karpatų kalnų eglės. Naudodami kanadietišką
            „laukinio rąsto“ technologiją, išsaugome natūralias medienos
            formas ir kiekvieną rąstą individualiai pritaikome būsimo
            namo konstrukcijai.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#karpatų-eglė"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D9C9B1] px-8 py-4 text-sm font-semibold text-[#243A2F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7F5EE] hover:shadow-xl"
            >
              Aptarkime jūsų projektą

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

           
          </motion.div>

        </motion.div>
      </div>

      
    </section>
  );
}
