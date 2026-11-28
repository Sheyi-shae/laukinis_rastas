"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "./projectData";

interface ProjectPreviewCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectPreviewCard({
  project,
  onSelect,
  index,
}: ProjectPreviewCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = useCallback(() => {
    setActiveImage((current) => (current + 1) % project.images.length);
  }, [project.images.length]);

  useEffect(() => {
    if (shouldReduceMotion || isPaused || project.images.length < 2) return;

    const interval = window.setInterval(nextImage, 4500);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion, isPaused, nextImage]);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative block w-full overflow-hidden rounded-[4px] bg-[#243A2F] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8875B] focus-visible:ring-offset-4"
      aria-label={`Peržiūrėti projektą: ${project.title}`}
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
        <AnimatePresence mode="sync">
          <motion.div
            key={project.images[activeImage]}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 1.035 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[activeImage]}
              alt={`${project.title} – ${project.category.toLowerCase()}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.045]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17251E]/95 via-[#17251E]/20 to-black/10" />
        <div className="absolute inset-0 bg-[#17251E]/0 transition-colors duration-500 group-hover:bg-[#17251E]/10" />

        {/* Top information */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
          <span className="border border-white/40 bg-black/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-[10px]">
            {project.category}
          </span>

          <span className="font-sans text-[11px] tabular-nums tracking-wider text-white/85">
            {String(activeImage + 1).padStart(2, "0")}
            <span className="mx-1.5 text-white/45">/</span>
            {String(project.images.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
          <div className="mb-4 flex items-center gap-2 text-white/70">
            <MapPin size={13} strokeWidth={1.6} />
            <span className="text-[10px] tracking-[0.12em] sm:text-[11px]">
              {project.location}
            </span>
          </div>

          <h3 className="max-w-[340px] font-heading text-[27px] font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-[32px] lg:text-[35px]">
            {project.title}
          </h3>

          <p className="mt-3 max-w-[340px] text-[12px] leading-[1.8] text-white/70 sm:text-[13px]">
            {project.shortDescription}
          </p>

          <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.19em] text-white">
              Peržiūrėti projektą
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#D9C9B1] group-hover:bg-[#D9C9B1] group-hover:text-[#243A2F]">
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}