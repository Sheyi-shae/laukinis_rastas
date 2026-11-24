
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Ruler,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const discussionPoints = [
  "Būsimo statinio paskirtis ir dydis",
  "Išplanavimas ir architektūrinės galimybės",
  "Rąstų skersmuo ir konstrukciniai sprendimai",
];

export default function ProjectVisionCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#E9DFD0] py-20 sm:py-24 lg:py-32">
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[450px] w-[450px] rounded-full border border-[#B8875B]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 -z-10 h-[300px] w-[300px] rounded-full border border-[#B8875B]/10"
      />

      <div className="container">
        {/* Main CTA composition */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            

            <h2 className="max-w-2xl font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
              Kiekvienas projektas prasideda nuo{" "}
              <span className="text-[#788C6A] italic">jūsų vizijos.</span>
            </h2>

            <p className="mt-8 text-justify max-w-xl text-base leading-[1.9] text-[#555B56] sm:text-lg">
              Nesvarbu, ar jau turite architektūrinį projektą, ar tik keletą
              patikusių namų fotografijų – padėsime jūsų idėją paversti
              konkrečiu statybos sprendimu.
            </p>

            <p className="mt-5 text-justify max-w-xl text-[15px] leading-[1.9] text-[#6B6F76]">
              Kartu aptarsime būsimo statinio paskirtį, dydį, išplanavimą,
              rąstų skersmenį ir architektūrines galimybes. Mūsų konstruktoriai
              parengs individualius sprendimus, o meistrai pagal patvirtintą
              projektą pagamins rąstinę konstrukciją.
            </p>

            {/* Discussion points */}
            <div className="mt-9 space-y-4">
              {discussionPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F4A3B]/10 text-[#2F4A3B]">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#404040]">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="mt-10">
              <Link
                href="/kontaktai"
                className="group inline-flex min-h-14 items-center justify-center gap-5 bg-[#2F4A3B] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#243A2F]"
              >
                Aptarkime jūsų projektą
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Architectural image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/homes/project-vision.jpg"
                alt="Išskirtinis individualios architektūros rąstinis namas"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271E]/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="mb-3 block text-[10px] font-semibold tracking-[0.25em] text-white/70 uppercase">
                  Jūsų idėja. Mūsų meistrystė.
                </span>
                <p className="max-w-sm font-serif text-2xl leading-snug text-white sm:text-3xl">
                  Sukurkime namus, kurie pasakoja jūsų istoriją.
                </p>
              </div>
            </div>

            {/* Floating icon detail */}
            

           
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[#CFC3B2] pt-12 text-center sm:mt-32 sm:pt-16"
        >
          <span className="mb-6 block text-[10px] font-semibold tracking-[0.3em] text-[#788C6A] uppercase">
            Kiekvienas namas – vienintelis toks
          </span>

          <p className="mx-auto max-w-4xl font-serif text-2xl leading-relaxed text-[#262626] sm:text-3xl lg:text-4xl">
            Nėra dviejų vienodų{" "}
            <span className="text-[#788C6A] italic">„laukinio rąsto“</span>{" "}
            namų. Net pagal tą patį projektą pagaminti statiniai išsiskiria
            natūraliomis rąstų formomis ir savitu charakteriu.
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-[#B8875B]" />
        </motion.div>
      </div>
    </section>
  );
}
