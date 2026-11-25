
"use client";

import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.16, delayChildren: 0.2 },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#243A2F] text-white sm:min-h-[820px] lg:min-h-[900px]">

      {/* Background image */}
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/about/about-us.JPG"
          alt="Rankomis statomas masyvių rąstų namas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17271E]/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17271E]/50 via-[#17271E]/30 to-[#17271E]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17271E]/35 via-transparent to-[#17271E]/20" />

      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[150px] top-1/2 -z-10 hidden h-[650px] w-[650px] -translate-y-1/2 rounded-full border border-white/[0.10] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[55px] top-1/2 -z-10 hidden h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-white/[0.10] lg:block"
      />

      <div className="container relative py-32 text-center sm:py-36 lg:py-40">

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={container}
          className="mx-auto w-full max-w-5xl"
        >
         

          {/* Heading */}
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
            className="mx-auto mt-8 max-w-3xl text-sm leading-8 text-white/80 sm:text-lg sm:leading-9"
          >
            Viskas prasidėjo nuo vieno namo 2003 metais. Šiandien mūsų patirtis,
            Karpatų mediena ir meistrų darbas padeda įgyvendinti individualius
            rąstinės architektūros projektus Lietuvoje ir Europoje.
          </motion.p>

          {/* Experience panel */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-14 max-w-4xl border border-white/20 bg-[#17271E]/40 p-6 text-left shadow-2xl backdrop-blur-md sm:mt-20 sm:p-8 lg:p-10"
          >
            <div className="flex flex-col items-center gap-7 sm:flex-row sm:gap-10">

              {/* Year */}
              <div className="shrink-0 text-center sm:text-left">
                <span className="block font-serif text-6xl leading-none tracking-tight text-[#D9C9B1] sm:text-7xl lg:text-8xl">
                  2003
                </span>
                <span className="mt-3 block text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Mūsų pradžia
                </span>
              </div>

              {/* Divider */}
              <div className="hidden h-20 w-px bg-gradient-to-b from-transparent via-[#D9C9B1]/60 to-transparent sm:block" />

              <div className="flex-1 text-center sm:text-left">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9C9B1]">
                  Daugiau nei du dešimtmečiai
                </span>

                <p className="mt-3  text-sm leading-7 text-white/80 sm:text-base">
                  Nuo pirmojo rąstinio namo iki išskirtinių individualių
                  projektų Lietuvoje ir Europoje. Kiekvienas projektas –
                  patirties, kruopštumo ir meistrystės rezultatas.
                </p>
              </div>

             
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#musu-istorija"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mx-auto mt-12 flex w-fit flex-col items-center gap-3 text-white/55 transition-colors hover:text-[#D9C9B1]"
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
            Atraskite mūsų istoriją
          </span>
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight size={19} />
          </motion.span>
        </motion.a>

      </div>
    </section>
  );
}
