
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Vadimas Pavlovskis",
    company: "Malūniai",
    title: "Jaukūs namai ir ilgalaikis pasitikėjimas",
    text: "„Laukinio rąsto“ komanda mums pastatė jaukų ir kokybišką namą, o sėkmingas bendradarbiavimas tęsiasi jau ne vienerius metus. Vėliau patikėjome komandai ir naujo „Joga House“ objekto įgyvendinimą. Džiaugiamės rezultatais ir tikimės bendradarbiauti ateityje.",
    image: "/images/testimonials/vadimas.jpg",
  },
  {
    id: "02",
    name: "Gediminas Petraitis",
    company: "MB „Kauno rajono statybų projektai“",
    title: "Profesionalumas, kokybė ir greitas įgyvendinimas",
    text: "Dėkojame „Laukinio rąsto“ komandai už profesionaliai ir operatyviai įgyvendintą rąstinio namo projektą. Ypač vertiname kokybiškų medžiagų pasirinkimą ir atsakingą požiūrį į atliktus darbus.",
    image: "/images/testimonials/gediminas.jpg",
  },
  {
    id: "03",
    name: "Deimantė ir Ernestas",
    company: "2023 m.",
    title: "Sudėtingas projektas – patikimose rankose",
    text: "Mūsų nestandartinio rąstinio pirties namo projektas pareikalavo ypatingo dėmesio ir profesionalumo. Esame dėkingi komandai, ypač Karoliui Cieminiui, už nepriekaištingą darbą, vertingas konsultacijas ir pagalbą sprendžiant sudėtingus statybos klausimus.",
    image: "/images/testimonials/deimante-ernestas.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="atsiliepimai"
      className="relative isolate overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 "
      >
          
            {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <Image
      src="/images/hero-bg.png"
      alt=""
      fill
      priority={false}
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* Soft ivory overlay */}
  <div className="absolute inset-0 -z-10 bg-[#F7F5EE]/75" />

  {/* Gradient for balanced contrast */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F7F5EE]/45 via-transparent to-[#F0EDE4]/65" />

      {/* Decorative background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 -z-10 h-[380px] w-[380px] rounded-full border border-[#D9C9B1]/40 sm:h-[500px] sm:w-[500px]"
      >
        <div className="absolute inset-8 rounded-full border border-[#D9C9B1]/30" />
        <div className="absolute inset-16 rounded-full border border-[#D9C9B1]/20" />
      </div>

      <div className="container">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-[#788C6A]">
              <span className="h-px w-8 bg-[#B8875B]" />
              KLIENTŲ ATSILIEPIMAI
            </span>

            <h2 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
              Mūsų darbai kalba{" "}
              <span className="font-serif font-normal italic text-[#788C6A]">
                patys už save.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-md text-base leading-8 text-[#6B6F76] lg:pb-1"
          >
            O geriausias jų įvertinimas – klientų pasitikėjimas ir
            rekomendacijos.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="group relative flex h-full flex-col overflow-hidden border border-[#E6E0D5] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B8875B]/50 hover:shadow-[0_20px_50px_rgba(38,38,38,0.08)]"
            >
              {/* Card top */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#A0A096]">
                    {testimonial.id} / ATSILIEPIMAS
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0EDE4] transition-colors duration-300 group-hover:bg-[#2F4A3B]">
                    <Quote
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#788C6A] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                <h4 className="mb-5 text-2xl font-semibold leading-snug tracking-tight text-[#262626]">
                  {testimonial.title}
                </h4>

                <p className="flex-1 text-[14px] text-justify leading-[1.9] text-[#6B6F76]">
                  {testimonial.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#788C6A] transition-colors duration-300 group-hover:text-[#B8875B]">
                  <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
                  Kliento patirtis
                </div>
              </div>

              {/* Client profile */}
              <div className="flex items-center gap-4 border-t border-[#EAE6DE] bg-[#FBFAF6] px-6 py-5 sm:px-8">
                <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#E8E3D8] shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="58px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-semibold text-[#262626]">
                    {testimonial.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#8A8A80]">
                    {testimonial.company}
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#B8875B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:mt-16"
        >
          <div className="h-px w-12 bg-[#B8875B]" />
          <p className="text-sm tracking-wide text-[#6B6F76]">
            Kiekvienas projektas prasideda nuo pasitikėjimo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
