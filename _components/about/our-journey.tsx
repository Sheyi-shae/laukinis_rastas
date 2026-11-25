
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Globe2,
  MapPin,
  Mountain,
} from "lucide-react";
import PrimaryButton from "../primary-button";

const journey = [
  {
    number: "01",
    period: "2003",
    title: "Pirmieji projektai Ukrainoje",
    description:
      "Mūsų veikla prasidėjo Karpatuose, kur subūrėme patyrusius meistrus ir pradėjome įgyvendinti pirmuosius rąstinių namų projektus.",
    icon: Mountain,
  },
  {
    number: "02",
    period: "Plėtra Europoje",
    title: "Nuo vietinių projektų iki tarptautinės patirties",
    description:
      "Ilgainiui mūsų darbai pasiekė Lietuvą, Gruziją, Bulgariją, Austriją, Slovakiją, Škotiją ir kitas Europos šalis. Įgyvendinome įvairaus masto projektus – nuo individualių šeimos namų iki didelių poilsio kompleksų.",
    icon: Globe2,
  },
  {
    number: "03",
    period: "2018",
    title: "Lietuva tampa mūsų namais",
    description:
      "Pagrindinę rąstinių namų pardavimo veiklą perkėlėme į Lietuvą. Tais pačiais metais dalyvavome statybų parodoje „Resta“ ir sulaukėme daug naujų užsakymų Lietuvos rinkoje.",
    icon: CalendarDays,
  },
  {
    number: "04",
    period: "Šiandien",
    title: "Patirtis, kuri kuria ateitį",
    description:
      "Šiandien „Laukinis rąstas“ tęsia veiklą Lietuvoje ir Šiaurės Europoje, sujungdamas ilgametę statybos patirtį, Karpatų medieną ir individualius architektūrinius sprendimus.",
    icon: MapPin,
  },
];

const statistics = [
  {
    value: "20+",
    label: "Metų patirties",
    description: "Rąstinių namų statyboje",
  },
  {
    value: "2018",
    label: "Metai",
    description: "Pagrindinė veikla perkelta į Lietuvą",
  },
  {
    value: "1 200 m²",
    label: "Projektų mastas",
    description: "Vienas didžiausių mūsų projektų Ukrainoje",
  },
];

export default function OurJourney() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#F0EDE4] py-20 ">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full border border-[#B8875B]/15 sm:h-[450px] sm:w-[450px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-28 -z-10 h-64 w-64 rounded-full border border-[#B8875B]/10 sm:h-[350px] sm:w-[350px]"
      />

      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
         

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Nuo Karpatų kalnų
            <span className="block italic text-[#788C6A]">
              iki Lietuvos ir Europos
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#555A54] sm:text-lg">
            Daugiau nei du dešimtmečius augome kartu su savo projektais –
            nuo pirmųjų namų Ukrainoje iki individualių rąstinės architektūros
            sprendimų įvairiose Europos šalyse.
          </p>
        </motion.div>

        {/* Main journey layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#C9B99F] sm:left-[23px]" />

            <div className="space-y-10 sm:space-y-8">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: -20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.65,
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                    }}
                    className="relative grid grid-cols-[40px_1fr] gap-5 sm:grid-cols-[48px_1fr] sm:gap-7"
                  >
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#B8875B]/40 bg-[#F0EDE4] text-[#2F4A3B] sm:h-12 sm:w-12">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>

                    <div className="pt-0.5">
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#A4774D]">
                        {item.period}
                      </span>

                      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#262626] sm:text-[27px]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#555A54] sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Image and supporting content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <div className="group relative min-h-[420px] overflow-hidden sm:min-h-[540px] lg:min-h-[750px]">
              <Image
                src="/images/about/about-us.JPG"
                alt="Rąstinis namas kalnuotoje gamtos aplinkoje"
                fill
                sizes="(max-width: 1024px) 150vw, 150vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/85 via-[#17271F]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                

                <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
                  Iš Karpatų atėjęs meistriškumas, kuriantis namus Europoje.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                  Kiekvienas įgyvendintas projektas tapo dar viena patirties
                  dalimi, kurią šiandien atsinešame į naujus darbus.
                </p>
              </div>

             
            </div>

            <p className="mt-4 text-xs leading-6 text-[#77766F]">
              Mūsų kelias prasidėjo Karpatuose – regione, kurio mediena ir
              meistrystės tradicijos iki šiol yra svarbi mūsų istorijos dalis.
            </p>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid overflow-hidden border border-[#D6CBBB] bg-[#E9E3D8] sm:grid-cols-3 lg:mt-28"
        >
          {statistics.map((stat, index) => (
            <div
              key={stat.value}
              className={`px-6 py-9 text-center sm:px-8 sm:py-10 ${
                index !== 0
                  ? "border-t border-[#D6CBBB] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="font-serif text-4xl tracking-tight text-[#2F4A3B] sm:text-5xl">
                {stat.value}
              </p>

              <h3 className="mt-3 text-sm font-semibold text-[#262626] sm:text-base">
                {stat.label}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-[#68685F] sm:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center text-center"
        >
          <p className="mb-7 font-serif text-2xl leading-relaxed text-[#2F4A3B] sm:text-3xl">
            „Laukinio rąsto“ istorija – tai kelias, kuriame kiekvienas projektas
            palieka savo pėdsaką.
          </p>

          <PrimaryButton name=" Susipažinkite su mūsų darbais"/>
        </motion.div>
      </div>
    </section>
  );
}
