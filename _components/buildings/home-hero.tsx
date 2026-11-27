
"use client";

import Image from "next/image";
import { motion, useReducedMotion,Variants } from "framer-motion";

export default function HomesHero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#243A2F] sm:min-h-[820px] lg:min-h-[850px]">

      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/home1.jpg"
          alt="Išskirtinis rąstinis namas gamtos apsuptyje"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Image overlays */}
      <div className="absolute inset-0 -z-10 bg-[#17251D]/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#17251D]/45 via-[#17251D]/30 to-[#17251D]/75" />

      <div className="container flex min-h-[760px] items-center justify-center pb-20 pt-36 text-center sm:min-h-[820px] lg:min-h-[850px] lg:pb-24 lg:pt-40">

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto w-full max-w-5xl"
        >

          {/* Main heading */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Kiekviena svajonė verta{" "}
            <span className="italic text-[#D9C9B1]">
              išskirtinio namo.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/90 sm:text-lg sm:leading-9"
          >
            Nuo jaukaus šeimos namo iki išskirtinės poilsio sodybos –
            statome ilgaamžius rąstinius statinius iš Karpatų kalnų eglės,
            naudodami kanadietišką „laukinio rąsto“ technologiją.
          </motion.p>

          {/* Additional description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/75 sm:text-base"
          >
            Kiekvieną projektą kuriame individualiai, atsižvelgdami į jūsų
            viziją, sklypo ypatumus ir būsimo statinio paskirtį.
            Masyvūs natūralūs rąstai, rankų darbo meistrystė ir išskirtinė
            architektūra leidžia sukurti savito charakterio statinius.
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}
