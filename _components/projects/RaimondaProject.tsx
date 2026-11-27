
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const images = [

    "/images/projects/raimonda/1.jpg",
    "/images/projects/raimonda/2.jpg",
 "/images/projects/raimonda/3.jpg",
   "/images/projects/raimonda/4.jpg",
   "/images/projects/raimonda/6.jpg",
   
];


export default function RaimondaProject() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  return (
    <section
      id="raimondos-namai"
      className="scroll-mt-32 overflow-hidden bg-[#F0EDE4] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        {/* PROJECT HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <span className="mb-5 inline-flex md:text-sm items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#788C6A] sm:text-sm">
          
            Įgyvendintas projektas
          </span>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#262626] sm:text-5xl lg:text-7xl">
            Raimondos 
            <span className="font-serif font-normal italic text-[#788C6A]">
              {" "}namas
            </span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[#6B6F76]">
            <MapPin size={16} className="text-[#B8875B]" />
            Jurbarko rajonas, Lietuva
          </div>
        </motion.div>

        {/* PROJECT STORY */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-center sm:mt-8"
        >
          <p className="text-lg leading-8 text-[#404040] sm:text-xl sm:leading-9">
            Kai Raimonda kreipėsi į „Laukinio rąsto“ komandą, jos vizija
            buvo jaukus rąstinis namas išskirtinėje gamtos apsuptyje –
            Jurbarko rajone, prie Nemuno.
          </p>

          <p className="mt-6 text-base leading-8 text-[#6B6F76]">
            Profesionalios komandos darbas, sklandus bendravimas ir
            įsiklausymas į lūkesčius leido įgyvendinti projektą
            užtikrintai ir sklandžiai. Šiandien Raimonda džiaugiasi
            natūralaus medžio grožiu, namų jaukumu ir Nemuno
            kraštovaizdžiu.
          </p>

          
        </motion.div>

        {/* LARGE IMAGE SLIDER */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 sm:mt-20 lg:mt-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#D9C9B1] sm:aspect-[16/9] lg:aspect-[2/1]">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale:
                    activeIndex === index && !shouldReduceMotion ? 1 : 1.03,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
                style={{
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
              >
                <Image
                  src={image}
                  alt={`Raimondos rąstinio namo projektas – nuotrauka ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            ))}

            {/* IMAGE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* IMAGE COUNTER */}
            <div className="absolute bottom-5 left-5 z-10 text-sm font-medium tracking-wider text-white sm:bottom-8 sm:left-8">
              <span className="text-lg">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-2 text-white/50">/</span>
              <span className="text-white/70">
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

            {/* SLIDER CONTROLS */}
            <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2 sm:bottom-8 sm:right-8">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Ankstesnė nuotrauka"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#2F4A3B] sm:h-12 sm:w-12"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Kita nuotrauka"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#2F4A3B] sm:h-12 sm:w-12"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Rodyti nuotrauką ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-9 bg-[#2F4A3B]"
                    : "w-1.5 bg-[#2F4A3B]/25 hover:bg-[#2F4A3B]/60"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
