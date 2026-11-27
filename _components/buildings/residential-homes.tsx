
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  House,
  Layers3,
  Ruler,
  Trees,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  "Individualus projektavimas pagal šeimos poreikius ir gyvenimo būdą.",
  "Masyvios natūralių rąstų konstrukcijos, išsaugančios unikalią medienos formą.",
  "Galimybė derinti tradicinę rąstinę architektūrą su šiuolaikiniais sprendimais.",
  "Natūralių medžiagų kuriama jauki gyvenamoji aplinka.",
  "Konstrukcijos, projektuojamos atsižvelgiant į ilgalaikę eksploataciją ir natūralų medienos sėdimą.",
];

const highlights = [
  {
    icon: House,
    title: "Individuali architektūra",
    description: "Pagal jūsų šeimos poreikius",
  },
  {
    icon: Trees,
    title: " Natūrali Karpatų mediena",
    description: "Masyvūs Karpatų eglės rąstai",
  },
  {
    icon: Ruler,
    title: "Kruopšti meistrystė",
    description: "Kiekvienas rąstas pritaikomas individualiai",
  },
];

export default function ResidentialHomes() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="gyvenamieji-namai"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 "
    >
      {/* Subtle decorative detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full border border-[#B8875B]/15 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 h-56 w-56 rounded-full border border-[#B8875B]/10 sm:h-72 sm:w-72"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 xl:gap-24">
          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/4] lg:aspect-[3/6]">
              <Image
                src="/images/homes/namai1.jpg"
                alt="Individualus rąstinis gyvenamasis namas gamtos apsuptyje"
                fill
                priority={false}
                sizes="(max-width: 1024px) 120vw, 150vw"
                className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271E]/40 via-transparent to-transparent" />
            </div>

            {/* Image caption */}
            {/* <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
              <div className="max-w-xs text-white">
                <span className="mb-2 block text-[10px] font-semibold tracking-[0.25em] text-white/75 uppercase">
                  Individuali statyba
                </span>
                <p className="font-serif text-xl leading-snug sm:text-2xl">
                  Namai, kuriuose gimsta prisiminimai.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm sm:flex">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>
            </div> */}

            {/* Floating detail card */}
            {/* <div className="absolute -bottom-8 right-5 hidden w-52 border border-[#E4D9C8] bg-[#F7F5EE] p-5 shadow-xl sm:block lg:-right-8 lg:bottom-12">
              <span className="mb-3 block text-[10px] font-semibold tracking-[0.2em] text-[#788C6A] uppercase">
                Mūsų principas
              </span>
              <p className="font-serif text-lg leading-snug text-[#262626]">
                Kiekvienas namas turi savo charakterį.
              </p>
            </div> */}
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="relative"
          >
            <motion.div variants={fadeUp}>
            

              <h2 className="max-w-xl font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-[3.5rem]">
                Namai, kuriuose gera gyventi{" "}
                <span className="text-[#788C6A] italic">
                  ištisas kartas.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-justify max-w-xl text-lg leading-relaxed text-[#404040]"
            >
              Tikri namai – tai daugiau nei sienos ir stogas. Tai vieta,
              kurioje kuriamos šeimos tradicijos, auga vaikai ir gimsta
              prisiminimai.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-5 text-justify max-w-xl space-y-4 text-[15px] leading-[1.9] text-[#6B6F76]"
            >
              <p>
                Statome individualius gyvenamuosius namus iš masyvių Karpatų
                eglės rąstų. Kiekvienas namas projektuojamas pagal būsimo
                šeimininko poreikius – nuo jaukaus vieno aukšto būsto iki
                erdvios šeimos rezidencijos su terasomis, dideliais langais ir
                išskirtiniais architektūriniais sprendimais.
              </p>

              <p>
                Natūrali mediena suteikia namams savitą charakterį, jaukumą ir
                padeda sušvelninti patalpų drėgmės svyravimus. Kruopščiai
                pritaikytos rąstų jungtys, tinkami konstrukciniai sprendimai ir
                atsakinga priežiūra užtikrina prielaidas ilgaamžei statinio
                eksploatacijai.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-1 gap-4 border-y border-[#DED8CC] py-6 sm:grid-cols-3 sm:gap-3"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAE5D9] text-[#2F4A3B]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#262626]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6B6F76]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeUp} className="mt-9">
              <h3 className="mb-5 font-serif text-2xl text-[#262626]">
                Kuo išsiskiria mūsų gyvenamieji namai?
              </h3>

              <ul className="space-y-3.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F4A3B]/10 text-[#2F4A3B]">
                      <Check size={12} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm leading-relaxed text-[#404040]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/kontaktai"
                className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#2F4A3B] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#243A2F]"
              >
                Aptarti gyvenamojo namo projektą
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}
