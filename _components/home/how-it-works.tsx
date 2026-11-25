
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Clock3,
  Compass,
  Hammer,
  House,
  Trees,
  Truck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "VIZIJA IR PROJEKTAVIMAS",
    title: "Viskas prasideda nuo tavo svajonės",
    description:
      "Susėdame prie vieno stalo, aptariame tavo idėjas, poreikius ir būsimo namo viziją. Pagal eskizus, nuotraukas ar turimus brėžinius kartu su konstruktoriumi parengiame individualų namo projektą.",
    image: "/images/process/vision.jpg",
    imageAlt: "Medinio namo architektūriniai brėžiniai ir projektavimo procesas",
    icon: Compass,
  },
  {
    number: "02",
    label: "MEDIENOS ATRANKA",
    title: "Atrenkame geriausius Karpatų eglės rąstus",
    description:
      "Pagal tavo projektą atrenkame tinkamo ilgio, storio ir formos medieną. Tik apie 25–30 % vertinamų medžių atitinka mūsų reikalavimus. Atrinktus rąstus nužieviname, apsaugome nuo kenkėjų ir paruošiame gamybai.",
    image: "/images/process/wood-selection.jpg",
    imageAlt: "Atrinkti Karpatų eglės rąstai",
    icon: Trees,
    highlight: "Tik 25–30 % medienos atitinka mūsų reikalavimus",
  },
  {
    number: "03",
    label: "RANKŲ DARBAS",
    title: "Kiekvieną rąstą pritaikome individualiai",
    description:
      "Mūsų meistrai rankomis matuoja, žymi ir formuoja kiekvieną rąstą pagal kanadietišką „laukinio rąsto“ technologiją. Rąstai kruopščiai suleidžiami vienas su kitu, išsaugant natūralias medienos formas.",
    image: "/images/process/craftsmanship.jpg",
    imageAlt: "Meistras rankomis formuoja medinį rąstą",
    icon: Hammer,
  },
  {
    number: "04",
    label: "NAMO GAMYBA",
    title: "Tavo namas pirmiausia iškyla mūsų gamybos aikštelėje",
    description:
      "Pagal patvirtintą projektą surenčiame rąstinę konstrukciją, patikriname jos elementų tarpusavio pritaikymą ir paruošiame transportavimui. Rąstinės dalies gamyba paprastai trunka 2–3 mėnesius.",
    image: "/images/process/production.jpg",
    imageAlt: "Rąstinio namo konstrukcijos gamyba",
    icon: House,
    duration: "2–3 mėnesiai",
    durationLabel: "Rąstinės dalies gamyba",
  },
  {
    number: "05",
    label: "PRISTATYMAS IR MONTAVIMAS",
    title: "Per savaitę tavo namas iškyla sklype",
    description:
      "Pagamintą konstrukciją pristatome į tavo sklypą ir surenkame ant paruoštų pamatų. Montavimas paprastai užtrunka vos 4–7 dienas. Tuomet galima įrengti stogą ir pasiruošti kitam statybos etapui.",
    image: "/images/process/installation.jpg",
    imageAlt: "Rąstinio namo konstrukcijos montavimas statybų sklype",
    icon: Truck,
    duration: "4–7 dienos",
    durationLabel: "Montavimas sklype",
  },
  {
    number: "06",
    label: "NATŪRALUS BRANDINIMAS",
    title: "Leidžiame namui natūraliai nusistovėti",
    description:
      "Rąstinei konstrukcijai būtinas laikas išdžiūti ir nusistovėti. Tik po šio etapo galima saugiai atlikti atitinkamus baigiamuosius įrengimo darbus. Neskubiname procesų, nuo kurių priklauso namo kokybė ir ilgaamžiškumas.",
    image: "/images/process/settling.jpg",
    imageAlt: "Natūralus rąstinis namas su matoma medienos tekstūra",
    icon: Clock3,
  },
];

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 "
    >
      {/* Subtle decorative wood-inspired detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#D9C9B1]/40 sm:h-[460px] sm:w-[460px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full border border-[#D9C9B1]/30 sm:h-[360px] sm:w-[360px]"
      />

      <div className="container relative">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
           
            <span className="text-xs font-semibold tracking-[0.22em] text-[#788C6A]">
              NUO IDĖJOS IKI NAMŲ
            </span>
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
            Kaip gimsta tavo{" "}
            <span className="font-serif font-normal italic text-[#788C6A]">
              namai?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Nuo pirmojo eskizo iki paskutinio rąsto – kiekvienas namas gimsta
            iš tavo vizijos ir mūsų meistrų patirties.
          </p>

          {/* <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#404040] sm:text-base">
            Kiekvienas „Laukinio rąsto“ namas kuriamas individualiai.
            Kruopščiai atrenkame medieną, rankomis formuojame kiekvieną rąstą
            ir surenkame konstrukciją, kuri tarnaus ateities kartoms.
          </p> */}

          <div className="mt-8 flex justify-center">
            <ArrowDown
              size={20}
              strokeWidth={1.3}
              className="animate-bounce text-[#B8875B]"
            />
          </div>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting timeline on desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-20 left-1/2 top-20 hidden w-px -translate-x-1/2 bg-[#D9C9B1] lg:block"
          />

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const imageOnLeft = index % 2 === 0;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 45 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16"
                >
                  {/* Image */}
                  <div
                    className={`relative ${
                      imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="group relative aspect-[5/4] overflow-hidden rounded-sm bg-[#E8E2D7]">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                      {/* Step number on image */}
                      <div className="absolute bottom-5 left-5 flex items-center gap-3">
                        <span className="font-serif text-5xl font-medium text-white/90 sm:text-6xl">
                          {step.number}
                        </span>
                        <span className="h-px w-10 bg-white/70" />
                      </div>
                    </div>

                    {/* Small decorative accent */}
                    <div
                      aria-hidden="true"
                      className={`absolute -z-10 hidden h-24 w-24 border border-[#D9C9B1] lg:block ${
                        imageOnLeft
                          ? "-bottom-5 -left-5"
                          : "-bottom-5 -right-5"
                      }`}
                    />
                  </div>

                  {/* Timeline marker */}
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D9C9B1] bg-[#F7F5EE] text-[#2F4A3B] lg:flex"
                  >
                    <Icon size={24} strokeWidth={1} />
                  </div>

                  {/* Text content */}
                  <div
                    className={`flex flex-col justify-center ${
                      imageOnLeft
                        ? "lg:order-2 lg:pl-12"
                        : "lg:order-1 lg:pr-12"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8EDE5] text-[#2F4A3B] lg:hidden">
                        <Icon size={24} strokeWidth={1} />
                      </span>

                      <span className="text-xs font-bold tracking-[0.16em] text-[#788C6A]">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="max-w-lg font-heading text-2xl font-semibold leading-snug text-[#262626] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm text-justify leading-8 text-[#6B6F76] sm:text-base">
                      {step.description}
                    </p>

                    {step.highlight && (
                      <div className="mt-6 inline-flex w-fit items-center gap-3 border-l-2 border-[#B8875B] bg-[#F0EDE4] px-4 py-3">
                        <Trees
                          size={20}
                          className="shrink-0 text-[#788C6A]"
                          strokeWidth={1.5}
                        />
                        <span className="text-sm font-medium text-[#404040]">
                          {step.highlight}
                        </span>
                      </div>
                    )}

                    {step.duration && (
                      <div className="mt-7 flex w-full items-center gap-4 border border-[#B8875B] bg-[#F0EDE4] px-5 py-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8EDE5] text-[#2F4A3B]">
                          <CalendarDays size={21} strokeWidth={1.5} />
                        </div>

                        <div>
                          <p className="font-serif text-xl  text-[#2F4A3B]">
                            {step.duration}
                          </p>
                          <p className="mt-1 text-xs tracking-wide text-[#6B6F76]">
                            {step.durationLabel}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
  className="relative isolate mt-24 flex min-h-[440px] items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-12 sm:py-24 lg:mt-32 lg:min-h-[500px] lg:px-20"
>
  {/* Background image */}
  <Image
    src="/images/process/cta-bg.jpg"
    alt=""
    fill
    sizes="(max-width: 1024px) 100vw, 1200px"
    className="absolute inset-0 -z-20 object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 -z-10 bg-[#1D3026]/55" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1D3026]/35 via-[#1D3026]/45 to-[#1D3026]/75" />

  {/* Decorative circles */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 -top-32 -z-0 h-72 w-72 rounded-full border border-white/15 sm:h-96 sm:w-96"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-36 -left-24 -z-0 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
  />

  {/* Centered content */}
  <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
    <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#D9C9B1]">
      <span className="h-px w-8 bg-[#D9C9B1]" />
      PRADĖKIME KARTU
      <span className="h-px w-8 bg-[#D9C9B1]" />
    </span>

    <h2 className="mt-7 font-heading text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-6xl">
      Tavo svajonių namas prasideda{" "}
      <span className="font-serif font-normal italic text-[#D9C9B1]">
        nuo pokalbio.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
      Papasakok mums savo idėją – padėsime ją paversti individualiu
      rąstinio namo projektu.
    </p>

    <Link
      href="/kontaktai"
      className="group mt-9 inline-flex min-h-[58px] items-center justify-center gap-5 bg-[#D9C9B1] px-8 py-4 text-sm font-semibold text-[#243A2F] transition-all duration-300 hover:bg-white"
    >
      Gauti nemokamą konsultaciją
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#243A2F]/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#243A2F] group-hover:text-white">
        <ArrowRight size={17} />
      </span>
    </Link>
  </div>
</motion.div>

      </div>
    </section>
  );
}
