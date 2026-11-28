
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Hammer,
  MapPin,
  Trees,
} from "lucide-react";

export default function VisitWorkshop() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="dirbtuves"
      className="relative overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* Workshop image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/projects/showroom.jpg"
                alt="Rąstinių namų gamybos dirbtuvės ir rankomis apdirbami mediniai rąstai"
                fill
                //sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/35 via-transparent to-transparent" />
            </div>

            {/* Image corner detail */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 h-2/3 w-2/3 border border-[#B8875B]/50"
            />

            {/* Floating image label */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#F7F5EE]/95 px-5 py-4 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
              <div className="flex h-10 w-10 items-center justify-center bg-[#2F4A3B] text-white">
                <Hammer size={19} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#262626]">
                  Tikra meistrystė
                </p>
                <p className="mt-1 text-xs text-[#6B6F76]">
                  Nuo rąsto iki namo
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs md:text-base font-bold tracking-[0.22em] text-[#788C6A]">
                PAŽINKITE MŪSŲ MEISTRYSTĘ
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-[3.5rem]">
             Aplankykite mūsų  {" "}
              <span className="font-serif font-normal italic text-[#788C6A]">
                ekspoziciją.
              </span>
            </h2>

            <p className="mt-6 text-xl font-medium leading-relaxed text-[#2F4A3B] sm:text-2xl">
              

              Pamatykite tikrą meistro darbą ir pajuskite natūralų rąstinių namų grožį.
            </p>

            {/* Description */}
            <div className="mt-7 space-y-5 text-justify text-[15px] leading-[1.9] text-[#62665F]">
              <p>
                Kviečiame apsilankyti mūsų ekspozicijoje Antalaušių kaime, Ukmergės rajone, ir iš arti susipažinti su kanadietiška „laukinio rąsto“ technologija. Čia galėsite pamatyti autentišką mūsų meistrų rankų darbą, įvertinti Karpatų eglės rąstų grožį, natūralias medienos formas ir preciziškai suformuotas rąstų jungtis.
              </p>

              <p>
                
               Apsilankymo metu galėsite prisiliesti prie natūralios medienos, įvertinti meistrystės kokybę, susipažinti su mūsų statybos technologija ir tiesiogiai su meistrais aptarti savo būsimo namo ar pirties viziją.

              </p>
            </div>

            {/* Visit highlights */}
            <div className="mt-8 grid gap-4 border-y border-[#D9D2C5] py-6">
             

              <div className="flex items-center gap-3">
                <MapPin
                  size={21}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#788C6A]"
                />
                <span className="text-sm font-medium text-[#404040]">
                  Laukiame jūsų: Antalaušių kaimas, Ukmergės rajonas, LT-20379.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/kontaktai"
                
                className="group inline-flex min-h-[58px] items-center justify-between gap-8 bg-primary px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#243A2F]"
              >
                <span>Susitarti dėl apsilankymo</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#2F4A3B]">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <p className="mt-4 flex items-center gap-2 text-xs text-[#85877F]">
                <CalendarDays size={14} />
                Apsilankymą suderinsime iš anksto
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
