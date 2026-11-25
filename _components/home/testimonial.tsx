
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";


const testimonials = [
  {
    name: "Vadimas Pavlovskis",
    affiliation: "Malūniai",
    title: "Ilgalaikis bendradarbiavimas ir puikūs rezultatai",
    quote:
      "Nuoširdus ačiū UAB „ZASKOV-GRUP“ kolektyvui už naują objektą „Joga House“ Malūniuose. Puikiai bendradarbiaujame jau tris metus. Taip ir toliau vyrai!",
    image: "/images/testimonials/vadimas.jpg",
  },
  {
    name: "Vadimas Pavlovskis",
    affiliation: "Privatus klientas",
    title: "Jaukus ir kokybiškas rąstinis namas",
    quote:
      "Didelis ačiū UAB „ZASKOV-GRUP“ kolektyvui už jaukų ir kokybišką namą. Tikiuosi tolimesnio bendradarbiavimo ir ateityje.",
    image: "/images/testimonials/vadimas.jpg",
  },
  {
    name: "Darius Jadzevičius",
    affiliation: "Degučiai",
    title: "Kruopštus darbas ir dėmesys kiekvienai detalei",
    quote:
      "„UAB „ZASKOV-GRUP“ kolektyvui dėkoju už išskirtinį rąstinį namą Degučiuose, kruopščiai ir atsakingai sumontuotus medinius langus ir duris, stogą bei jaukią aplinką dėka profesionaliai nušlifuoto ir nudažyto namo.Gerų darbų bei visokeriopos sėkmės ir ateityje!",
    image: "/images/testimonials/darius.jpg",
  },
  {
    name: "Eduard Gogolev",
    affiliation: "Balninkai, Molėtų raj.",
    title: "Visapusiški statybos darbai",
    quote:
      "Nuoširdus dėkui už pastatytą rąstinį namą, pamatų ir stogo montavimo bei žemės paruošimo darbus adresu: Molėtų raj. Balninkai, Vėrejimų g. 2F.",
    image: "/images/testimonials/eduard.jpg",
  },
  {
    name: "Rūta Sorakaitė",
    affiliation: "2021 m.",
    title: "Nuostabus namas, pranokęs lūkesčius",
    quote:
      "Ačiū Zaskov-Grup už 2021 metais pastatytą nuostabų namuką, kuris atrodo fantastiškai.",
    image: "/images/testimonials/ruta.jpg",
  },
  {
    name: "Ernestas ir Deimantė",
    affiliation: "Rąstinis pirties namas",
    title: "Sudėtingas projektas – patikimose rankose",
    quote:
      "Dėkojame UAB „Zaskov-Grup“ kolektyvui ir ypač Karoliui Cieminiui už nepriekaištingą požiūrį ir darbą pradedant mūsų sudėtingo ir nestandartinio rąstinio pirties namo projektavimu, ir baigiant statybos darbais bei priežiūra. Esame patenkinti ir dėkingi už įžvalgas statybų proceso metu, bendravimą išeiginių ir švenčių dienomis, konsultavimą ir mūsų interesų atstovavimą dėl nepriklausančių, bet susijusių darbų įsigilinant į sudėtingų darbų procesus, ir ilgas diskusijas su kitais specialistais.",
    image: "/images/testimonials/deimante-ernestas.jpg",
  },
 
  {
    name: "Lilija ir Jan Janč",
    affiliation: "Privatūs klientai",
    title: "Kokybė, profesionalumas ir išskirtinis rūpestis",
    quote:
      "UAB „Zaskov-Grup“ – geriausia mūsų patirtis įgyvendinant svarbų mums projektą – nuosavo rąstinio namo statybą. Gavome ne vien aukštos kokybės namą, bet ir aukštos kultūros paslaugą nuo užsakymo pradžios iki namo pastatymo. Viskas buvo padaryta laiku ir profesionaliai. Nuoširdus ačiū Karoliui Cieminiui ir meistrams už rūpestį mūsų užsakymu kaip savu, už gerą jausmą, kai viskas vyksta kaip sutarta, laiku ir nuoširdžiai bendraujama kaip su ypatingais klientais.",
    image: "/images/testimonials/lilija-jan.jpg",
  },
  {
    name: "Marek Černevič",
    affiliation: "Privatus klientas",
    title: "Sklandus procesas ir profesionali komanda",
    quote:
      "Nuoširdžiai dėkoju visai Zaskov-Grup komandai už puikiai atliktą darbą. Nuo pat rąstinio namo projektavimo pradžios iki jo surinkimo, viskas vyko labai sklandžiai ir laikantis sutartų darbo atlikimo terminų. Visada laiku buvo atsakoma į bet kuriuos man kilusius klausimus. Ypač malonus bendravimas iš visų įmonės darbuotojų, kas gan retai pasitaiko statybos sektoriuje. Namo surinkimo metu jautėsi darbuotojų patirtis šioje srityje bei aukšta kompetencija. Dar kartą dėkoju Aleksejui, Konradui ir be abejo komandos vadovui – Karoliui.",
    image: "/images/testimonials/marek.jpg",
  },
  {
    name: "Mantas Notkus",
    affiliation: "Kalveliai",
    title: "Malonus bendradarbiavimas nuo pradžios iki pabaigos",
    quote:
      "Nuoširdžiai dėkoju UAB „ZASKOV-GRUP“ už puikiai surinktą rąstinį namą Kalveliuose, pagalbą išsirenkant projektą ir malonų bendradarbiavimą visose darbų fazėse.",
    image: "/images/testimonials/mantas.jpg",
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
            className="hidden md:block absolute right-10 max-w-md text-base top-36 leading-8 text-slate-700 lg:pb-1"
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
          {testimonials.map((testimonial,i) => (
            <motion.article
              key={i}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="group relative flex h-full flex-col overflow-hidden border border-[#E6E0D5] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#B8875B]/50 hover:shadow-[0_20px_50px_rgba(38,38,38,0.08)]"
            >
              {/* Card top */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.18em] text-[#A0A096]">
                    
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
                  {testimonial.quote}
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
                    {testimonial.affiliation}
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
         
        </motion.div>
      </div>
    </section>
  );
}
