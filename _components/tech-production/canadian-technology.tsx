
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  Ruler,
  Layers3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Compass,
    title: "Natūralus išskirtinumas",
    description:
      "Net pagal tą patį projektą pastatyti namai skiriasi, nes kiekvienas rąstas išsaugo savo natūralią formą ir individualų charakterį.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Masyvios konstrukcijos",
    description:
      "Galime naudoti didelio skersmens rąstus ir kurti išraiškingas konstrukcijas, kuriose natūrali mediena tampa pagrindiniu architektūros elementu.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Rankų darbo tikslumas",
    description:
      "Kiekviena jungtis ir išilginė įlaida formuojama atsižvelgiant į konkretaus rąsto geometriją bei gretimų elementų padėtį.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Ilgaamžiškumas",
    description:
      "Tikslus rąstų pritaikymas, tinkami sandarinimo sprendimai ir atsakinga konstrukcijų priežiūra padeda užtikrinti pastato ilgaamžiškumą.",
  },
];

export default function CanadianTechnology() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="kanadietiska-technologija"
      className="relative isolate overflow-hidden bg-[#243A2F] py-20 text-[#F7F5EE] sm:py-24 lg:py-32"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[450px] w-[450px] rounded-full border border-white/[0.06] sm:h-[600px] sm:w-[600px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[350px] w-[350px] rounded-full border border-white/[0.05] sm:h-[480px] sm:w-[480px]"
      />

      <div className="container">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-7 flex items-center justify-center gap-3">
            

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9C9B1] sm:text-xs">
              Tradicija ir meistrystė
            </span>

            
          </div>

          <h2 className="font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Kanadietiška
            <span className="block italic text-[#D9C9B1]">
              „laukinio rąsto“ technologija
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
            Kiekvienas rąstas turi savo formą. Mūsų meistrų
            užduotis – paversti ją tikslia ir tvirta konstrukcija.
          </p>
        </motion.div>

        {/* Main craftsmanship feature */}
        <div className="mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Main image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-[570px]">
              <Image
                src="/images/technology/canadian1.jpg"
                alt="Meistrų rankomis formuojama natūralių rąstų konstrukcija"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/55 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9C9B1]">
                  Individualus meistrų darbas
                </span>

                <p className="mt-2 max-w-md font-serif text-2xl leading-snug text-white sm:text-3xl">
                  Natūrali rąsto forma tampa architektūros dalimi.
                </p>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 border border-[#B8875B]/50 sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40" />
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8875B]">
              Kiekvienas rąstas – individualus
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-tight text-[#F7F5EE] sm:text-4xl">
              Ne standartizuota forma, o natūralus medžio charakteris.
            </h3>

            <div className="mt-7 text-justify space-y-5 text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
              <p>
                Skirtingai nei standartizuotų tekintų rąstų
                statyboje, „laukinio rąsto“ technologijoje
                išsaugomos natūralios medžių formos. Kiekvienas
                rąstas matuojamas ir individualiai pritaikomas
                prie po juo esančio rąsto.
              </p>

              <p>
                Naudodami specialius matavimo įrankius, meistrai
                perkelia apatinio rąsto kontūrą ant viršutinio,
                formuoja išilgines įlaidas ir kampines jungtis.
                Šis procesas reikalauja tikslumo, patirties ir
                kruopštaus rankų darbo.
              </p>

              <p>
                Tinkamai suformuotos jungtys padeda užtikrinti
                konstrukcijos stabilumą, o kartu su tinkamais
                sandarinimo sprendimais – sumažinti nepageidaujamą
                oro skverbimąsi.
              </p>
            </div>

            <div className="mt-9 border-l-2 border-[#B8875B] pl-5">
              <p className="font-serif text-xl italic leading-relaxed text-[#D9C9B1]">
                „Tikslumas slypi detalėse, o kiekvienas rąstas
                reikalauja individualaus dėmesio.“
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technical detail image */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="mt-20 grid gap-8 border-y border-white/15 py-10 sm:mt-28 sm:grid-cols-[0.85fr_1.15fr] sm:items-center sm:gap-12 sm:py-14"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8875B]">
              Konstrukcijos detalės
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#F7F5EE] sm:text-4xl">
              Tiksliai suformuotos jungtys.
            </h3>

            <p className="mt-5 text-sm leading-8 text-justify text-white/65 sm:text-base sm:leading-9">
              Išilginės įlaidos ir kampinės jungtys formuojamos
              pagal konkrečių rąstų formas. Būtent tokios detalės
              reikalauja daugiausia meistrų patirties ir kruopštumo.
            </p>
          </div>

          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[330px]">
            <Image
              src="/images/technology/canadian2.jpg"
              alt="Rankomis suformuotos natūralių rąstų kampinės jungtys"
              fill
              sizes="(max-width: 640px) 100vw, 60vw"
              className="object-cover"
            />

            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#243A2F]/85 px-4 py-3 backdrop-blur-sm">
              <Ruler size={16} className="text-[#D9C9B1]" />
              <span className="text-[10px] uppercase tracking-[0.18em] text-white">
                Rankų darbo tikslumas
              </span>
            </div>
          </div>
        </motion.div>

        {/* Technology advantages */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="mb-10 max-w-2xl"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B8875B]">
              Technologijos privalumai
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#F7F5EE] sm:text-4xl">
              Kuo ši technologija ypatinga?
            </h3>
          </motion.div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={reveal}
                  className="group relative bg-[#243A2F] px-6 py-8 transition-colors duration-500 hover:bg-[#2F4A3B] sm:px-7 sm:py-10"
                >
                 

                  <h4 className="mt-10 min-h-0 sm:min-h-16 font-serif text-xl text-[#F7F5EE] sm:text-2xl">
                    {feature.title}
                  </h4>

                  <p className="mt-4 text-justify text-sm leading-7 text-white/60">
                    {feature.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#B8875B] transition-all duration-500 group-hover:w-16" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mt-20 flex flex-col items-center text-center sm:mt-28"
        >
          <span className="h-12 w-px bg-gradient-to-b from-transparent to-[#B8875B]" />

          <p className="mt-6 max-w-3xl font-serif text-2xl leading-relaxed text-[#D9C9B1] sm:text-3xl lg:text-4xl">
            Natūrali mediena. Individualus darbas. Konstrukcija,
            kurioje atsiskleidžia tikroji meistrystė.
          </p>

          <a
            href="#siluminis-komfortas"
            className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition-colors hover:text-white"
          >
            Sužinokite apie rąstinių namų šilumą

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
