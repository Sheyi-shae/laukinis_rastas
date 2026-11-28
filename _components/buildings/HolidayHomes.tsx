
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  House,
  Trees,
  Users,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const features = [
  {
    icon: Compass,
    number: "01",
    title: "Individualūs projektai",
    description:
      "Sprendimai pagal sklypo aplinką, architektūrą ir poilsio poreikius.",
  },
  {
    icon: House,
    number: "02",
    title: "Įvairaus dydžio statiniai",
    description:
      "Pavieniai poilsio nameliai arba kelių pastatų kompleksai.",
  },
  {
    icon: Trees,
    number: "03",
    title: "Harmonija su gamta",
    description:
      "Natūralios medienos architektūra, deranti su miškais, ežerais ir kaimo kraštovaizdžiu.",
  },
  {
    icon: Users,
    number: "04",
    title: "Asmeniniam ir verslo poilsiui",
    description:
      "Sprendimai tiek šeimos poilsiui, tiek komercinei nuomai.",
  },
  {
    icon: Check,
    number: "05",
    title: "Vieninga sodybos vizija",
    description:
      "Galimybė derinti gyvenamuosius, poilsio ir pirties pastatus vienoje sodyboje.",
  },
];

export default function HolidayHomes() {
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
      id="poilsio-namai"
      className="relative overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        {/* Section introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={reveal}
            className="mb-6 flex items-center justify-center gap-3"
          >
           
            <span className="text-[10px] md:text-base font-bold tracking-[0.25em] text-[#788C6A] uppercase">
              Poilsio namai ir sodybos
            </span>
           
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl"
          >
            Vieta, į kurią visada norisi{" "}
            <span className="text-[#788C6A] italic">sugrįžti.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-7 max-w-3xl text-base leading-[1.9] text-[#555B56] sm:text-lg"
          >
            Įsivaizduokite rytą gamtos apsuptyje, kavą terasoje ir namus,
            kuriuose kiekviena detalė primena apie natūralumą. Rąstinis poilsio
            namas – tai galimybė pabėgti nuo miesto šurmulio neprarandant
            komforto.
          </motion.p>
        </motion.div>

        {/* Main architectural image */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85 }}
          className="relative mt-14 sm:mt-16 lg:mt-20"
        >
          <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/images/homes/namai3.png"
              alt="Rąstinis poilsio namas gamtos apsuptyje su erdvia terasa"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#17271E]/75 via-[#17271E]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10 lg:p-12">
              <div className="max-w-2xl">
              
                <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Daugiau nei poilsio namas.
                  <br className="hidden sm:block" /> Tai jūsų vieta pabėgti.
                </h3>
              </div>

              
            </div>
          </div>

         
        </motion.div>

        {/* Descriptive content */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <span className="mb-4 block text-[10px] md:text-sm  font-semibold tracking-[0.25em] text-[#788C6A] uppercase">
              Sukurta jūsų poilsiui
            </span>

            <h3 className="font-serif text-3xl leading-tight text-[#262626] sm:text-4xl">
              Natūrali aplinka.
              <br />
              <span className="text-[#788C6A] italic">
                Savita architektūra.
              </span>
            </h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-5 text-justify text-[15px] leading-[1.9] text-[#555B56]"
          >
            <motion.p variants={reveal}>
              Kuriame individualius rąstinius poilsio namus ir sodybas,
              harmoningai įsiliejančius į gamtinę aplinką. Nuo nedidelio
              savaitgalio namelio iki erdvios šeimos sodybos ar kelių pastatų
              poilsio komplekso – kiekvieną projektą pritaikome jo paskirčiai.
            </motion.p>

            <motion.p variants={reveal}>
              Masyvūs rąstai suteikia pastatams išskirtinę išvaizdą, o
              natūralios medžiagos kuria jaukią atmosferą tiek trumpam poilsiui,
              tiek ilgesniam gyvenimui gamtoje.
            </motion.p>

            <motion.p variants={reveal}>
              Rąstinė architektūra taip pat gali tapti išskirtiniu
              konkurenciniu pranašumu kaimo turizmo, apgyvendinimo ir poilsio
              paslaugų verslams.
            </motion.p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="mt-20 border-t border-[#D8D1C4] pt-10 sm:mt-24 sm:pt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="mb-3 block text-[10px] md:text-base font-semibold tracking-[0.25em] text-[#788C6A] uppercase">
                Galimybės ir sprendimai
              </span>
              <h3 className="font-serif text-3xl text-[#262626] sm:text-4xl">
                Kuo išsiskiria mūsų poilsio namai ir sodybos?
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  variants={reveal}
                  className="group min-h-[220px] border border-[#DED8CC] bg-[#F7F5EE] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8875B]/50 hover:shadow-xl sm:p-7"
                >
                  

                  <h4 className="mt-8 font-serif text-xl leading-snug text-[#262626]">
                    {feature.title}
                  </h4>

                  <p className="mt-3 text-justify text-sm leading-relaxed text-[#6B6F76]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col gap-6 bg-[#E7E0D3] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:mt-20 lg:p-12"
        >
          <div className="max-w-xl">
            <p className="font-serif text-2xl leading-snug text-[#262626] sm:text-3xl">
              Įgyvendinkime jūsų poilsio vietos viziją.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#62665F]">
              Nuo nedidelio savaitgalio namelio iki išskirtinės poilsio sodybos.
            </p>
          </div>

          <Link
            href="/kontaktai"
            className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-4 bg-[#2F4A3B] px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#243A2F]"
          >
            Aptarti poilsio namo projektą
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
