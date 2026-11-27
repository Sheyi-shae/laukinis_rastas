
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
  "/images/projects/ruslan/1.jpg",
  "/images/projects/ruslan/2.jpg",
  "/images/projects/ruslan/3.jpg",
];

export default function RuslanasProject() {
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

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  return (
    <section
      id="ruslano-pirtis"
      className="scroll-mt-32 overflow-hidden bg-[#243A2F] py-20 text-white sm:py-24 lg:py-32"
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
          

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            Ruslano {" "}
            <span className=" font-serif font-normal italic text-[#D9C9B1]">
              pirtis
            </span>
          </h2>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <MapPin size={16} className="text-[#B8875B]" />
            Stoniškiai, Lietuva
          </div>
        </motion.div>

        {/* PROJECT STORY */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl text-center sm:mt-16"
        >
          <p className="text-lg leading-8 text-white/90 sm:text-xl sm:leading-9">
            Ruslanas norėjo šalia savo namų turėti jaukią rąstinę
            pirtį – vietą, kurioje galėtų atsipalaiduoti ir pabėgti
            nuo kasdienio skubėjimo.
          </p>

          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
            Jį maloniai nustebino tai, kaip greitai jo vizija tapo
            realybe. Operatyvus darbas, dėmesys detalėms ir meistrų
            kruopštumas padėjo sukurti būtent tokią erdvę, kokios
            jis tikėjosi.
          </p>

          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
            Šiandien pirtis tapo natūralia namų aplinkos dalimi –
            vieta poilsiui, gerai savijautai ir jaukioms šeimos
            akimirkoms.
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#B8875B] sm:aspect-[16/9] lg:aspect-[2/1]">
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
                  alt={`Ruslano rąstinės pirties projektas – nuotrauka ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            ))}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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
                    ? "w-9 bg-[#D9C9B1]"
                    : "w-1.5 bg-white/30 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
