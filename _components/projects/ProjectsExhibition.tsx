
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import {
  MapPin,
  CalendarDays,
  MoveUpRight,
  PhoneCall,
  Mail,
  MailAlert,
} from "lucide-react";

export default function ProjectsExhibition() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageReveal:Variants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="ekspozicija"
      className="scroll-mt-36 overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 "
    >
      <div className="container">

        {/* Two-column exhibition layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT: Exhibition image */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageReveal}
            className="group relative min-h-[460px] overflow-hidden bg-[#2F4A3B] sm:min-h-[580px] lg:min-h-[800px]"
          >
            <Image
              src="/images/projects/showroom.jpg"
              alt="Laukinio rąsto ekspozicija Antalaušių kaime"
              fill
              priority={false}
              //sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
            />

            {/* Image overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/65 via-transparent to-[#17251D]/10" />

            {/* Location label */}
            <div className="absolute left-6 top-6 flex items-center gap-3 border border-white/30 bg-[#17251D]/30 px-5 py-3 text-white backdrop-blur-md sm:left-8 sm:top-8">
              <MapPin size={15} className="text-[#D9C9B1]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Antalaušių kaimas · Ukmergės rajonas
              </span>
            </div>

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D9C9B1]">
                Laukinis Rąstas
              </span>
              <p className="mt-3 max-w-sm font-heading text-2xl leading-snug text-white sm:text-3xl">
                Natūrali mediena. Tikra meistrystė.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Exhibition content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col py-4 lg:py-10"
          >
            {/* Eyebrow */}
            <span className="mb-6 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#788C6A] sm:text-xs">
             
              Pažinkite mūsų meistrystę
            </span>

            {/* Heading */}
            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
              Aplankykite mūsų
              <span className="mt-2 block font-serif font-normal italic text-[#788C6A]">
                ekspoziciją.
              </span>
            </h2>

            {/* Introduction */}
            <p className="mt-8 max-w-xl text-lg font-semibold leading-8 text-[#404040] sm:text-xl">
              Pamatykite tikrą meistro darbą ir pajuskite natūralų
              rąstinių namų grožį.
            </p>

            {/* Description */}
            <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-8 text-[#62675F] sm:text-base">
              <p>
                Kviečiame apsilankyti mūsų ekspozicijoje Antalaušių
                kaime, Ukmergės rajone, ir iš arti susipažinti su
                tradicine kanadietiška rąstinių namų statybos
                technologija. Čia galėsite pamatyti autentišką mūsų
                meistrų rankų darbą, įvertinti Karpatų eglės rąstų
                grožį, natūralias medienos formas ir preciziškai
                suformuotas rąstų jungtis.
              </p>

              <p>
                Apsilankymo metu galėsite prisiliesti prie natūralios
                medienos, įvertinti meistrystės kokybę, susipažinti su
                mūsų statybos technologija ir tiesiogiai su meistrais
                aptarti savo būsimo namo projektą.
              </p>
            </div>

            {/* Visit information */}
            <div className="mt-8 flex items-start gap-4 border-y border-[#D9D6CA] py-5">
              <CalendarDays
                size={19}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-[#788C6A]"
              />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2F4A3B]">
                  Apsilankymas iš anksto susitarus
                </p>
                <p className="mt-1 text-sm leading-6 text-[#62675F]">
                  Susisiekite su mumis ir suderinkime jums patogų laiką.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col lg:flex-row gap-3">
              <Link
                href="tel:+37069341243"
                className="group/link inline-flex min-h-14 items-center gap-5 bg-[#2F4A3B] px-10 text-sm font-bold text-[#F7F5EE] transition-colors duration-300 hover:bg-[#788C6A]"
              >
                Skambinti
                <PhoneCall
                  size={17}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </Link>

              <Link
                href="mailto:info@laukinisrastas.lt"
                className="group/link inline-flex min-h-14 items-center gap-5 bg-[#B8875B] px-7 text-sm font-bold text-[#F7F5EE] transition-colors duration-300 hover:bg-[#788C6A]"
              >
              Siųsti el. laišką
                <Mail
                  size={17}
                  className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
