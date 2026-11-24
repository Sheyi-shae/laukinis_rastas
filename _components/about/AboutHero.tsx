
"use client";

import Image from "next/image";
import { motion, useReducedMotion,Variant,Variants } from "framer-motion";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[#243A2F] text-white sm:min-h-[780px] lg:min-h-[850px]">

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/about/about-us.JPG"
          alt="Rankomis statomas masyvių rąstų namas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17271E]/50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17271E]/55 via-[#17271E]/30 to-[#17271E]/75" />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[100px] top-1/2 -z-10 hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-white/[0.12] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[35px] top-1/2 -z-10 hidden h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-white/[0.10] lg:block"
      />

      <div className="container relative py-28 text-center sm:py-32 lg:py-36">

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mx-auto w-full max-w-5xl"
        >

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center justify-center gap-3"
          >
            
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#D9C9B1] uppercase">
              Apie „Laukinį rąstą“
            </span>
           
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-5xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Daugiau nei 20 metų kuriame{" "}
            <span className="italic text-[#D9C9B1]">
              namus, kurie turi istoriją.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl text-base leading-[1.9] text-white/85 sm:text-lg"
          >
            Viskas prasidėjo nuo vieno namo 2003 metais. Šiandien mūsų patirtis,
            Karpatų mediena ir meistrų darbas padeda įgyvendinti individualius
            rąstinės architektūros projektus Lietuvoje ir Europoje.
          </motion.p>

        </motion.div>

        {/* Experience marker */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto mt-16 flex max-w-xl flex-col items-center justify-center gap-5 border-t border-white/20 pt-8 sm:mt-20 sm:flex-row sm:gap-8 lg:mt-24"
        >
          <div className="text-center">
            <span className="block font-serif text-4xl text-[#D9C9B1] sm:text-5xl">
              2003
            </span>
            <span className="mt-2 block text-[10px] tracking-[0.2em] text-white/70 uppercase">
              Mūsų istorijos pradžia
            </span>
          </div>

          <span className="hidden h-12 w-px bg-white/25 sm:block" />

          <p className="max-w-xs text-center text-xs leading-relaxed text-white/75 sm:text-left sm:text-sm">
            Nuo pirmojo rąstinio namo iki individualių projektų Lietuvoje ir
            Europoje.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
