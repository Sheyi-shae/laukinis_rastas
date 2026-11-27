
"use client";

import Image from "next/image";
import { useEffect,useState,useCallback,useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Pause,
  Play,
  User2,
} from "lucide-react";
import Link from "next/link";

const AUTO_SLIDE_INTERVAL = 5000;

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
 const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  // Responsive number of visible cards
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Infinite carousel position
  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % total);
  }, [total]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous - 1 + total) % total);
  }, [total]);

  // Automatic sliding
  useEffect(() => {
    if (
      shouldReduceMotion ||
      isPaused ||
      isHovered ||
      total <= visibleCount
    ) {
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    shouldReduceMotion,
    isPaused,
    isHovered,
    visibleCount,
    total,
    nextSlide,
  ]);

  // Pause and reset timer when manually navigating
  const handleNavigation = (direction: "next" | "previous") => {
    setIsPaused(true);

    if (direction === "next") {
      nextSlide();
    } else {
      previousSlide();
    }
  };

  // Touch gestures
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const difference =
      touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      handleNavigation(difference > 0 ? "next" : "previous");
    }

    touchStartX.current = null;
  };

  // Create enough slides for seamless wrapping
  const visibleTestimonials = Array.from(
    { length: Math.min(total, visibleCount + 1) },
    (_, index) => testimonials[(currentIndex + index) % total]
  );

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
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row justify-center items-center ">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl f"
          >
            <span className="mb-4  text-center justify-center flex items-center gap-3 text-xs md:text-base font-bold tracking-[0.22em] text-[#788C6A]">
             
              KLIENTŲ ATSILIEPIMAI
            </span>

            <h2 className="text-4xl text-center font-semibold leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
              Mūsų darbai kalba{" "}
              <span className="font-serif font-normal italic text-[#788C6A]">
                patys už save.
              </span>
            </h2>
          </motion.div>

        
        </div>

         {/* Carousel heading and controls */}
                <div className="mb-6 flex items-center justify-center">
                  
        
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPaused((previous:any) => !previous)}
                      aria-label={isPaused ? "Paleisti automatinį slinkimą" : "Sustabdyti automatinį slinkimą"}
                      className="flex h-11 w-11 items-center justify-center border border-[#DCD5C9] bg-white text-[#2F4A3B] transition hover:bg-[#F0EDE4]"
                    >
                      {isPaused ? <Play size={17} /> : <Pause size={17} />}
                    </button>
        
                    <button
                      type="button"
                      onClick={() => handleNavigation("previous")}
                      aria-label="Ankstesnis atsiliepimas"
                      className="flex h-11 w-11 items-center justify-center border border-[#DCD5C9] bg-white text-[#2F4A3B] transition hover:border-[#2F4A3B] hover:bg-[#2F4A3B] hover:text-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
        
                    <button
                      type="button"
                      onClick={() => handleNavigation("next")}
                      aria-label="Kitas atsiliepimas"
                      className="flex h-11 w-11 items-center justify-center border border-[#DCD5C9] bg-white text-[#2F4A3B] transition hover:border-[#2F4A3B] hover:bg-[#2F4A3B] hover:text-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
        
                {/* Carousel viewport */}
                <div
                  className="overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onFocusCapture={() => setIsPaused(true)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  aria-label="Klientų atsiliepimai"
                  aria-roledescription="karuselė"
                >
                  <div className="flex items-stretch gap-5">
                    {visibleTestimonials.map((testimonial, index) => (
                      <motion.article
                        key={`${testimonial.name}-${currentIndex}-${index}`}
                        initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                        className="flex min-h-[440px] w-full min-w-0 shrink-0 flex-col border border-[#E6E0D5] bg-white p-6 transition-all duration-500 hover:border-[#D9C9B1] hover:shadow-[0_20px_50px_rgba(38,38,38,0.07)] sm:w-[calc(50%-10px)] sm:p-7 xl:w-[calc(33.333%-14px)]"
                      >
                        {/* Quote icon */}
                        <div className="flex items-center justify-between">
                          <div className="flex h-11 w-11 items-center justify-center bg-[#F0EDE4] text-[#788C6A]">
                            <Quote size={21} strokeWidth={1.5} />
                          </div>
        
                          
                        </div>
        
                        {/* Content */}
                        <h4 className="mt-7 min-h-0 md:min-h-16 font-serif text-xl leading-snug text-[#262626]">
                          {testimonial.title}
                        </h4>
        
                        <p className="mt-5 flex-1 text-sm lg:text-base text-justify leading-7 text-[#555A54]">
                          {testimonial.quote}
                        </p>
        
                        {/* Client profile */}
                        <div className="mt-8 flex items-center gap-4 border-t border-[#EAE5DC] pt-6">
                          {/* <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#E9E3D8]">
                            <Image
                              src={testimonial.image}
                              alt={`Kliento ${testimonial.name} nuotrauka`}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div> */}
                           <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ">
                            <User2 size={48} strokeWidth={1} color="green"/>
                          </div>
        
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#262626]">
                              {testimonial.name}
                            </p>
        
                            <p className="mt-1 text-xs leading-5 text-[#77766F]">
                              {testimonial.affiliation}
                            </p>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
        
                {/* Progress indicators */}
                <div className="mt-8 flex items-center justify-between gap-5">
                  <div className="flex flex-1 items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsPaused(true);
                        }}
                        aria-label={`Rodyti atsiliepimą ${index + 1}`}
                        aria-current={currentIndex === index ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-9 bg-[#2F4A3B]"
                            : "w-3 bg-[#D9C9B1] hover:bg-[#788C6A]"
                        }`}
                      />
                    ))}
                  </div>
        
                  <span className="shrink-0 text-xs tabular-nums text-[#85847D]">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
        
               
      </div>
    </section>
  );
}
