
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  X,
} from "lucide-react";

const projects = [
 
  {
    image: "/images/projects/gallery/6.jpg",
    title: "Vadimo poilsio namai Malūnuose",
    category: "Individualūs projektai",
    },
  {
    image: "/images/projects/gallery/7.jpg",
    title: "Vadimo poilsio namai Malūnuose",
    category: "Individualūs projektai",
    },
  {
    image: "/images/projects/gallery/8.jpg",
    title: "Simono gyvenamieji namai Pasvalyje",
    category: "Individualūs projektai",
    },
  {
    image: "/images/projects/gallery/9.jpg",
    title: "Simono gyvenamieji namai Pasvalyje",
    category: "Individualūs projektai",
  },
  {
    image: "/images/projects/gallery/10.jpg",
    title: "Rūtos gyvenamieji namai Ežminuose",
    category: "Įgyvendinti projektai",
    },
  {
    image: "/images/projects/gallery/11.jpg",
    title: "Ruslano poilsio namai Kijeve",
    category: "Individualūs projektai",
    },
  {
    image: "/images/projects/gallery/12.jpg",
    title: "Ruslano poilsio namai Kijeve",
    category: "Individualūs projektai",
    },
   {
    image: "/images/projects/gallery/13.jpg",
    title: "Manto gyvenamieji namai Šumske",
    category: "Individualūs projektai",
    },
  {
    image: "/images/projects/gallery/14.jpg",
    title: "Kšištofo gyvenamieji namai Wendene",
    category: "Įgyvendinti projektai",
    },
  {
    image: "/images/projects/gallery/15.jpg",
    title: "Kšištofo gyvenamieji namai Wendene",
    category: "Įgyvendinti projektai",
    },
  
  {
    image: "/images/projects/gallery/16.jpg",
    title: "Vadimo poilsio namai Malūnuose",
    category: "Įgyvendinti projektai",
  },{
    image: "/images/projects/gallery/17.jpg",
    title: "Vadimo poilsio namai Malūnuose",
    category: "Įgyvendinti projektai",
    },
  
  
];

export default function ProjectsGallery() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeProject = projects[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    if (shouldReduceMotion || isPaused || isLightboxOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused, isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="projektu-galerija"
      className="scroll-mt-32 overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        {/* SECTION HEADING */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 md:text-sm text-xs font-bold uppercase tracking-[0.22em] text-[#788C6A] sm:text-sm">
            
            Mūsų darbai
           
          </span>

          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Kiekvienas projektas –
            <span className="block font-serif font-normal italic text-[#788C6A]">
              savita istorija.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Kviečiame apžiūrėti mūsų įgyvendintus darbus ir atrasti
            natūralios medienos, meistrystės bei individualių
            sprendimų įvairovę.
          </p>
        </motion.div>

        {/* MAIN SLIDER */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mt-14 sm:mt-16 lg:mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="relative overflow-hidden bg-[#D9C9B1]">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]">
              {projects.map((project, index) => (
                <motion.div
                  key={project.image}
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scale:
                      activeIndex === index && !shouldReduceMotion
                        ? 1
                        : 1.035,
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
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}

              {/* IMAGE OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-6 left-6 z-10 max-w-[70%] sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-14">
                <motion.div
                  key={activeProject.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9C9B1]">
                    {activeProject.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-5xl">
                    {activeProject.title}
                  </h3>
                </motion.div>
              </div>

              {/* EXPAND IMAGE */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                aria-label="Padidinti nuotrauką"
                className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2F4A3B] sm:right-10 sm:top-10"
              >
                <Expand size={18} />
              </button>

              {/* SLIDER CONTROLS */}
              <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-10 sm:right-10">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Ankstesnis projektas"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2F4A3B] sm:h-12 sm:w-12"
                >
                  <ArrowLeft size={19} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Kitas projektas"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2F4A3B] sm:h-12 sm:w-12"
                >
                  <ArrowRight size={19} />
                </button>
              </div>
            </div>
          </div>

          {/* GALLERY FOOTER */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tabular-nums text-[#2F4A3B]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-[#2F4A3B]/25 sm:w-20" />

              <span className="text-sm tabular-nums text-[#6B6F76]">
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.image}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Rodyti projektą ${index + 1}`}
                  aria-current={activeIndex === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-9 bg-[#2F4A3B]"
                      : "w-1.5 bg-[#2F4A3B]/25 hover:bg-[#2F4A3B]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* LIGHTBOX */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Projektų nuotraukų peržiūra"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Uždaryti"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#243A2F]"
            >
              <X size={21} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousSlide();
              }}
              aria-label="Ankstesnė nuotrauka"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#243A2F] sm:left-8"
            >
              <ArrowLeft size={20} />
            </button>

            <div
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                sizes="100vw"
                className="object-contain"
              />

              <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/80">
                {activeProject.title} · {activeIndex + 1}/{projects.length}
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextSlide();
              }}
              aria-label="Kita nuotrauka"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#243A2F] sm:right-8"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
