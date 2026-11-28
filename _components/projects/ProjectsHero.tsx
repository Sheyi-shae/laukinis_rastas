
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function ProjectsHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#243A2F] text-white sm:min-h-[760px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/projects/project-hero.jpg"
          alt="Laukinio rąsto namo architektūra gamtos apsuptyje"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/35 to-[#17251D]/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#17251D]/65 via-transparent to-transparent" />

      <div className="container relative z-10 py-32">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
         

          <h1 className="font-heading text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Įgyvendinti
            <span className="mt-2 block font-serif font-normal italic text-[#D9C9B1]">
              projektai
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
         Atraskite mūsų įgyvendintus
            projektus, kuriuose susitinka natūralus medienos grožis,
            individualios vizijos ir meistrų rankų darbas.
          </p>

          
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.a
        href="#projektu-navigacija"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
        aria-label="Slinkti žemyn"
      >
        <span>Pažinkite mūsų darbus</span>
        <ArrowDown size={17} className="animate-bounce" />
      </motion.a>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D9C9B1]/60 to-transparent" />
    </section>
  );
}
