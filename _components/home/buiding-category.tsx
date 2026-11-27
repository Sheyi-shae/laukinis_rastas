
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    number: "01",
    label: "GYVENIMUI",
    title: "Rąstiniai namai",
    description:
      "Namai, kuriuose norisi gyventi ištisas kartas. Iš masyvių Karpatų eglės rąstų statome individualius gyvenamuosius namus, išsiskiriančius natūraliu grožiu, tvirtumu ir jaukumu. Kiekvieną projektą pritaikome šeimos poreikiams ir gyvenimo būdui.",
    image: "/images/home1.jpg",
    alt: "Individualus rąstinis gyvenamasis namas gamtos apsuptyje",
    href: "/gyvenamieji-rastiniai-namai",
    
  },
  {
    number: "02",
    label: "POILSIUI IR ATSIPALAIDAVIMUI",
    title: "Rąstinės pirtys",
    description:
      "Tikra pirties patirtis prasideda nuo natūralių medžiagų. Statome autentiškas rąstines pirtis, kuriose medienos aromatas, išskirtinė atmosfera ir tradicinė meistrystė sukuria ypatingą poilsio erdvę.",
    image: "/images/home2.jpg",
    alt: "Tradicinė rąstinė pirtis natūralioje aplinkoje",
    href: "/rastines-pirtys",
  },
  {
    number: "03",
    label: "POILSIUI GAMTOJE",
    title: "Poilsio sodybos",
    description:
      "Vieta, į kurią norisi sugrįžti. Kuriame išskirtinius rąstinius poilsio namus ir sodybas, harmoningai įsiliejančius į gamtinę aplinką. Nuo jaukaus savaitgalio namelio iki erdvios šeimos sodybos ar turizmo komplekso.",
    image: "/images/home3.jpg",
    alt: "Rąstinis poilsio namas žalios gamtos apsuptyje",
    href: "/poilsio-namai-ir-sodybos",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function BuildingCategories() {
    const textReveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="building-categories"
      className="relative isolate overflow-hidden bg-[#F7F5EE] py-20 sm:py-24"
    >
     
{/* Natural foliage decoration */}

{/* Sharp natural foliage decoration */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute left-0 top-16 -z-10 h-[150px] w-[180px] opacity-90 sm:h-[210px] sm:w-[250px] lg:h-[250px] lg:w-[300px]"
>
  <Image
    src="/images/foliage-left.png"
    alt=""
    fill
    sizes="(max-width: 568px) 180px, (max-width: 1024px) 450px, 500px"
    className="object-contain object-left-top"
  />
</div>


{/* Subtle wood-ring decoration */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[420px] w-[420px] rounded-full opacity-25 sm:-right-24 sm:-top-48 sm:h-[560px] sm:w-[560px]"
  style={{
    backgroundImage:
      "repeating-radial-gradient(circle, rgba(184,135,91,0.25) 0px, rgba(184,135,91,0.25) 1px, transparent 2px, transparent 13px)",
    maskImage: "radial-gradient(circle, black 25%, transparent 72%)",
    WebkitMaskImage:
      "radial-gradient(circle, black 25%, transparent 72%)",
  }}
/>


      <div className="container">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={textReveal}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-24"
        >
          <span className="mb-4  inline-flex items-center gap-3 text-[11px] md:text-base font-bold uppercase tracking-[0.24em] text-[#788C6A]">
            
            Mūsų statiniai
          </span>

          <h2 className="font-heading text-3xl font-medium leading-[1] tracking-tight text-[#262626] sm:text-4xl md:text-5xl">
            Natūralus medis.
            <span className="block text-[#2F4A3B]">
              Išskirtiniai sprendimai.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6B6F76] md:text-base">
            Kuriame ilgaamžius rąstinius statinius, kuriuose susijungia
            natūralus grožis, tradicinė meistrystė ir šiuolaikinio
            gyvenimo poreikiai.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.number}
              custom={index}
              variants={cardVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative isolate min-h-[310px] overflow-hidden rounded-[13px] bg-[#283328] sm:min-h-[350px] lg:min-h-[430px]`}
            >
              {/* Background image */}
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes={
                  "(max-width: 768px) 100vw, 45vw"
                }
                className={`object-cover transition-transform duration-[1200ms] ease-out ${
                  shouldReduceMotion ? "" : "group-hover:scale-[1.06]"
                }`}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/5 transition-opacity duration-500 group-hover:from-black/85 group-hover:via-black/50" />

              {/* Bottom overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* Card content */}
              <div className="relative z-10 flex h-full min-h-[310px] flex-col justify-center px-7 py-9 sm:min-h-[350px] sm:px-9 lg:min-h-[430px] lg:px-10">
                      <div className={"max-w-[99%] sm:max-w-[98%] lg:max-w-[98%]"}>
                  {/* Category label */}
                  <div className=" flex items-center gap-3">
                    <span className="absolute top-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9A66C] sm:text-[11px]">
                      {category.label}
                    </span>

                    
                  </div>

                  {/* Title */}
                  <h3 className="font-serif absolute mb-7 md:mb-0  text-2xl top-25 font-medium leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-[34px]">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className={`w-full  text-justify text-sm leading-6 text-white/90 sm:text-base ${index===1 ? "mt-4" : "mt-16"}  sm:leading-6`}>
                    {category.description}
                  </p>
                </div>

                {/* Arrow link */}
                <Link
                  href={'/technologija-ir-gamyba'}
                  className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:border-[#D9A66C] hover:bg-[#D9A66C] hover:text-[#22291F] sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
                >
                  <ArrowRight
                    size={19}
                              strokeWidth={1}
                              color="white"
                    className={`transition-transform duration-300 ${
                      shouldReduceMotion ? "" : "group-hover:translate-x-1"
                    }`}
                  />
                </Link>

                {/* Card number */}
                <span className="absolute right-7 top-7 text-[10px] font-medium tracking-[0.2em] text-white/60 sm:right-8 sm:top-8">
                  {category.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-5 sm:mt-12"
        >
          <span className="hidden h-px w-12 bg-[#B7A995] sm:block" />

          <Link
            href="/kontaktai"
            className="group btn btn-primary inline-flex items-center gap-4   font-semibold text-white transition-all duration-300  hover:shadow-[0_8px_25px_rgba(47,74,59,0.2)] "
          >
            Aptarkime jūsų projektą

            <ArrowRight
              size={17}
              className={`transition-transform duration-300 ${
                shouldReduceMotion ? "" : "group-hover:translate-x-1"
              }`}
            />
          </Link>

          <span className="hidden h-px w-12 bg-[#B7A995] sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
