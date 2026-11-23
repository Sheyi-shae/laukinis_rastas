
"use client";

import React from "react";
import {
  ArrowUpRight,
  FolderKanban,
  Menu,
  MoveUpRight,
  PhoneCall,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

export default function LaukinisHero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const lineReveal = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.2,
        delayChildren: 0.35,
      },
    },
  };

  const headlineLine = {
    hidden: {
      y: reduceMotion ? 0 : "110%",
      rotateX: reduceMotion ? 0 : -15,
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardReveal = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 45,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.1,
        delay: 1.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#F5F3ED]">

      <section className="relative isolate min-h-[760px] h-[calc(100svh-24px)] max-h-[1050px] overflow-hidden rounded-[4px] bg-[#243A2F] text-white">

        {/* BACKGROUND IMAGE */}
        <motion.div
          initial={
            reduceMotion
              ? { scale: 1 }
              : { scale: 1.13 }
          }
          animate={{ scale: 1 }}
          transition={{
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
          }}
        />

        {/* CINEMATIC OVERLAYS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17271F]/85 via-[#17271F]/40 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="absolute inset-0 -z-10 bg-gradient-to-t from-[#17271F]/75 via-transparent to-[#17271F]/30"
        />

        {/* HEADER — UNCHANGED */}
        <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">

          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center border border-[#D9C9B1]/70 rounded-full">
              <span className="font-serif text-3xl text-[#D9C9B1]">
                L
              </span>
            </div>

           
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {[
              "Namai ir pastatai",
              "Įgyvendinti projektai",
              "Technologijos ir gamyba",
              "Apie mus",
              "Kontaktai",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] tracking-[0.12em] text-white/80 transition hover:text-[#D9C9B1]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
           <motion.a
  href="#contact"
  initial={{ opacity: 0, y: -8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  className="group relative hidden items-center gap-4 overflow-hidden rounded-sm border border-[#D9C9B1]/35 bg-[#2F4A3B]/55 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.19em] text-[#F5F0E7] shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-[#D9C9B1]/70 hover:bg-[#2F4A3B]/75 md:flex"
>
  {/* Focused glass spotlight */}
  <span className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,201,177,0.28),transparent_65%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

  {/* Glass reflection */}
  <motion.span
    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
    animate={{ left: ["-60%", "160%"] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatDelay: 2.5,
      ease: "easeInOut",
    }}
  />

  {/* Inner illuminated border */}
  <span className="pointer-events-none absolute inset-[1px] border border-white/[0.06]" />

  <span className="relative z-10 whitespace-nowrap">
    Gauti pasiūlymą
  </span>

  <motion.span
    className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C9B1]/35 bg-[#D9C9B1]/10 text-[#D9C9B1] transition-all duration-500 group-hover:border-[#D9C9B1] group-hover:bg-[#D9C9B1] group-hover:text-[#243A2F]"
    whileHover={{ rotate: 45 }}
    transition={{ duration: 0.3 }}
  >
    <ArrowUpRight size={15} strokeWidth={1.7} />
  </motion.span>
</motion.a>

            <button className="text-white lg:hidden" aria-label="Open menu">
              <Menu size={25} />
            </button>
          </div>
        </header>

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 flex h-[calc(100%-105px)] flex-col justify-center px-7 pb-16 md:pl-[12%] md:pr-16">

          {/* EYEBROW */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mb-7 ml-2 flex items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9C9B1]">
              LAUKINIS RĄSTAS | NATŪRALŪS RĄSTINIAI NAMAI
            </span>
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            variants={lineReveal}
            initial="hidden"
            animate="visible"
            className="max-w-[1000px] font-serif text-[clamp(3.7rem,8.5vw,8.5rem)] leading-[0.89] tracking-[-0.055em]"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                variants={headlineLine}
                className="block"
              >
                Namas,
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                variants={headlineLine}
                className="block"
              >
                kuris tarnaus
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                variants={headlineLine}
                className="block italic font-normal text-[#D9C9B1]"
              >
                kartoms.
              </motion.span>
            </span>
          </motion.h1>

          {/* DESCRIPTION + CTA */}
          <div className="mt-8 flex flex-col gap-8 md:ml-[22%] md:flex-row md:items-end md:gap-14">

            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.15 }}
              className="max-w-[370px] text-justify text-[16px] leading-7 text-white/75"
            >
              Statome išskirtinius rąstinius namus iš
              Karpatų eglės, naudodami kanadietišką
              „laukinio rąsto“ technologiją. Kiekvienas
              namas – unikalus meistrystės kūrinys,
              kuriame susijungia natūralios medienos
              grožis, ilgaamžiškumas ir jaukus mikroklimatas.
            </motion.p>

           <motion.a
  href="#projects"
  initial={
    reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 25 }
  }
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    delay: 1.35,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    y: -3,
    transition: { duration: 0.3 },
  }}
  whileTap={{ scale: 0.97 }}
  className="group relative flex w-fit items-center gap-5 overflow-hidden rounded-full border border-[#D9C9B1]/30 bg-[#243A2F]/80 py-2 pl-7 pr-2 text-xs font-medium uppercase tracking-[0.18em] text-[#F5F0E7] shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors duration-500 hover:border-[#D9C9B1]/70 hover:bg-[#2F4A3B]"
>
  {/* Ambient background glow */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#788C6A]/20 via-transparent to-[#B8875B]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

  {/* Button label */}
  <span className="relative z-10">Paskambinti</span>

  {/* Arrow container */}
  <motion.span
    className="relative z-10 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#D9C9B1] text-[#243A2F] shadow-inner"
    whileHover={{ rotate: 45 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <motion.span
      className="absolute"
      initial={false}
      whileHover={{ x: 30, y: -30, opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <PhoneCall size={19} strokeWidth={1} />
    </motion.span>

    <motion.span
      className="absolute"
      initial={{ x: -30, y: 30, opacity: 0 }}
      whileHover={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <ArrowUpRight size={19} strokeWidth={1.7} />
    </motion.span>
  </motion.span>
</motion.a>
          </div>
        </div>

        {/* FLOATING CRAFTSMANSHIP CARD */}
        <motion.div
          variants={cardReveal}
          initial="hidden"
          animate="visible"
          whileHover={{
            y: -6,
            borderColor: "rgba(217,201,177,0.65)",
            transition: { duration: 0.4 },
          }}
          className="absolute bottom-22 right-8 hidden w-[230px] border border-white/25 bg-[#243A2F]/70 p-5 backdrop-blur-md xl:block"
        >

          <motion.span
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="block text-[9px] tracking-[0.2em] text-[#D9C9B1]"
          >
            MŪSŲ FILOSOFIJA
          </motion.span>

          <h3 className="mt-4 font-serif text-2xl leading-tight">
            Natūraliai
            <br />
            unikalus.
          </h3>

          <p className="mt-3 text-[14px] leading-5 text-white/65">
            Kiekvienas rąstas, kiekviena detalė, kiekvieni namai
            turi savo charakterį.
          </p>

                  
         <motion.a
  href="#projects"
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{ y: -3, scale: 1.015 }}
  whileTap={{ scale: 0.98 }}
  className="group relative mt-5  flex cursor-pointer items-center justify-between overflow-hidden rounded-xl border border-[#E6C49D]/30 bg-gradient-to-br from-[#B8875B] via-[#956440] to-[#68452F] px-5 py-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
>
  {/* Wood grain-inspired texture */}
  <span className="pointer-events-none absolute inset-0 opacity-20 [background:repeating-linear-gradient(8deg,transparent_0px,transparent_9px,rgba(255,235,205,0.25)_10px,transparent_11px,transparent_19px)]" />

  {/* Warm light overlay */}
  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F0C99D]/20 via-transparent to-[#3B2418]/25 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

  {/* Subtle moving highlight */}
  <motion.span
    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
    animate={{ left: ["-50%", "150%"] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "linear",
    }}
  />


    <span className="text-xs  uppercase tracking-[0.18em] text-[#FFF8EF]">
      Projektai
    </span>


  <motion.span
    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#F5E3CE]/40 bg-[#E8D0B5]/20 text-[#FFF4E5] shadow-lg backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#E8D0B5] group-hover:text-[#68452F]"
    whileHover={{ rotate: 45, scale: 1.12 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
  >
    <FolderKanban size={18} strokeWidth={1} />
  </motion.span>
</motion.a>
        </motion.div>

      </section>
    </main>
  );
}
