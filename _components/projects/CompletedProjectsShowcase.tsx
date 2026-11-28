"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import { projects, type Project } from "./projectData";
import ProjectPreviewCard from "./ProjectPreviewCard";
import ProjectDetailModal from "./ProjectDetailModal";
import Image from "next/image";

export default function CompletedProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
     <section
  id="klientu-projektai"
  aria-labelledby="completed-projects-heading"
  className="relative isolate overflow-hidden bg-[#F7F5EE] py-24"
>
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/projects/gallery/21.png"
      alt=""
      fill
      priority={false}
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* Ivory overlay */}
  <div className="absolute inset-0 z-[1] bg-[#F7F5EE]/85" />

  {/* Gradient overlay */}
  <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#F7F5EE]/80 via-transparent to-[#F0EDE4]/50" />

  {/* Section content */}
  <div className="container relative z-10">
          {/* Section introduction */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              className="mb-5 flex items-center justify-center gap-3"
            >
             
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.25em] text-[#788C6A] sm:text-[11px]">
                Mūsų darbai
              </span>
              
            </motion.div>

            <motion.h2
              id="completed-projects-heading"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
              className="font-heading text-4xl font-medium leading-[1.12] tracking-[-0.045em] text-[#262626] sm:text-5xl lg:text-[58px]"
            >
              Tikros istorijos.
              <br />
              <span className="font-serif font-normal italic text-[#788C6A]">
                Tikri namai.
              </span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-[1.9] text-slate-700 sm:text-base"
            >
              Kiekvienas įgyvendintas projektas prasideda nuo žmogaus svajonės.
              Susipažinkite su istorijomis, kuriose natūrali mediena, kruopštus
              meistrų darbas ir individualios vizijos virsta ypatingomis erdvėmis.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.35 }}
              className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60"
            >
              <span>{String(projects.length).padStart(2, "0")} projektai</span>
              <span className="h-1 w-1 rounded-full bg-[#B8875B]" />
              <span>Skirtingos istorijos</span>
            </motion.div>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => (
              <ProjectPreviewCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
            ))}
          </div>

          {/* Bottom editorial note */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#E5E0D5] pt-7 sm:mt-16 sm:flex-row"
          >
            <p className="max-w-md text-center text-xs leading-7 text-[#6B6F76] sm:text-left">
              Kiekvienas projektas kuriamas atsižvelgiant į žmogaus poreikius,
              aplinką ir norimą gyvenimo būdą.
            </p>

            <a
              href="/kontaktai"
              className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F4A3B] transition-colors hover:text-[#B8875B]"
            >
              <span>Pasikalbėkime apie jūsų projektą</span>
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Shared project detail modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}