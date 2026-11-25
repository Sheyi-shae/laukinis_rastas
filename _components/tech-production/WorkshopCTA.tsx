
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Trees,
} from "lucide-react";

const workshopAddress =
  "Mokslininkų g. 12, 08412 Vilnius, Lietuva";

const workshopEmail = "info@laukinisrastas.lt";
const workshopPhone = "+370 693 41243";

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  workshopAddress
)}&output=embed`;

export default function WorkshopCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="aplankykite-dirbtuves"
      className="relative isolate overflow-hidden bg-[#E9DFD0] py-20 "
    >
      {/* Subtle decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full border border-[#8B735B]/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-[350px] w-[350px] rounded-full border border-[#8B735B]/10"
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
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-[#788C6A]">
                Aplankykite mūsų dirbtuves
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-[3.5rem]">
              Pamatykite, kaip gimsta{" "}
              <span className="italic text-[#788C6A]">
                jūsų būsimi namai.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 text-sm leading-8 text-[#5F5A52] sm:text-base">
              Apsilankymo metu galėsite įvertinti medienos kokybę, pamatyti
              vykdomus projektus, susipažinti su gamybos procesu ir
              tiesiogiai su meistrais aptarti savo būsimo namo viziją.
            </p>

            {/* Contact information */}
            <div className="mt-10 border-t border-[#8B735B]/25 pt-8">
              <h4 className="mb-6 font-serif text-xl md:text-2xl text-[#262626]">
                Susisiekite dėl apsilankymo
              </h4>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href={`tel:${workshopPhone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8B735B]/25 bg-[#F7F5EE]/60 text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-[#81796E]">
                      Telefonas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#34352F] transition-colors group-hover:text-[#788C6A]">
                      {workshopPhone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${workshopEmail}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8B735B]/25 bg-[#F7F5EE]/60 text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-[#81796E]">
                      El. paštas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#34352F] transition-colors group-hover:text-[#788C6A]">
                      {workshopEmail}
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mokslinink%C5%B3+g.+12%2C+08412+Vilnius%2C+Lietuva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#8B735B]/25 bg-[#F7F5EE]/60 text-[#2F4A3B] transition-all duration-300 group-hover:border-[#2F4A3B] group-hover:bg-[#2F4A3B] group-hover:text-white">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs text-[#81796E]">
                      Dirbtuvių adresas
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#34352F] transition-colors group-hover:text-[#788C6A]">
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
            <div className="relative min-h-[420px] overflow-hidden border border-[#8B735B]/20 bg-[#F7F5EE] shadow-[0_20px_60px_rgba(65,49,30,0.12)] sm:min-h-[500px] lg:min-h-[620px]">
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
