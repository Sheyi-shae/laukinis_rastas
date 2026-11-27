
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
    Trees
} from "lucide-react";

const workshopAddress =
  "Antalaušių kaimas, Ukmergės rajonas, LT-20379.";

const workshopEmail = "info@laukinisrastas.lt";
const workshopPhone = "+370 693 41243";

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  workshopAddress
)}&output=embed`;

export default function HomepageCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="aplankykite-dirbtuves"
      className="relative isolate overflow-hidden bg-primary py-20 "
    >
      {/* Subtle decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full border border-[#788C6A]/60"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[350px] w-[350px] rounded-full border border-[#788C6A]/60"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-[#F7F5EE]">
                Aplankykite mūsų ekspoziciją.

              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
             Pamatykite tikrą meistro darbą ir pajuskite natūralų {" "}
              <span className="italic text-[#D9C9B1]">
                 rąstinių namų grožį.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-sm leading-8 text-white sm:text-base">
              Apsilankymo metu galėsite prisiliesti prie natūralios medienos, įvertinti meistrystės kokybę, susipažinti su mūsų statybos technologija ir tiesiogiai su meistrais aptarti savo būsimo namo ar pirties viziją.
            </p>

            {/* Contact information */}
            <div className="mt-10 border-t border-[#D9C9B1] pt-8">
            

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href={`tel:${workshopPhone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C9B1] bg-[#D9C9B1] text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-white/90">
                      Telefonas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#788C6A]">
                      {workshopPhone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${workshopEmail}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C9B1] bg-[#D9C9B1] text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-white/90">
                      El. paštas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#788C6A]">
                      {workshopEmail}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                                  href="https://maps.google.com/?cid=2534470294559763390&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF"
                                  
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D9C9B1] bg-[#D9C9B1] text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-white/90">
                     Mūsų ekspoziciją adresas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#788C6A]">
                      {workshopAddress}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-[#8B735B] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

                      
            
          </motion.div>

          {/* RIGHT COLUMN — GOOGLE MAP */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="relative min-h-[420px] overflow-hidden border border-[#8B735B]/20 bg-[#F7F5EE] shadow-[0_20px_60px_rgba(65,49,30,0.12)] sm:min-h-[500px] lg:min-h-[680px]">
              <iframe
                title="Laukinio rąsto dirbtuvių vieta Vilniuje"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Map location card */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-4 border border-[#E9DFD0] bg-[#F7F5EE]/95 p-4 shadow-lg backdrop-blur-md sm:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F4A3B] text-white">
                    <Trees size={20} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-serif text-lg text-[#262626]">
                      Laukinio rąsto dirbtuvės
                    </p>
                    <p className="mt-1 text-xs text-[#6B6F76]">
                      {workshopAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 border-b border-r border-[#B8875B]/60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
