
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Raimonda iš Jurbarko",
    title: "Individualus rąstinis namas „Kaspėdai“",
    subtitle: "Tradicinė meistrystė ir įspūdinga rąstų konstrukcija",
    description:
      "Šiame projekte atsiskleidžia tikroji „laukinio rąsto“ technologijos vertė – masyvūs natūralūs rąstai, kruopščiai formuojamos jungtys ir išraiškinga pastato konstrukcija. Kiekvienas elementas individualiai pritaikomas, siekiant sukurti tvirtą, ilgaamžį ir savito charakterio namą.",
    image: "/images/projects/raimonda/1.jpg",
    imageAlt: "Individualus rąstinis namas Kaspėdai",
    href: "/projektai/kaspedai",
  },
  {
    number: "02",
    category: "Fredis iš Tartu",
    title: "Individualus rąstinis namas „Šilagėlė“",
    subtitle: "Natūralios medienos grožis ir šiuolaikinis komfortas",
    description:
      "Individualios architektūros rąstinis namas, kuriame masyvios medienos konstrukcijos dera su dideliais langais, erdviu išplanavimu ir natūralia aplinka. Projektas atskleidžia, kaip tradicinė rąstinių namų statyba gali būti pritaikyta šiuolaikiniam gyvenimo būdui.",
    image: "/images/projects/fredis/1.jpg",
    imageAlt: "Individualus rąstinis namas Šilagėlė",
    href: "/projektai/silagele",
  },
  {
    number: "03",
    category: "Ruslan Stoniškės",
    title: "Rąstinio namo restauravimas",
    subtitle: "Naujas gyvenimas senai medinei architektūrai",
    description:
      "Rąstinio pastato atnaujinimo darbai, kuriuose ypatingas dėmesys skiriamas medinių konstrukcijų būklei ir jų išsaugojimui. Projektas demonstruoja medienos apdirbimo patirtį bei gebėjimą dirbti ne tik su naujais, bet ir su esamais rąstiniais statiniais.",
    image: "/images/projects/ruslan/1.jpg",
    imageAlt: "Restauruojamas istorinis rąstinis pastatas",
    href: "/projektai/restauravimas",
  },
];

export default function CompletedProjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="completed-projects"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24"
    >
      <div className="container">
        {/* Heading */}
   
                <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            
            <span className="text-xs md:text-base font-bold tracking-[0.22em] text-[#788C6A]">
               MŪSŲ DARBAI
            </span>
            
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
             Mūsų įgyvendinti{" "}
            <span className="font-serif font-normal italic text-[#788C6A]">
              projektai
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B6F76] sm:text-lg">
            Kiekvienas namas – unikali istorija. Nuo pirmųjų rąstų iki
            išskirtinės architektūros – susipažinkite su mūsų darbais,
            kuriuose atsiskleidžia natūralios medienos grožis, meistrystė
            ir individualūs sprendimai.
          </p>

         

          
        </motion.div>


        {/* Three layered project cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative isolate min-h-[470px] overflow-hidden rounded-sm bg-[#D9C9B1] sm:min-h-[520px]"
            >
           
             {/* Background image */}
<Image
  src={project.image}
  alt={project.imageAlt}
  fill
  quality={95}
  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 object-center"
/>


              {/* Image overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#14231B]/95 " />
              {/* Top project number */}
              <div className="absolute left-6 top-6 z-10 flex items-center gap-3">
                <span className="font-serif text-3xl text-white">
                  {project.number}
                </span>
                <span className="h-px w-8 bg-white/70" />
                <span className="text-[10px] uppercase font-semibold tracking-[0.16em] text-white/90">
                  {project.category}
                </span>
              </div>

              {/* Glass content panel */}
              <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-5 sm:bottom-5">

  {/* Information panel */}
  {/* <div className="translate-y-0 border border-white/30 bg-[#F7F5EE]/85 p-5 opacity-100 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out group-hover:translate-y-4 group-hover:opacity-0 group-hover:backdrop-blur-none sm:p-6">

    <h3 className="font-heading text-lg font-semibold leading-snug text-[#262626] sm:text-xl">
      {project.title}
    </h3>

    <p className="mt-3 text-sm font-semibold leading-6 text-[#788C6A]">
      {project.subtitle}
    </p>

    <p className="mt-3 line-clamp-3 text-justify text-xs leading-7 text-[#555B53] sm:text-sm">
      {project.description}
    </p>

    
    <div className="mt-5 border-t border-[#D9C9B1] pt-4">
      <Link
        href={project.href}
        className="group/link inline-flex w-full items-center justify-between text-sm font-semibold text-[#2F4A3B] transition-colors hover:text-[#788C6A]"
      >
        Susipažinti su projektu
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9C9B1] transition-all duration-300 group-hover/link:border-[#2F4A3B] group-hover/link:bg-[#2F4A3B] group-hover/link:text-white">
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </span>
      </Link>
    </div>
  </div> */}

  
  {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
    <Link
      href={project.href}
      className="group/link flex items-center justify-between border border-white/40 bg-[#F7F5EE]/90 px-5 py-4 text-sm font-semibold text-[#2F4A3B] shadow-xl backdrop-blur-md transition-colors hover:bg-white"
    >
      Susipažinti su projektu
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F4A3B] text-white transition-transform duration-300 group-hover/link:translate-x-1">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  </div> */}
</div>
            </motion.article>
          ))}
        </div>

        {/* All projects link */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center lg:mt-20"
        >
          <Link
            href="/projektai"
            className="group inline-flex items-center gap-4 border border-[#2F4A3B] px-8 py-4 text-sm font-semibold text-[#2F4A3B] transition-all duration-300 hover:bg-[#2F4A3B] hover:text-white"
          >
            Visi mūsų projektai
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
