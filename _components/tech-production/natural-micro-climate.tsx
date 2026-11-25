
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  Leaf,
  Wind,
  Trees,
} from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    number: "01",
    title: "Natūralus drėgmės balansas",
    description:
      "Mediena pasižymi higroskopinėmis savybėmis – gali sugerti dalį aplinkos drėgmės ir ją išskirti, kai oras tampa sausesnis. Atviri mediniai paviršiai taip gali padėti švelninti trumpalaikius patalpų drėgmės svyravimus.",
  },
  {
    icon: Leaf,
    number: "02",
    title: "Tikras medienos aromatas",
    description:
      "Eglės medienoje esantys natūralūs lakieji junginiai prisideda prie išskirtinio medienos kvapo. Tai subtilus gamtos pojūtis, kurį suteikia tikra, natūrali medžiaga.",
  },
  {
    icon: Wind,
    number: "03",
    title: "Gyvenamoji aplinka, kurioje gera būti",
    description:
      "Natūrali medienos tekstūra, šilti atspalviai ir masyvių rąstų kuriama atmosfera suteikia namams jaukumo. Kartu su tinkamai suprojektuotu vėdinimu ir kitais pastato sprendimais tai kuria komfortišką gyvenamąją aplinką.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function NaturalMicroclimate() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="naturalus-mikroklimatas"
      className="relative isolate overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full border border-[#788C6A]/15 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-28 -z-10 h-56 w-56 rounded-full border border-[#788C6A]/10 sm:h-72 sm:w-72"
      />

      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs md:text-base font-bold uppercase tracking-[0.24em] text-[#788C6A]">
              Natūralus komfortas
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Mediena, kurianti{" "}
            <span className="italic text-[#788C6A]">
              ypatingą namų atmosferą.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Rąstinis namas – tai ne tik konstrukcija. Tai natūrali medžiaga,
            jos tekstūra, aromatas ir savybės, kurios padeda kurti savitą
            gyvenimo aplinką.
          </p>
        </motion.div>

        {/* Editorial image and content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-sm sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/technology/thermal2.jpg"
                alt="Natūralių eglės rąstų tekstūra jaukiame rąstinio namo interjere"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-3 text-white">
                  <Trees size={19} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-[0.2em]">
                    Artumas gamtai
                  </span>
                </div>
                <p className="mt-3 max-w-sm font-serif text-2xl leading-snug text-white sm:text-3xl">
                  Tikra mediena. Tikras jaukumas.
                </p>
              </div>
            </div>

            {/* Decorative image corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 border-b border-r border-[#B8875B]/50 sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40"
            />
          </motion.div>

          {/* Explanatory content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8 sm:space-y-10"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  className="group grid grid-cols-[48px_1fr] gap-4 border-b border-[#788C6A]/20 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[56px_1fr] sm:gap-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#788C6A]/30 text-[#2F4A3B] transition-colors duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white sm:h-12 sm:w-12">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    

                    <h3 className="font-serif text-xl text-[#262626] sm:text-2xl">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-justify text-sm leading-7 text-[#6B6F76] sm:text-base sm:leading-8">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing statement */}
        
<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative mt-20 overflow-hidden  bg-[#243A2F] px-6 py-16 text-center text-white sm:mt-24 sm:px-12 sm:py-20 lg:py-24"
>
  {/* Decorative background */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#788C6A]/20 blur-[100px]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#B8875B]/15 blur-[100px]"
  />

  {/* Decorative line */}
  <div className="relative mx-auto mb-8 flex items-center justify-center gap-4">
   
    <span className="text-[10px] md:text-base font-bold uppercase tracking-[0.3em] text-[#C5A17E] sm:text-xs">
      Svarbu nepamiršti
    </span>
  </div>

  <div className="relative mx-auto max-w-3xl">
    <h3 className="font-serif text-3xl leading-[1.2] tracking-tight text-[#F7F5EE] sm:text-4xl lg:text-5xl">
      Tik harmonija tarp gamtos ir technologijų sukuria tikrus namus.
    </h3>

    <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base sm:leading-9">
      Natūrali mediena prisideda prie namų mikroklimato, tačiau
      kokybiškam patalpų orui būtinas ir tinkamai suplanuotas
      vėdinimas. Tik suderinus medžiagas, konstrukcijas ir
      inžinerinius sprendimus sukuriama visavertė gyvenamoji aplinka.
    </p>

    <a
      href="#siluminis-komfortas"
      className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#C5A17E]/50 bg-[#C5A17E]/10 px-7 py-4 text-sm font-semibold text-[#E8D2B9] transition-all duration-300 hover:border-[#C5A17E] hover:bg-[#C5A17E] hover:text-[#243A2F]"
    >
      Grįžti prie šiluminio komforto
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  </div>

  {/* Bottom decorative accent */}
  <div className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#B8875B]/70" />
</motion.div>

      </div>
    </section>
  );
}
