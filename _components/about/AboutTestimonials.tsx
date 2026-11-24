
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Vadimas Pavlovskis",
    affiliation: "Malūniai",
    title: "Jaukūs namai ir ilgalaikis pasitikėjimas",
    quote:
      "„Laukinio rąsto“ komanda mums pastatė jaukų ir kokybišką namą, o sėkmingas bendradarbiavimas tęsiasi jau ne vienerius metus. Vėliau patikėjome komandai ir naujo „Joga House“ objekto įgyvendinimą. Džiaugiamės rezultatais ir tikimės bendradarbiauti ateityje.",
    image: "/images/testimonials/vadimas.jpg",
  },
  {
    name: "Gediminas Petraitis",
    affiliation: "MB „Kauno rajono statybų projektai“",
    title: "Profesionalumas, kokybė ir greitas įgyvendinimas",
    quote:
      "Dėkojame „Laukinio rąsto“ komandai už profesionaliai ir operatyviai įgyvendintą rąstinio namo projektą. Ypač vertiname kokybiškų medžiagų pasirinkimą ir atsakingą požiūrį į atliktus darbus.",
    image: "/images/testimonials/gediminas.jpg",
  },
  {
    name: "Deimantė ir Ernestas",
    affiliation: "2023 m.",
    title: "Sudėtingas projektas – patikimose rankose",
    quote:
      "Mūsų nestandartinio rąstinio pirties namo projektas pareikalavo ypatingo dėmesio ir profesionalumo. Esame dėkingi komandai, ypač Karoliui Cieminiui, už nepriekaištingą darbą, vertingas konsultacijas ir pagalbą sprendžiant sudėtingus statybos klausimus.",
    image: "/images/testimonials/deimante-ernestas.jpg",
  },
];

export default function AboutTestimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32">
      {/* Soft decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full border border-[#B8875B]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-[290px] w-[290px] rounded-full border border-[#B8875B]/10"
      />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold tracking-[0.22em] text-[#788C6A]">
              KLIENTŲ PATIRTYS
            </span>
            
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Patirtis, kuria pasitiki
            <span className="block italic text-[#788C6A]">
              mūsų klientai
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#555A54] sm:text-lg">
            Per daugiau nei du dešimtmečius sukaupta patirtis leidžia mums
            įgyvendinti tiek tradicinius, tiek nestandartinius rąstinės
            architektūros projektus.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#77766F] sm:text-base">
            Mūsų klientai vertina ne tik galutinį rezultatą, bet ir
            profesionalų bendradarbiavimą, kokybiškas medžiagas bei gebėjimą
            spręsti sudėtingus statybos klausimus.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className="group flex h-full flex-col border border-[#E6E0D5] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#D9C9B1] hover:shadow-[0_20px_50px_rgba(38,38,38,0.07)] sm:p-8"
            >
              {/* Quote icon and stars */}
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center bg-[#F0EDE4] text-[#788C6A]">
                  <Quote size={21} strokeWidth={1.5} />
                </div>

                <div
                  className="flex items-center gap-1 text-[#B8875B]"
                  aria-label="Kliento atsiliepimas"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>

              <h4 className="mt-7 font-serif text-xl leading-snug text-[#262626]">
                {testimonial.title}
              </h4>

              <p className="mt-5 text-justify flex-1 text-sm leading-7 text-[#555A54]">
                {testimonial.quote}
              </p>

              {/* Client profile */}
              <div className="mt-8 flex items-center gap-4 border-t border-[#EAE5DC] pt-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E9E3D8]">
                  <Image
                    src={testimonial.image}
                    alt={`Kliento ${testimonial.name} nuotrauka`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#262626]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#77766F]">
                    {testimonial.affiliation}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center justify-center gap-5 text-center sm:mt-16"
        >
          <p className="max-w-xl font-serif text-xl leading-relaxed text-[#2F4A3B] sm:text-2xl">
            Kiekvienas patenkintas klientas – dar viena istorija, kuria
            didžiuojamės.
          </p>

          <Link
            href="/projektai"
            className="inline-flex items-center gap-3 bg-[#2F4A3B] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#243A2F] hover:shadow-lg"
          >
            Peržiūrėti mūsų projektus
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
