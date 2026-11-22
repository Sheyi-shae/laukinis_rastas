
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Trees,
  House,
  Ruler,
  Leaf,
  ShieldCheck,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

const advantages = [
  {
    number: "01",
    title: "Atrinkta Karpatų kalnų eglė",
    description:
      "Naudojame aukštikalnėse lėtai augančią eglę, pasižyminčią tankiomis rievėmis ir tvirta mediena. Kiekvienam namui kruopščiai atrenkame tinkamiausius rąstus – vos 25–30 % vertinamos medienos atitinka mūsų keliamus reikalavimus.",
    icon: Trees,
    highlight: "25–30%",
    highlightText: "medienos atitinka mūsų reikalavimus",
  },
  {
    number: "02",
    title: "Kiekvienas namas – vienintelis toks",
    description:
      "Nestatome vienodų namų. Kiekvieną projektą kuriame pagal jūsų viziją, poreikius ir gyvenimo būdą. Natūralios rąstų formos suteikia kiekvienam statiniui savitą charakterį, todėl net pagal tą patį projektą pastatyti namai niekada neatrodo identiškai.",
    icon: House,
  },
  {
    number: "03",
    title: "Kanadietiška technologija ir meistrų tikslumas",
    description:
      "Kiekvienas rąstas individualiai matuojamas, formuojamas ir pritaikomas prie gretimų rąstų. Tradicinę kanadietišką „laukinio rąsto“ technologiją deriname su kruopščiu rankų darbu, kad sukurtume tvirtą ir preciziškai suręstą konstrukciją.",
    icon: Ruler,
  },
  {
    number: "04",
    title: "Natūralus ir jaukus namų mikroklimatas",
    description:
      "Masyvi natūrali mediena padeda reguliuoti patalpų drėgmės svyravimus ir kuria savitą gyvenamąją aplinką. Natūrali medienos tekstūra bei aromatas suteikia namams jaukumo, kurio neįmanoma atkartoti sintetinėmis apdailos medžiagomis.",
    icon: Leaf,
  },
  {
    number: "05",
    title: "Ilgaamžė vertė ateities kartoms",
    description:
      "Tinkamai pastatytas ir prižiūrimas rąstinis namas gali tarnauti šimtmečius. Didelį dėmesį skiriame medienos paruošimui, konstrukcijų kokybei ir technologiniams procesams, nuo kurių priklauso namo ilgaamžiškumas.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Daugiau nei 20 metų patirties",
    description:
      "Rąstinius namus statome nuo 2003 metų. Per šį laikotarpį įgyvendinome projektus Lietuvoje ir įvairiose Europos šalyse – nuo individualių šeimos namų iki didelių poilsio kompleksų. Mūsų patirtis leidžia įgyvendinti ir sudėtingus individualius sumanymus.",
    icon: CalendarDays,
    highlight: "2003",
    highlightText: "mūsų veiklos pradžia",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: (index % 3) * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    
<section
  id="why-choose-us"
  className="relative isolate overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 "
>
  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/images/choose-bg.jpg"
      alt=""
      fill
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* Warm ivory overlay */}
  <div className="absolute inset-0 -z-10 bg-[#F7F5EE]/75" />

  {/* Subtle background depth */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F7F5EE]/70 via-transparent to-[#F0EDE4]/80" />


      <div className="container relative">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#B8875B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#788C6A] sm:text-xs">
              KOKYBĖ IR MEISTRYSTĖ
            </span>
            <span className="h-px w-9 bg-[#B8875B]" />
          </div>

          <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
            Kodėl verta rinktis
            <span className="mt-1 block text-[#2F4A3B]">
              „Laukinį rąstą“?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6B6F76] sm:text-base">
            Kiekvienas mūsų namas prasideda nuo kruopščiai atrinktos
            medienos, patirties ir atsakingo požiūrio į meistrystę.
            Būtent tai lemia mūsų statinių išskirtinumą.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 border-t border-[#2F4A3B]/15 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                custom={index}
                variants={itemVariants}
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`group relative flex flex-col border-b border-[#2F4A3B]/15 px-5 py-9 transition-colors duration-500 hover:bg-white/45 sm:px-7 sm:py-10 lg:px-8 lg:py-12 ${
                  index % 3 !== 0
                    ? "lg:border-l lg:border-[#2F4A3B]/15"
                    : ""
                } ${
                  index % 2 !== 0
                    ? "sm:border-l sm:border-[#2F4A3B]/15 lg:border-l"
                    : ""
                }`}
              >
                {/* Number and icon */}
                <div className="mb-7 flex items-center justify-between">
                  <span className="font-heading text-sm tracking-[0.18em] text-[#B8875B]">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2F4A3B]/15 text-[#2F4A3B] transition-all duration-500 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <Icon size={21} strokeWidth={1} />
                  </div>
                </div>

                {/* Title */}
                <h4 className="max-w-sm font-heading text-xl min-h-0 lg:min-h-16 font-semibold leading-snug text-[#262626] transition-colors duration-300 group-hover:text-[#2F4A3B] sm:text-2xl">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-justify leading-[1.85] text-[#6B6F76]">
                  {item.description}
                </p>

                {/* Highlight statistic */}
                {item.highlight && (
                  <div className="mt-6 flex items-center gap-3 border-t border-[#2F4A3B]/10 pt-5">
                    <span className="font-heading text-3xl font-medium tracking-tight text-[#2F4A3B]">
                      {item.highlight}
                    </span>
                    <span className="max-w-[130px] text-[10px] font-medium uppercase leading-5 tracking-[0.1em] text-[#788C6A]">
                      {item.highlightText}
                    </span>
                  </div>
                )}

                {/* Bottom hover detail */}
                <div className="mt-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#788C6A] opacity-70 transition-all duration-300 group-hover:gap-3 group-hover:opacity-100">
                  Mūsų įsipareigojimas
                  <ArrowUpRight size={14} strokeWidth={1.7} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:mt-16"
        >
          <span className="h-px w-12 bg-[#B8875B]" />

          <p className="max-w-xl font-heading text-xl italic leading-relaxed text-[#2F4A3B] sm:text-2xl">
            „Kokybė slypi detalėse, o tikroji vertė – tai, kas išlieka.“
          </p>
        </motion.div>
      </div>
    </section>
  );
}
