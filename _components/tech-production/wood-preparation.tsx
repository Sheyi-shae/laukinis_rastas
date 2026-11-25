
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Trees,
  Scissors,
  ShieldCheck,
  Wind,
  ArrowDown,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Medienos atranka",
    subtitle: "Kokybė prasideda dar miške",
    description:
      "Dar prieš pradedant gamybą įvertiname kiekvieno medžio savybes. Atrenkame tinkamo skersmens, tiesumo ir formos Karpatų eglės rąstus. Atmetame pernelyg kreivus, pažeistus ar būsimos konstrukcijos reikalavimų neatitinkančius medžius.",
    image: "/images/technology/tech1.jpeg",
    imageAlt: "Karpatų miške atrenkama statybai tinkama eglės mediena",
    icon: Trees,
    tag: "Atsakinga atranka",
  },
  {
    number: "02",
    title: "Nužievinimas",
    subtitle: "Paruošiame natūralią medieną",
    description:
      "Nukirsti rąstai operatyviai pristatomi į gamybos aikštelę. Čia nuo jų pašalinama žievė, apžiūrimas medienos paviršius ir įvertinama bendra kiekvieno rąsto būklė. Taip paruošiame medieną tolesniems gamybos etapams.",
    image: "/images/technology/tech3.jpeg",
    imageAlt: "Nuo didelių eglės rąstų pašalinama žievė",
    icon: Scissors,
    tag: "Kruopštus paruošimas",
  },
  {
    number: "03",
    title: "Apsauginis apdorojimas",
    subtitle: "Rūpinamės medienos apsauga",
    description:
      "Paruošti rąstai apdorojami tinkamomis apsauginėmis priemonėmis, padedančiomis apsaugoti medieną nuo biologinių pažeidimų. Priemones parenkame atsižvelgdami į medienos būklę, paskirtį ir tolesnes laikymo sąlygas.",
    image: "/images/technology/tech4.jpeg",
    imageAlt: "Medienos apsauginis apdorojimas gamybos aikštelėje",
    icon: ShieldCheck,
    tag: "Medienos apsauga",
  },
  {
    number: "04",
    title: "Natūralus džiovinimas",
    subtitle: "Leidžiame medienai natūraliai džiūti",
    description:
      "Apdoroti rąstai sukraunami į tinkamai vėdinamas rietuves, kuriose gali natūraliai džiūti. Tinkamas sukrovimas ir oro cirkuliacija padeda tolygiau šalinti drėgmę ir paruošti medieną tolimesniems darbams.",
    image: "/images/technology/tech5.jpeg",
    imageAlt: "Natūraliai džiūstantys eglės rąstai vėdinamose rietuvėse",
    icon: Wind,
    tag: "Natūralus procesas",
  },
];

export default function WoodPreparation() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" as const },
    },
  };

  return (
    <section id="medienos-paruosimas" className="relative overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 lg:py-32">
      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
           
            <span className="text-[10px] md:text-base font-bold uppercase tracking-[0.28em] text-[#788C6A] sm:text-xs">
              Gamybos procesas
            </span>
           
          </div>

          <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Medienos paruošimas –

            <span className="block italic text-[#788C6A]">
             kokybė prasideda dar miške
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#555B55] sm:text-base sm:leading-9">
            Tinkamas medienos paruošimas yra vienas svarbiausių ilgaamžio rąstinio namo statybos etapų. Medieną ruošiame šaltuoju metų laiku. Paprastai miško kirtimo darbai vyksta nuo rugsėjo pabaigos iki balandžio pabaigos, kai sumažėja medieną pažeidžiančių vabzdžių aktyvumas.
          </p>

          {/* <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D9C9B1] bg-[#F7F5EE] px-5 py-3">
            <Trees size={17} className="text-[#788C6A]" />
            <span className="text-xs font-medium text-[#555B55]">
              Medieną ruošiame šaltuoju metų laiku
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[#85877F]">
            Paprastai miško kirtimo darbai vyksta nuo rugsėjo
            pabaigos iki balandžio pabaigos, kai sumažėja
            medieną pažeidžiančių vabzdžių aktyvumas.
          </p> */}
        </motion.div>

        {/* Production timeline */}
        <div className="relative mt-20 space-y-16 sm:mt-24 sm:space-y-24 lg:mt-28 lg:space-y-32">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#D9C9B1] lg:block" />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const reversed = index % 2 !== 0;

            return (
              <div
                key={stage.number}
                className={`relative grid items-center gap-9 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: reversed ? 35 : -35 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="group relative min-h-[300px] overflow-hidden sm:min-h-[390px] lg:min-h-[440px]">
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/40 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F5EE] text-[#2F4A3B]">
                        <Icon size={19} />
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        {stage.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline marker */}
                <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#F0EDE4] bg-[#2F4A3B] text-xs font-semibold text-white lg:flex">
                  {stage.number}
                </div>

                {/* Text */}
                <motion.div
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={reveal}
                  className="relative"
                >
                  <span className="font-serif text-6xl leading-none text-[#B8875B]/45 sm:text-7xl">
                    {stage.number}
                  </span>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#788C6A]">
                      Gamybos etapas
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[#262626] sm:text-4xl">
                    {stage.title}
                  </h3>

                  <h4 className="mt-3 text-sm text-justify font-semibold text-[#2F4A3B] sm:text-base">
                    {stage.subtitle}
                  </h4>

                  <p className="mt-5 max-w-xl text-sm leading-8 text-[#555B55] sm:text-base sm:leading-9">
                    {stage.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto mt-20 flex max-w-3xl flex-col items-center border-t border-[#D9C9B1] pt-10 text-center sm:mt-28"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5E1D6] text-[#2F4A3B]">
            <ArrowDown size={19} />
          </div>

          <p className="mt-6 font-serif text-2xl leading-relaxed text-[#2F4A3B] sm:text-3xl">
            Tik tinkamai paruošta mediena gali tapti ilgaamžio namo pagrindu - kiekvienas paruošimo etapas svarbus galutinei konstrukcijos kokybei ir medienos ilgaamžiškumui.
          </p>

          {/* <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B6F76]">
            Kiekvienas paruošimo etapas svarbus galutinei
            konstrukcijos kokybei ir medienos ilgaamžiškumui.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
