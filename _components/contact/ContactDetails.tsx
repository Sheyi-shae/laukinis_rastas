
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const workshopAddress = "Mokslininkų g. 12, 08412 Vilnius, Lietuva";

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  workshopAddress
)}&output=embed`;

const contactItems = [
  {
    icon: Phone,
    label: "Telefonas",
    value: "+370 693 41243",
    href: "tel:+37069341243",
    description: "Susisiekite tiesiogiai su mūsų komanda",
  },
  {
    icon: Mail,
    label: "El. paštas",
    value: "info@laukinisrastas.lt",
    href: "mailto:info@laukinisrastas.lt",
    description: "Parašykite mums apie savo projektą",
  },
];

const buildingTypes = [
  "Gyvenamasis rąstinis namas",
  "Rąstinė pirtis",
  "Poilsio namas / sodyba",
  "Kitas projektas",
];

export default function ContactDetails() {
  const [buildingType, setBuildingType] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  return (
    <section
      id="kontaktine-informacija"
      className="relative overflow-hidden bg-[#F7F5EE] py-20 sm:py-24 lg:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#D9C9B1]/20 blur-3xl"
      />

      <div className="container relative">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl lg:mb-16">
          <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#788C6A]">
            <span className="h-px w-8 bg-[#B8875B]" />
            Susisiekime
          </span>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
            Pradėkime nuo jūsų{" "}
            <span className="italic text-[#788C6A]">idėjos.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6F76] sm:text-base">
            Papasakokite apie savo planus. Atsakysime į jūsų klausimus ir
            padėsime atrasti tinkamiausią sprendimą būsimam rąstiniam namui.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Enquiry form */}
          <div className="border border-[#E8E2D7] bg-white p-6 shadow-[0_20px_70px_rgba(38,38,38,0.05)] sm:p-9 lg:p-10">
            <div className="mb-8">
              

              <h3 className="font-serif text-2xl text-[#262626] sm:text-3xl">
                Papasakokite apie savo projektą
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6B6F76]">
                Užpildykite trumpą užklausą, o mes susisieksime su jumis
                aptarti detalių.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
            >
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold text-[#404040]"
                  >
                    Vardas <span className="text-[#B8875B]">*</span>
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jūsų vardas"
                    required
                    className="h-13 w-full rounded-lg border border-[#E8E2D7] bg-[#FAF9F6] px-4 text-sm text-[#262626] outline-none transition placeholder:text-[#A5A39D] focus:border-[#788C6A] focus:bg-white focus:ring-2 focus:ring-[#788C6A]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold text-[#404040]"
                  >
                    El. paštas <span className="text-[#B8875B]">*</span>
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="vardas@pastas.lt"
                    required
                    className="h-13 w-full rounded-lg border border-[#E8E2D7] bg-[#FAF9F6] px-4 text-sm text-[#262626] outline-none transition placeholder:text-[#A5A39D] focus:border-[#788C6A] focus:bg-white focus:ring-2 focus:ring-[#788C6A]/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-xs font-semibold text-[#404040]"
                >
                  Telefono numeris
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+370 ..."
                  className="h-13 w-full rounded-lg border border-[#E8E2D7] bg-[#FAF9F6] px-4 text-sm text-[#262626] outline-none transition placeholder:text-[#A5A39D] focus:border-[#788C6A] focus:bg-white focus:ring-2 focus:ring-[#788C6A]/10"
                />
              </div>

              {/* Building type */}
              <div>
                <label
                  htmlFor="building-type"
                  className="mb-2 block text-xs font-semibold text-[#404040]"
                >
                  Koks statinys jus domina?
                </label>

                <div className="relative">
                  <select
                    id="building-type"
                    value={buildingType}
                    onChange={(event) => setBuildingType(event.target.value)}
                    className="h-13 w-full appearance-none rounded-lg border border-[#E8E2D7] bg-[#FAF9F6] px-4 pr-12 text-sm text-[#404040] outline-none transition focus:border-[#788C6A] focus:bg-white focus:ring-2 focus:ring-[#788C6A]/10"
                  >
                    <option value="" disabled>
                      Pasirinkite statinio tipą
                    </option>

                    {buildingTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#788C6A]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold text-[#404040]"
                >
                  Žinutė apie jūsų projektą{" "}
                  <span className="text-[#B8875B]">*</span>
                </label>

                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder="Papasakokite apie savo idėją, planuojamą statinį ar turimus projektus..."
                  className="w-full resize-y rounded-lg border border-[#E8E2D7] bg-[#FAF9F6] px-4 py-4 text-sm leading-6 text-[#262626] outline-none transition placeholder:text-[#A5A39D] focus:border-[#788C6A] focus:bg-white focus:ring-2 focus:ring-[#788C6A]/10"
                />
              </div>

              {/* Privacy consent */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(event) =>
                    setPrivacyAccepted(event.target.checked)
                  }
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-[#2F4A3B]"
                />

                <span className="text-xs leading-6 text-[#77766F]">
                  Sutinku, kad mano pateikti asmens duomenys būtų tvarkomi
                  siekiant atsakyti į mano užklausą. Susipažinau su{" "}
                  <Link
                    href="#"
                    className="font-semibold text-[#2F4A3B] underline underline-offset-4 transition hover:text-[#788C6A]"
                  >
                    privatumo politika
                  </Link>
                  .
                </span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!privacyAccepted}
                className="group flex min-h-14 w-full items-center justify-center gap-3  bg-[#2F4A3B] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#243A2F] disabled:cursor-not-allowed disabled:opacity-50  "
              >
                Siųsti užklausą

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-[11px] leading-5 text-[#92918A]">
                * Privalomi laukai. Šiuo metu forma dar neprijungta prie
                užklausų siuntimo sistemos.
              </p>
            </form>
          </div>

          {/* Contact information */}
          <div className="space-y-6">
            <div className=" bg-[#243A2F] p-7 text-white sm:p-9">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5B99F]">
                Tiesioginis kontaktas
              </span>

              <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
                Mielai atsakysime į jūsų klausimus.
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/65">
                Norite pasitarti dėl būsimo namo? Susisiekite jums
                patogiausiu būdu.
              </p>

              <div className="mt-8 space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#D9C9B1] transition group-hover:bg-white/10">
                        <Icon size={19} strokeWidth={1.6} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs text-white/50">
                          {item.label}
                        </span>

                        <span className="mt-1 block break-words text-base font-medium text-white transition group-hover:text-[#D9C9B1]">
                          {item.value}
                        </span>

                        <span className="mt-1 block text-xs text-white/45">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto shrink-0 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D9C9B1]"
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={19}
                    className="mt-1 shrink-0 text-[#D9C9B1]"
                  />

                  <div>
                    <span className="text-xs text-white/50">
                      Mūsų adresas
                    </span>

                    <p className="mt-1 text-sm leading-6 text-white/90">
                      {workshopAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden  border border-[#E8E2D7] bg-white p-2 shadow-[0_15px_50px_rgba(38,38,38,0.04)]">
              <div className="relative h-[180px] overflow-hidden rounded-xl bg-[#E9E5DB] ">
                <iframe
                  src={mapUrl}
                  title="Laukinio rąsto adresas žemėlapyje"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 border-0 grayscale-[20%]"
                />
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  workshopAddress
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-4"
              >
                <span>
                  <span className="block text-sm font-semibold text-[#262626]">
                    Raskite mus žemėlapyje
                  </span>
                  <span className="mt-1 block text-xs text-[#77766F]">
                    Mokslininkų g. 12, Vilnius
                  </span>
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0EDE4] text-[#2F4A3B] transition group-hover:bg-[#2F4A3B] group-hover:text-white">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
