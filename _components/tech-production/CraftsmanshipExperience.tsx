
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Hammer,
  Ruler,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: CalendarDays,
    value: "2003",
    label: "Meistrystės pradžia",
    description: "Rąstinių namų statybos patirtis nuo 2003 metų.",
  },
  {
    icon: Hammer,
    value: "Rankų darbas",
    label: "Individualus tikslumas",
    description:
      "Kiekvienas rąstas matuojamas, formuojamas ir pritaikomas individualiai.",
  },
  {
    icon: Users,
    value: "Individualūs",
    label: "Kiekvienas projektas",
    description:
      "Sprendimus pritaikome konkrečiam projektui, jo architektūrai ir kliento vizijai.",
  },
];

export default function CraftsmanshipExperience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="meistryste-ir-patirtis"
      className="relative isolate overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full border border-[#788C6A]/10"
      />

      <div className="container">
        {/* Section introduction */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs md:text-base font-bold uppercase tracking-[0.24em] text-[#788C6A]">
              Patirtis ir atsakomybė
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Tikra meistrystė gimsta{" "}
            <span className="italic text-[#788C6A]">
              iš patirties.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Rąstinio namo kokybė priklauso ne tik nuo pasirinktos medienos ar
            technologijos. Ne mažiau svarbios žmonių žinios, kruopštumas ir
            gebėjimas kiekvieną detalę pritaikyti individualiam projektui.
          </p>
        </motion.div>

        {/* Main editorial layout */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Craftsmanship image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/technology/canadian3.jpg"
                alt="Meistras rankomis formuoja ir pritaiko masyvų rąstą"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                {/* <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Kiekviena detalė svarbi
                </span> */}
                <p className="mt-2 max-w-md font-serif text-2xl leading-snug text-white sm:text-3xl">
                  Patirtis, kurią galima pamatyti kiekviename rąste.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 border-b border-l border-[#B8875B]/50 sm:-bottom-6 sm:-left-6 sm:h-40 sm:w-40"
            />
          </motion.div>

          {/* Editorial copy */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:py-6"
          >
            

            <h3 className="font-serif text-2xl leading-snug text-[#262626] sm:text-3xl">
              Tradicija, perduodama per kruopštų darbą.
            </h3>

            <div className="mt-6 text-justify space-y-5 text-sm leading-8 text-[#6B6F76] sm:text-base">
              <p>
                Nuo 2003 metų kuriame rąstinius namus, kuriuose natūralios
                medienos charakteris dera su atsakingu meistrų darbu.
                Kiekvienas projektas reikalauja atidaus planavimo ir
                individualių sprendimų.
              </p>

              <p>
                Mūsų naudojamoje kanadietiškoje „laukinio rąsto“ technologijoje
                nėra dviejų visiškai vienodų rąstų. Todėl meistrai kiekvieną
                elementą matuoja, žymi, formuoja ir pritaiko prie gretimų
                konstrukcijos dalių.
              </p>

              <p>
                Toks darbas reikalauja ne tik tinkamų įrankių, bet ir
                supratimo apie medienos savybes, jos natūralius pokyčius bei
                visos konstrukcijos tarpusavio ryšį.
              </p>
            </div>

            <Link
              href="/kontaktai"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#2F4A3B]/30 pb-2 text-sm font-semibold text-[#2F4A3B] transition-colors hover:border-[#B8875B] hover:text-[#B8875B]"
            >
              Aptarkime jūsų projektą
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Experience highlights */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid border-y border-[#788C6A]/20 sm:mt-20 sm:grid-cols-3"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`py-8 sm:px-7 sm:py-10 lg:px-10 ${
                  index !== 0
                    ? "border-t border-[#788C6A]/20 sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3 text-[#788C6A]">
                  <Icon size={19} strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    {item.label}
                  </span>
                </div>

                <p className="mt-5 font-serif text-3xl text-[#2F4A3B] sm:text-4xl">
                  {item.value}
                </p>

                <p className="mt-3 max-w-xs text-sm leading-7 text-[#6B6F76]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-2xl text-center sm:mt-16"
        >
          <p className="font-serif text-xl leading-relaxed text-[#262626] sm:text-2xl">
            „Laukinio rąsto“ namai – tai natūralios medienos ir žmogaus
            meistrystės bendras kūrinys.
          </p>

          <div className="mt-6 flex justify-center">
            <Link
              href="/projektai"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#2F4A3B] transition-colors hover:text-[#B8875B]"
            >
              Susipažinkite su mūsų darbais
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
