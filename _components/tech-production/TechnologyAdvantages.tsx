
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
            <span className="h-px w-9 bg-[#B8875B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C4B59F]">
              Kodėl ši technologija?
            </span>
            <span className="h-px w-9 bg-[#B8875B]" />
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

                  <span className="font-serif text-sm text-white/35">
                    {advantage.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-snug text-white sm:text-2xl">
                  {advantage.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
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
          transition={{ duration: 0.8 }}
          className="relative mt-20 overflow-hidden sm:mt-24 lg:mt-32"
        >
          <div className="relative min-h-[420px] sm:min-h-[460px] lg:min-h-[500px]">
            <Image
              src="/images/technology/tech4.jpeg"
              alt="Individualios architektūros rąstinis namas iš natūralių masyvių rąstų"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#17251D]/95 via-[#17251D]/75 to-[#17251D]/15" />

            <div className="relative z-10 flex min-h-[420px] max-w-2xl flex-col justify-center px-7 py-14 sm:min-h-[460px] sm:px-12 lg:min-h-[500px] lg:px-16">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#B8875B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9C9B1]">
                  Jūsų vizija. Mūsų meistrystė.
                </span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Kiekvienas namas prasideda nuo individualios idėjos.
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-white/75 sm:text-base">
                Nesvarbu, ar svajojate apie jaukų šeimos namą, poilsio
                sodybą ar išskirtinę pirtį – kartu aptarsime jūsų poreikius
                ir padėsime pasirinkti tinkamiausius sprendimus.
              </p>

              <Link
                href="/kontaktai"
                className="group mt-8 inline-flex w-fit items-center gap-3 bg-[#D9C9B1] px-6 py-4 text-sm font-semibold text-[#243A2F] transition-colors duration-300 hover:bg-white"
              >
                Aptarkime jūsų projektą
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
