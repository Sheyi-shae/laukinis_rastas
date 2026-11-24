
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Hammer,
  Layers3,
  Leaf,
  Ruler,
  ShieldCheck,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: Compass,
    title: "Išsaugota natūrali rąstų forma",
    description:
      "Kiekvienas rąstas išlaiko savo natūralų charakterį, todėl namas įgauna išskirtinę išvaizdą ir individualumą.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Individualus pritaikymas",
    description:
      "Rąstai matuojami ir formuojami pagal gretimus elementus, siekiant tikslaus jų tarpusavio prigludimo.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Masyvi medinė konstrukcija",
    description:
      "Stambių rąstų konstrukcija suteikia pastatui solidumo ir išryškina natūralios medienos grožį.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Tradicinė meistrystė",
    description:
      "Technologija reikalauja kruopštaus rankų darbo, patirties ir dėmesio kiekvienai konstrukcijos detalei.",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Natūralios medžiagos",
    description:
      "Naudojame Karpatų kalnų eglės rąstus, išsaugodami jų tekstūrą, natūralų grožį ir savitą charakterį.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Ilgaamžiškumo pagrindas",
    description:
      "Tinkamas medienos paruošimas, tikslus surinkimas ir atsakinga priežiūra padeda užtikrinti konstrukcijos ilgaamžiškumą.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function TechnologyAdvantages() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="technologijos-privalumai"
      className="relative isolate overflow-hidden bg-[#243A2F] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[340px] w-[340px] rounded-full border border-white/[0.06]"
      />

      <div className="container">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C4B59F]">
              Kodėl ši technologija?
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Technologija, kurioje{" "}
            <span className="italic text-[#C4B59F]">
              susitinka gamta ir tikslumas.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            Kanadietiška „laukinio rąsto“ technologija leidžia išsaugoti
            natūralią medienos formą ir paversti ją individualia, kruopščiai
            suformuota namo konstrukcija.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14"
        >
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                key={advantage.number}
                variants={itemVariants}
                className="group border-t border-white/15 pt-6 transition-colors duration-300 hover:border-[#B8875B]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#C4B59F] transition-all duration-300 group-hover:border-[#B8875B] group-hover:bg-[#B8875B] group-hover:text-[#243A2F]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <span className="font-serif text-[0px] text-white/35">
                    {advantage.number}
                  </span>
                </div>

                <h3 className="min-h-4 md:min-h-20 font-serif text-lg leading-snug text-white sm:text-xl">
                  {advantage.title}
                </h3>

                <p className="mt-3 text-sm text-justify leading-7 text-white/60">
                  {advantage.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Architectural image and closing statement */}
        
<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="relative mt-20 overflow-hidden sm:mt-24 lg:mt-32"
>
  <div className="relative flex min-h-[500px] items-center justify-center sm:min-h-[560px] lg:min-h-[600px]">

    {/* Background image */}
    <Image
      src="/images/technology/tech4.jpeg"
      alt="Individualios architektūros rąstinis namas iš natūralių masyvių rąstų"
      fill
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* Dark cinematic overlay */}
    <div className="absolute inset-0 bg-[#14221A]/65" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#14221A]/30 via-[#14221A]/35 to-[#14221A]/80" />

    {/* Content */}
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center sm:px-10 lg:py-28">

      {/* Eyebrow */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mb-8 flex items-center justify-center gap-4"
      >
        

        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8D5BB] sm:text-xs">
          Jūsų vizija. Mūsų meistrystė.
        </span>

        
      </motion.div>

      {/* Heading */}
      <motion.h3
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-4xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl"
      >
        Kiekvienas namas prasideda
        <br className="hidden sm:block" />
        nuo{" "}
        <span className="italic text-[#E6CBA9]">
          individualios idėjos.
        </span>
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-8 max-w-2xl text-base font-medium leading-8 text-white/95 sm:text-lg sm:leading-9"
      >
        Nesvarbu, ar svajojate apie jaukų šeimos namą, poilsio
        sodybą ar išskirtinę pirtį – kartu aptarsime jūsų poreikius
        ir padėsime pasirinkti tinkamiausius sprendimus.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="mt-10"
      >
        <Link
          href="/kontaktai"
          className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#E6CBA9] px-9 py-5 text-sm font-bold text-[#243A2F] shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl sm:px-11 sm:py-[22px] sm:text-base"
        >
          Aptarkime jūsų projektą

          <ArrowUpRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </motion.div>

    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}
