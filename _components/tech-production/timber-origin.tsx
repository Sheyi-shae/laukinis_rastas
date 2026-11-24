
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Trees, ArrowUpRight } from "lucide-react";

const statistics = [
  {
    value: "25–30%",
    label: "Vertinamos medienos atrenkama gamybai",
    detail: "Griežta rąstų atranka",
  },
  {
    value: "120–140 m.",
    label: "Apytikris 35 cm skersmens kalnų eglės augimo laikotarpis",
    detail: "Lėtas augimas kalnuose",
  },
  {
    value: "100%",
    label: "Kiekvienas konstrukcijos rąstas pritaikomas individualiai",
    detail: "Individualus meistrų darbas",
  },
];

export default function TimberOrigin() {
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
    <section
      id="karpatu-egle"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Text */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <div className="mb-6 flex items-center gap-3">
              <Trees size={17} className="text-[#788C6A]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#788C6A] sm:text-xs">
                Natūrali mediena
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-4xl leading-[1.15] tracking-tight text-[#262626] sm:text-5xl lg:text-[58px]">
              Karpatų eglė –
              <span className="block italic text-[#788C6A]">
                mediena, užaugusi atšiauriomis sąlygomis
              </span>
            </h2>

            <div className="mt-8 text-justify max-w-xl space-y-5 text-sm leading-8 text-[#555B55] sm:text-base sm:leading-9">
              <p>
                Karpatų kalnuose eglės auga lėčiau nei daugelyje žemumų
                miškų. Dėl sudėtingų augimo sąlygų jų metinės rievės
                gali būti tankesnės, o mediena pasižymėti vertingomis
                mechaninėmis savybėmis.
              </p>

              <p>
                Pokalbyje su gamintoju nurodyta, kad maždaug 35 cm
                skersmens eglė kalnuose gali augti 120–140 metų.
                Tai puikiai iliustruoja, kiek laiko gamta formuoja
                medieną, kuri vėliau tampa mūsų namų dalimi.
              </p>

              <p>
                Statybai naudojame Karpatuose augančią paprastąją
                eglę, kurią kruopščiai atrenkame pagal rąstų
                tiesumą, skersmenį, šakotumą ir kitus kokybės
                požymius.
              </p>
            </div>

            <div className="mt-9 flex items-center gap-4 border-t border-[#D9C9B1] pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8E4D9] text-[#2F4A3B]">
                <Trees size={20} />
              </div>

              <p className="max-w-sm text-xs leading-6 text-[#6B6F76]">
                Kiekvienam namui mediena atrenkama individualiai,
                atsižvelgiant į būsimos konstrukcijos poreikius.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative min-h-[420px] overflow-hidden rounded-sm sm:min-h-[540px] lg:min-h-[620px]">
              <Image
                src="/images/technology/tech2.jpeg"
                alt="Karpatų kalnų eglių miškas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/75">
                    Medienos kilmė
                  </span>
                  <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    Karpatų kalnai
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </div>

            {/* Decorative detail */}
            <div className="absolute -bottom-5 -left-5 -z-10 h-32 w-32 border border-[#B8875B]/40 sm:-bottom-7 sm:-left-7 sm:h-44 sm:w-44" />
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="mt-20 grid overflow-hidden rounded-sm bg-[#F0EDE4] sm:grid-cols-3 lg:mt-28"
        >
          {statistics.map((item, index) => (
            <motion.div
              key={item.value}
              variants={reveal}
              className={`relative px-7 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12 ${
                index !== 0
                  ? "border-t border-[#D9C9B1] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#788C6A]">
                {item.detail}
              </span>

              <p className="mt-4 font-serif text-4xl tracking-tight text-[#2F4A3B] sm:text-5xl lg:text-[52px]">
                {item.value}
              </p>

              <p className="mt-4 max-w-[260px] text-sm leading-7 text-[#555B55]">
                {item.label}
              </p>

              <span className="absolute right-7 top-8 font-serif text-sm text-[#B8875B]/70">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-4 text-xs leading-6 text-[#85877F]">
          Nurodyti medienos atrankos ir augimo laikotarpio skaičiai
          pateikiami pagal gamintojo informaciją.
        </p>
      </div>
    </section>
  );
}
