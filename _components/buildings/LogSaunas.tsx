
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Flame,
  House,
  Trees,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: House,
    number: "01",
    title: "Individualūs projektai",
    description:
      "Nuo nedidelės pirties iki erdvaus pirties namo.",
  },
  {
    icon: Trees,
    number: "02",
    title: "Natūrali Karpatų eglė",
    description:
      "Masyvios rąstų konstrukcijos ir autentiška medienos tekstūra.",
  },
  {
    icon: Waves,
    number: "03",
    title: "Poilsio erdvės",
    description:
      "Galimybė įrengti poilsio zonas, terasas ir papildomas patalpas.",
  },
  {
    icon: Flame,
    number: "04",
    title: "Tradicija ir komfortas",
    description:
      "Tradicinės architektūros ir šiuolaikinių sprendimų derinys.",
  },
  {
    icon: Check,
    number: "05",
    title: "Išskirtinis charakteris",
    description:
      "Statinys, tampantis visos sodybos architektūriniu akcentu.",
  },
];

export default function LogSaunas() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="rastines-pirtys"
      className="relative isolate overflow-hidden bg-[#243A2F] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[350px] w-[350px] rounded-full border border-white/[0.06]"
      />

      <div className="container">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center justify-center gap-3"
          >
            
            <span className="text-[10px] font-semibold tracking-[0.28em] text-[#D9C9B1] uppercase">
              Rąstinės pirtys
            </span>
           
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tikras poilsis prasideda{" "}
            <span className="text-[#D9C9B1] italic">nuo natūralumo.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-7 max-w-2xl text-base leading-[1.9] text-white/70 sm:text-lg"
          >
            Pirtis – tai ne tik vieta pasikaitinti. Tai erdvė, kurioje sustoja
            kasdienis skubėjimas, susitinka artimieji ir puoselėjamos ilgametės
            poilsio tradicijos.
          </motion.p>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mt-14 overflow-hidden sm:mt-16 lg:mt-20"
        >
          <div className="relative aspect-[5/4] sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/images/bc3.jpg"
              alt="Natūralių Karpatų eglės rąstų pirtis gamtos apsuptyje"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#14251C]/90 via-[#14251C]/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-end sm:p-10 lg:p-12">
              <div className="max-w-xl">
                <span className="mb-3 block text-[10px] font-semibold tracking-[0.25em] text-[#D9C9B1] uppercase">
                  Natūrali ramybė
                </span>
                <h3 className="font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
                  Erdvė, kurioje norisi sulėtinti laiką.
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                <ArrowUpRight size={21} strokeWidth={1.4} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="mx-auto mt-12 grid max-w-5xl gap-7 text-[15px] leading-[1.9] text-white/70 md:grid-cols-2 md:gap-12 lg:mt-14"
        >
          <motion.p variants={reveal}>
            Statome individualias rąstines pirtis iš Karpatų eglės, naudodami
            kanadietišką „laukinio rąsto“ technologiją. Natūralios medienos
            tekstūra, masyvios konstrukcijos ir išskirtinė architektūra suteikia
            kiekvienai pirčiai autentišką charakterį.
          </motion.p>

          <motion.p variants={reveal}>
            Pagal jūsų poreikius galime projektuoti tiek nedideles tradicines
            pirtis, tiek erdvesnius pirties namus su poilsio kambariais,
            terasomis ir papildomomis gyvenamosiomis erdvėmis.
          </motion.p>
        </motion.div>

        {/* Features */}
        <div className="mt-20 border-t border-white/15 pt-10 sm:mt-24 sm:pt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="mb-3 block text-[10px] font-semibold tracking-[0.25em] text-[#B8875B] uppercase">
                Mūsų požiūris
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl">
                Kuo išsiskiria mūsų rąstinės pirtys?
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Kiekvienas projektas kuriamas individualiai, atsižvelgiant į
              jūsų poilsio viziją ir aplinką.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  variants={reveal}
                  className="group bg-[#243A2F] p-6 transition-colors duration-300 hover:bg-[#2F4A3B] sm:p-7 lg:min-h-[240px] lg:p-6 xl:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className="text-[#D9C9B1] transition-transform duration-300 group-hover:-translate-y-1"
                    />
                    <span className="text- tracking-widest text-white/30">
                      
                    </span>
                  </div>

                  <h4 className="min-h-8 md:min-h-14 mt-3 font-serif text-xl leading-snug text-white">
                    {feature.title}
                  </h4>

                  <p className="mt-3 text-sm text-justify leading-relaxed text-white/55">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-9 sm:flex-row sm:items-center lg:mt-16"
        >
          <div>
            <p className="font-serif text-2xl text-white sm:text-3xl">
              Svajojate apie savo rąstinę pirtį?
            </p>
            <p className="mt-2 text-sm text-white/55">
              Papasakokite mums, kokią poilsio erdvę įsivaizduojate.
            </p>
          </div>

          <Link
            href="/kontaktai"
            className="group inline-flex min-h-14 shrink-0 items-center gap-4 bg-[#D9C9B1] px-7 py-4 text-sm font-semibold text-[#243A2F] transition-colors duration-300 hover:bg-[#F0EDE4]"
          >
            Aptarti rąstinės pirties projektą
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
