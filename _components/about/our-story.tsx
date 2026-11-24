
"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Hammer,
  House,
  Trees,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const storySteps = [
  {
    number: "01",
    year: "2003",
    icon: House,
    title: "Viskas prasidėjo nuo vieno namo",
    description:
      "2003 metais Ukrainoje mūsų kolega nusprendė pasistatyti rąstinį namą. Pirmasis bandymas buvo nesėkmingas – dėl prastos statybos kokybės namą teko nugriauti vos po metų.",
  },
  {
    number: "02",
    year: "Nauja pradžia",
    icon: Trees,
    title: "Nusprendėme statyti iš naujo",
    description:
      "Tačiau svajonės jis neatsisakė. Nusprendėme padėti jam pastatyti namą iš naujo. Karpatuose subūrėme patyrusius meistrus, tarp jų – specialistą, dirbusį Kanadoje ir gerai išmaniusį rąstinių namų statybos technologiją.",
  },
  {
    number: "03",
    year: "Pirmasis namas",
    icon: Hammer,
    title: "Gimė pirmasis mūsų pastatytas namas",
    description:
      "Taip gimė pirmasis mūsų pastatytas rąstinis namas. Jis stovi iki šiol. Ši patirtis tapo mūsų veiklos pradžia. Supratome, kad tinkamai atrinkta mediena, profesionali meistrystė ir technologinių reikalavimų laikymasis leidžia sukurti statinius, kurie gali tarnauti ne vienai kartai.",
  },
];

export default function OurStory() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="musu-istorija"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full border border-[#B8875B]/10"
      />

      <div className="container relative">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center justify-center gap-3"
          >
          
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#788C6A] uppercase">
              Mūsų pradžia
            </span>
           
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl"
          >
            Mūsų istorija prasidėjo{" "}
            <span className="text-[#788C6A] italic">nuo vieno namo.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#6B6F76] sm:text-lg"
          >
            Kartais dideli dalykai prasideda nuo vieno sprendimo. Mūsų atveju –
            nuo noro pastatyti namą taip, kaip jis iš tikrųjų turėtų būti
            pastatytas.
          </motion.p>
        </motion.div>

        {/* Story layout */}
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image side */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85 }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/bcc2.jpeg"
                alt="Pirmasis rąstinis namas, tapęs Laukinio rąsto istorijos pradžia"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271E]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="mb-3 block text-[10px] font-semibold tracking-[0.25em] text-white/70 uppercase">
                  Istorijos pradžia
                </span>
                <p className="font-serif text-3xl text-white sm:text-4xl">
                  2003
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">
                  Vienas namas, viena pamoka ir pradžia, kuri pakeitė mūsų
                  kelią.
                </p>
              </div>
            </div>

            {/* Image caption */}
            <div className="absolute -bottom-5 right-5 hidden border border-[#DED8CC] bg-[#F7F5EE] px-6 py-4 shadow-lg sm:block lg:-right-7">
              <p className="font-serif text-lg text-[#2F4A3B]">
                Patirtis, kuri išliko.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#D8D1C4] sm:left-[23px]" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.18 } },
              }}
              className="space-y-12 sm:space-y-14"
            >
              {storySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={reveal}
                    className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
                  >
                    {/* Timeline marker */}
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D1C4] bg-[#F7F5EE] text-[#2F4A3B] sm:h-12 sm:w-12">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <div className="pt-1">
                      <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B8875B] uppercase">
                        {step.year}
                      </span>

                      <h3 className="mt-3 font-serif text-2xl leading-snug text-[#262626] sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-[1.9] text-[#6B6F76]">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 overflow-hidden bg-[#243A2F] px-7 py-12 text-center sm:mt-32 sm:px-12 sm:py-16 lg:px-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-32 h-72 w-72 rounded-full border border-white/[0.08]"
          />

          <span className="relative mb-6 block text-[10px] font-semibold tracking-[0.28em] text-[#D9C9B1] uppercase">
            Daugiau nei du dešimtmečiai meistrystės
          </span>

          <h3 className="relative mx-auto max-w-4xl font-serif text-3xl leading-relaxed text-white sm:text-4xl lg:text-5xl">
            Nuo vieno namo prasidėjo{" "}
            <span className="text-[#D9C9B1] italic">
              daugiau nei dvidešimt metų trunkanti istorija.
            </span>
          </h3>

          <div className="relative mx-auto mt-8 h-px w-16 bg-[#B8875B]" />
        </motion.div>
      </div>
    </section>
  );
}
