
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[680px] items-center justify-center overflow-hidden bg-[#243A2F] text-white sm:min-h-[740px] lg:min-h-[800px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Natūralus rąstinis namas gamtos apsuptyje"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17271F]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17271F]/35 via-[#17271F]/40 to-[#17271F]/80" />

      {/* Decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.09] sm:h-[620px] sm:w-[620px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[470px] sm:w-[470px]"
      />

      <div className="container relative z-10 flex flex-col items-center px-4 py-32 text-center sm:px-6">
        {/* Eyebrow */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-7 flex items-center gap-3"
        >
          
          <span className="text-xs font-semibold tracking-[0.25em] text-[#E4D6C3]">
            SUSISIEKIME
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="max-w-5xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[84px]"
        >
          Jūsų svajonių namas
          <span className="mt-2 block italic text-[#D9C9B1]">
            prasideda nuo pokalbio.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
        >
          Planuojate statyti rąstinį gyvenamąjį namą, pirtį ar poilsio
          sodybą? Susisiekite su mumis – aptarsime jūsų idėją,
          supažindinsime su kanadietiška „laukinio rąsto“ technologija
          ir padėsime pasirinkti tinkamiausius sprendimus.
        </motion.p>

       

        {/* Contact actions */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="tel:+37069341243"
            className="inline-flex w-full items-center justify-center gap-3 bg-[#D9C9B1] px-7 py-4 text-sm font-semibold text-[#243A2F] transition-all duration-300 hover:bg-white sm:w-auto"
          >
            <Phone size={17} />
            +370 693 41243
          </a>

          <a
            href="mailto:info@laukinisrastas.lt"
            className="inline-flex w-full items-center justify-center gap-3 border border-white/45 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
          >
            <Mail size={17} />
            Parašykite mums
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-3 sm:mt-20"
        >
          <Link
            href="#kontaktine-informacija"
            aria-label="Slinkti prie kontaktinės informacijos"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white/80 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
          >
            <ArrowDown size={18} />
          </Link>

          <span className="text-[10px] font-medium tracking-[0.2em] text-white/55">
            KONTAKTINĖ INFORMACIJA
          </span>
        </motion.div>
      </div>
    </section>
  );
}
