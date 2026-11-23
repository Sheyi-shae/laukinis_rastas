
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Thermometer,
  Layers3,
  House,
  Wind,
  PanelsTopLeft,
  Flame,
  ShieldCheck,
  Droplets,
} from "lucide-react";

const comfortFactors = [
  {
    icon: Layers3,
    title: "Sienų konstrukcija",
    description:
      "Rąstų storis, medienos savybės ir visos sienos konstrukciniai sprendimai turi įtakos šilumos perdavimui.",
  },
  {
    icon: ShieldCheck,
    title: "Sandarumas",
    description:
      "Tinkamai suformuotos rąstų jungtys ir sandarinimo sprendimai padeda sumažinti nepageidaujamą oro skverbimąsi.",
  },
  {
    icon: House,
    title: "Stogo izoliacija",
    description:
      "Tinkamai apšiltintas ir suprojektuotas stogas yra svarbi viso pastato šiluminės apsaugos dalis.",
  },
  {
    icon: PanelsTopLeft,
    title: "Langai ir durys",
    description:
      "Kokybiški langai, durys ir jų montavimo mazgai padeda sumažinti šilumos nuostolius.",
  },
  {
    icon: Wind,
    title: "Vėdinimas",
    description:
      "Tinkamai suprojektuota vėdinimo sistema padeda palaikyti gerą patalpų oro kokybę ir kontroliuoti drėgmę.",
  },
  {
    icon: Flame,
    title: "Šildymo sistema",
    description:
      "Tinkamai parinktas šildymas užtikrina komfortišką temperatūrą, atsižvelgiant į pastato savybes ir gyventojų poreikius.",
  },
];

export default function ThermalComfort() {
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
      id="siluminis-komfortas"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#B8875B]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#788C6A] sm:text-xs">
              Šiluma ir komfortas
            </span>

            <span className="h-px w-9 bg-[#B8875B]" />
          </div>

          <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Ar rąstinis namas
            <span className="block italic text-[#788C6A]">
              tikrai šiltas?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#555B55] sm:text-base sm:leading-9">
            Rąstiniai namai šimtmečius statomi regionuose,
            kuriuose žiemos itin atšiaurios. Tačiau šiuolaikinis
            šiluminis komfortas priklauso ne vien nuo sienų
            storio – svarbi visa pastato konstrukcija ir jos
            kokybė.
          </p>
        </motion.div>

        {/* Main explanation */}
        <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[470px] lg:min-h-[540px]">
              <Image
                src="/images/technology/thermal1.jpg"
                alt="Jaukus rąstinis namas žiemos aplinkoje"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17271F]/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9C9B1]">
                  Komfortas visais metų laikais
                </span>

                <p className="mt-3 max-w-md font-serif text-2xl leading-snug text-white sm:text-3xl">
                  Šiluma prasideda nuo tinkamai suprojektuoto namo.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 -z-10 h-28 w-28 border border-[#B8875B]/40 sm:-bottom-7 sm:-left-7 sm:h-40 sm:w-40" />
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#788C6A]">
              Daugiau nei sienų storis
            </span>

            <h3 className="mt-5 font-serif text-3xl leading-tight text-[#262626] sm:text-4xl">
              Mediena turi savybių, kurios prisideda prie komforto.
            </h3>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[#555B55] sm:text-base sm:leading-9">
              <p>
                Mediena pasižymi palyginti mažu šilumos laidumu.
                Todėl prisilietus prie medinio paviršiaus jis
                paprastai atrodo šiltesnis nei tokios pačios
                temperatūros metalas ar akmuo.
              </p>

              <p>
                Masyvūs rąstai taip pat turi šiluminę talpą –
                jie gali sugerti šilumą, ją sukaupti ir
                palaipsniui atiduoti. Tai gali padėti sušvelninti
                patalpų temperatūros svyravimus.
              </p>

              <p>
                Vis dėlto vien masyvių rąstų nepakanka. Šiluminį
                komfortą lemia tinkamai suprojektuotos sienos,
                stogas, grindys, langai, sandarumas, vėdinimas
                ir šildymo sistema.
              </p>
            </div>

            <div className="mt-8 flex items-start gap-4 border-l-2 border-[#B8875B] bg-[#F0EDE4] px-5 py-5">
              <Thermometer
                size={21}
                className="mt-1 shrink-0 text-[#788C6A]"
              />

              <p className="text-sm leading-7 text-[#555B55]">
                <strong className="text-[#2F4A3B]">
                  Svarbu:
                </strong>{" "}
                šilumos pojūtis liečiant medieną nėra tas pats,
                kas pastato energinis efektyvumas. Tam reikalingas
                visos konstrukcijos įvertinimas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Thermal properties */}
        <div className="mt-20 sm:mt-28">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#788C6A]">
              Dvi skirtingos savybės
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#262626] sm:text-4xl">
              Šiluminė varža ir šiluminė talpa
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B6F76]">
              Šios sąvokos dažnai painiojamos, tačiau jos
              nusako skirtingus medžiagos ir konstrukcijos
              veikimo principus.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Thermal resistance */}
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative overflow-hidden bg-[#243A2F] p-7 text-white sm:p-10"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#D9C9B1]">
                  <ShieldCheck size={22} />
                </div>

                <span className="mt-8 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9C9B1]">
                  01 / Šilumos išsaugojimas
                </span>

                <h4 className="mt-3 font-serif text-3xl sm:text-4xl">
                  Šiluminė varža
                </h4>

                <p className="mt-5 max-w-md text-sm leading-8 text-white/70">
                  Nusako, kaip stipriai konstrukcija priešinasi
                  šilumos perdavimui. Kuo didesnė šiluminė varža,
                  tuo mažiau šilumos perduodama per konstrukciją,
                  esant toms pačioms sąlygoms.
                </p>

                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="text-xs leading-6 text-[#D9C9B1]">
                    Svarbi pastato sienų, stogo, grindų ir kitų
                    atitvarų projektavimo savybė.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Thermal capacity */}
            <motion.div
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative overflow-hidden bg-[#EAE5D9] p-7 text-[#262626] sm:p-10"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#2F4A3B]/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2F4A3B]/20 text-[#2F4A3B]">
                  <Thermometer size={22} />
                </div>

                <span className="mt-8 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#788C6A]">
                  02 / Šilumos kaupimas
                </span>

                <h4 className="mt-3 font-serif text-3xl text-[#262626] sm:text-4xl">
                  Šiluminė talpa
                </h4>

                <p className="mt-5 max-w-md text-sm leading-8 text-[#555B55]">
                  Nusako, kiek šilumos energijos medžiaga gali
                  sukaupti, kai keičiasi jos temperatūra. Masyvi
                  mediena gali sugerti šilumą ir palaipsniui
                  ją atiduoti aplinkai.
                </p>

                <div className="mt-8 border-t border-[#2F4A3B]/15 pt-5">
                  <p className="text-xs leading-6 text-[#788C6A]">
                    Gali padėti mažinti trumpalaikius patalpų
                    temperatūros svyravimus.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Comfort factors */}
        <div className="mt-20 sm:mt-28">
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="mb-10 max-w-2xl"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#788C6A]">
              Viso pastato sprendimai
            </span>

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#262626] sm:text-4xl">
              Kas iš tikrųjų lemia namų šilumą?
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#6B6F76]">
              Geras rezultatas pasiekiamas tada, kai visi
              pastato elementai veikia kaip viena sistema.
            </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {comfortFactors.map((factor, index) => {
              const Icon = factor.icon;

              return (
                <motion.div
                  key={factor.title}
                  variants={reveal}
                  className="border border-[#E3DED2] bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8875B]/60 hover:shadow-lg hover:shadow-[#243A2F]/5 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAE5D9] text-[#2F4A3B]">
                      <Icon size={19} />
                    </div>

                    <span className="font-serif text-sm text-[#B8875B]">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-6 font-serif text-xl text-[#262626]">
                    {factor.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#6B6F76]">
                    {factor.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mt-16 border-t border-[#D9C9B1] pt-8 sm:mt-20 sm:pt-10"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE5D9] text-[#2F4A3B]">
              <Droplets size={20} />
            </div>

            <div>
              <h4 className="font-serif text-xl text-[#2F4A3B]">
                Komfortas prasideda nuo visumos.
              </h4>

              <p className="mt-3 max-w-3xl text-sm leading-8 text-[#6B6F76]">
                Kiekvienas rąstinis namas turi būti projektuojamas
                atsižvelgiant į jo paskirtį, vietovės klimatą,
                konstrukcijų savybes ir energinio efektyvumo
                reikalavimus. Todėl svarbu vertinti ne vien
                medieną, bet ir visą pastato sprendinių sistemą.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
