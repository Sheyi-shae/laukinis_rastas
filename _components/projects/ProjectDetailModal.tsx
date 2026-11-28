
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  X,
} from "lucide-react";

import type { Project } from "./projectData";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <ProjectModalContent
          key={project.id}
          project={project}
          onClose={onClose}
        />
      )}
    </AnimatePresence>
  );
}

function ProjectModalContent({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const images = project.images;
  const imageCount = images.length;

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === imageCount - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          current === 0 ? imageCount - 1 : current - 1
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          current === imageCount - 1 ? 0 : current + 1
        );
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusableElements =
          modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [imageCount, onClose]);

  if (!imageCount) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111]/80 p-0 backdrop-blur-md sm:p-4 lg:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="relative flex h-dvh w-full max-w-[1440px] flex-col overflow-hidden bg-[#F7F5EE] shadow-2xl sm:h-[min(90vh,900px)] sm:rounded-2xl lg:grid lg:grid-cols-[1.15fr_0.85fr]"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 25, scale: 0.98 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={
          shouldReduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 15, scale: 0.98 }
        }
        transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
      >
        {/* IMAGE GALLERY */}
        <div className="relative min-h-[38vh] shrink-0 overflow-hidden bg-[#243A2F] lg:min-h-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[activeImage]}
              className="absolute inset-0"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 1.025 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
              }}
            >
              <Image
                src={images[activeImage]}
                alt={`${project.name} – projekto nuotrauka ${activeImage + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />

          {/* CLOSE BUTTON */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Uždaryti projekto langą"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-md transition hover:bg-white hover:text-[#243A2F]"
          >
            <X size={20} />
          </button>

          {/* PROJECT IMAGE LABEL */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                Įgyvendintas projektas
              </span>
              <p className="max-w-md font-heading text-xl font-semibold sm:text-2xl">
                {project.title}
              </p>
            </div>

            <span
              className="shrink-0 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-xs font-medium backdrop-blur-md"
              aria-live="polite"
            >
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(imageCount).padStart(2, "0")}
            </span>
          </div>

          {/* CAROUSEL CONTROLS */}
          {imageCount > 1 && (
            <div className="absolute bottom-24 right-6 z-10 flex gap-2 sm:bottom-28 sm:right-8">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Ankstesnė nuotrauka"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#243A2F]"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Kita nuotrauka"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-[#243A2F]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* THUMBNAILS */}
          {imageCount > 1 && (
            <div className="absolute bottom-5 left-6 z-10 flex gap-2 sm:left-8">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Rodyti nuotrauką ${index + 1}`}
                  aria-current={activeImage === index}
                  className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-9 bg-white"
                      : "w-4 bg-white/40 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* PROJECT STORY */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="flex-1 px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-14">
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#788C6A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#788C6A]" />
                Kliento istorija
              </span>

              <span className="h-4 w-px bg-[#D9D3C7]" />

              <span className="text-xs text-[#6B6F76]">
                {project.category}
              </span>
            </div>

            <h2
              id="project-modal-title"
              className="max-w-xl font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-[#262626] sm:text-4xl lg:text-[2.65rem]"
            >
              {project.title}
            </h2>

            <div className="mt-5 flex items-center gap-2 text-sm text-[#6B6F76]">
              <MapPin size={16} className="text-[#B8875B]" />
              {project.location}
            </div>

            <div className="my-8 h-px w-full bg-[#E5E0D5]" />

            <div className="space-y-5">
              {project.story.map((paragraph, index) => (
                <motion.p
                  key={`${project.id}-story-${index}`}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  className="text-[15px] leading-[1.9] text-[#555B54]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="sticky bottom-0 border-t border-[#E5E0D5] bg-[#F7F5EE] px-6 py-6 sm:px-9 lg:px-12 lg:py-8">
            <p className="mb-4 text-sm leading-relaxed text-[#6B6F76]">
              Turite panašią viziją? Pasikalbėkime apie jūsų būsimus namus.
            </p>

            <Link
              href="/kontaktai"
              onClick={onClose}
              className="group flex w-full items-center justify-between gap-4 rounded-lg bg-[#2F4A3B] px-6 py-4 text-white transition duration-300 hover:bg-[#243A2F]"
            >
              <span className="text-sm font-semibold tracking-wide">
                Aptarkime jūsų projektą
              </span>

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
