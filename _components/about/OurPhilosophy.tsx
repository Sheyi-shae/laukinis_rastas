
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Hammer,
  Heart,
  Leaf,
  ShieldCheck,
} from "lucide-react";
import { SecondaryButton } from "../primary-button";

const principles = [
  {
    number: "01",
    title: "Kruopšti medienos atranka",
    description:
      "Statybai naudojame Karpatuose augančią eglę. Pagal mūsų atrankos kriterijus namų gamybai tinkama tik apie 25–30 % vertinamos medienos.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Meistrystė be kompromisų",
    description:
      "Kiekvienas rąstas individualiai pritaikomas prie konstrukcijos. Rankų darbas ir technologinis tikslumas yra neatsiejama mūsų gamybos dalis.",
    icon: Hammer,
  },
  {
    number: "03",
    title: " Projektų individualumas",
    description:
      "Net du pagal tą patį projektą pastatyti namai neatrodo vienodai. Natūralios medienos formos kiekvienam statiniui suteikia unikalų charakterį.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Atsakomybė už ilgaamžiškumą",
    description:
      "Laikomės medienos paruošimo, konstrukcijų gamybos ir natūralaus rąstų sėdimo technologinių reikalavimų. Neskubiname procesų, nuo kurių priklauso galutinė kokybė.",
    icon: ShieldCheck,
  },
];

export default function OurPhilosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#243A2F] py-20 text-white sm:py-24 ">
      {/* Decorative background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-36 -z-10 h-[280px] w-[280px] rounded-full border border-white/[0.06]"
      />

      <div className="container">
        {/* Intro */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            {/* <span className="text-xs font-semibold tracking-[0.22em] text-[#D9C9B1]">
              KUO TIKIME
            </span> */}
          </div>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Mūsų filosofija –
            <span className="block italic text-[#D9C9B1]">
              kiekvienas namas turi būti vienintelis toks
            </span>
          </h2>

          <p className="mx-auto  mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Mes nestatome serijinių namų. Kiekvienas mūsų projektas gimsta iš
            individualios kliento vizijos, natūralių medienos formų ir meistrų
            patirties.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Naudojame kanadietišką „laukinio rąsto“ technologiją, pagal kurią
            kiekvienas rąstas kruopščiai matuojamas, formuojamas ir
            pritaikomas prie būsimos konstrukcijos.
          </p>
        </motion.div>

        {/* Main composition */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[540px] lg:min-h-[650px]">
              <Image
                src="/images/bcc3.jpeg"
                alt="Meistrų rankomis formuojami natūralūs rąstai"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                {/* <span className="text-xs font-semibold tracking-[0.2em] text-[#D9C9B1]">
                  MŪSŲ POŽIŪRIS
                </span> */}

                <p className="mt-4 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                  Ne tiesiog pastatyti namą. Sukurti tai, kas turi išliekamąją
                  vertę.
                </p>
              </div>
            </div>

         
          </motion.div>

          {/* Philosophy principles */}
          <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 25 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className={`group border-t border-white/15 py-8 sm:py-9 ${
                    index >= 2 ? "sm:border-t" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 mb-3 w-12 items-center justify-center border border-[#D9C9B1]/30 bg-white/[0.04] text-[#D9C9B1] transition-all duration-300 group-hover:border-[#D9C9B1] group-hover:bg-[#D9C9B1] group-hover:text-[#243A2F]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <span className="font-serif text-sm text-white/30">
                     
                    </span>
                  </div>

                  <h3 className="min-h-10  font-serif text-2xl leading-tight text-white sm:text-[26px]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-justify text-sm leading-7 text-white/60">
                    {principle.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-[#B8875B] transition-all duration-500 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-white/15 pt-10 text-center sm:mt-20 sm:pt-14"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center">
           

            <p className="mt-6 mb-8 font-serif text-2xl leading-relaxed text-white sm:text-3xl">
              Mums svarbiausia ne tik tai, kaip namas atrodo šiandien, bet ir
              kaip jis tarnaus po dešimties, penkiasdešimties ar dar daugiau
              metų.
            </p>

         
                   
                      <SecondaryButton name="Susipažinkite su mūsų technologija" link="/technologija-ir-gamyba"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
