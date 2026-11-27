
"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const workshopAddress = "Mokslininkų g. 12, 08412 Vilnius, Lietuva";

const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  workshopAddress
)}&output=embed`;

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  workshopAddress
)}`;

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

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/laukinisrastas",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/laukinis_rastas/",
    icon: "instagram",
  },
];

export default function ContactDetails() {
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
        {/* SECTION HEADING */}
        <div className="mb-12 max-w-2xl lg:mb-16">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#788C6A] sm:text-sm">
            <span className="h-px w-8 bg-[#B8875B]" />
            Susisiekime
          </span>

          <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
            Pradėkime nuo jūsų{" "}
            <span className="italic text-[#788C6A]">idėjos.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6F76] sm:text-base">
            Turite klausimų apie rąstinių namų statybą ar planuojate
            savo projektą? Susisiekite su mumis arba apsilankykite
            mūsų dirbtuvėse.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* LEFT COLUMN — MAP & ADDRESS */}
          <div className="flex flex-col gap-6">
            {/* MAP */}
            <div className="group relative min-h-[320px] flex-1 overflow-hidden border border-[#E8E2D7] bg-[#E9E5DB] shadow-[0_20px_70px_rgba(38,38,38,0.05)] sm:min-h-[400px]">
              <iframe
                src={mapUrl}
                title="Laukinio rąsto dirbtuvės žemėlapyje"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[15%] transition duration-700 group-hover:grayscale-0"
              />

              {/* MAP LOCATION LABEL */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[280px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F4A3B] text-white">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#788C6A]">
                    Aplankykite mus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#262626]">
                    Vilnius, Lietuva
                  </p>
                </div>
              </div>
            </div>

            {/* ADDRESS CARD */}
            <div className="flex flex-col justify-between gap-5 border border-[#E8E2D7] bg-white p-6 shadow-[0_12px_40px_rgba(38,38,38,0.03)] sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0EDE4] text-[#2F4A3B]">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#788C6A]">
                    Mūsų adresas
                  </p>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#262626] sm:text-base">
                    {workshopAddress}
                  </p>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#2F4A3B] transition hover:text-[#B8875B]"
              >
                Maršrutas
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — CONTACT DETAILS */}
          <div className="flex flex-col justify-between bg-[#243A2F] p-7 text-white sm:p-9 lg:p-11">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5B99F]">
                Tiesioginis kontaktas
              </span>

              <h3 className="mt-5 max-w-md font-serif text-3xl leading-snug sm:text-4xl">
                Mielai atsakysime į jūsų klausimus.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                Norite pasitarti dėl būsimo namo, pirties ar kito
                medinio statinio? Mūsų komanda pasiruošusi padėti.
              </p>

              {/* PHONE & EMAIL */}
              <div className="mt-10 space-y-8">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-start gap-4"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#D9C9B1] transition duration-300 group-hover:border-[#D9C9B1]/50 group-hover:bg-white/10">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-white/50">
                          {item.label}
                        </span>

                        <span className="mt-1 block break-words text-lg font-medium text-white transition group-hover:text-[#D9C9B1] sm:text-xl">
                          {item.value}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-white/45">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="mt-2 shrink-0 text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D9C9B1]"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5B99F]">
                Sekite mūsų darbus
              </p>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Atraskite mūsų projektus, darbų akimirkas ir
                natūralios medienos grožį socialiniuose tinkluose.
              </p>

             <div className="mt-6 flex flex-wrap gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Laukinis rąstas – ${social.name}`}
      className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-[#D9C9B1] hover:bg-[#D9C9B1] hover:text-[#243A2F]"
    >
      {social.icon === "facebook" ? (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] fill-current"
          aria-hidden="true"
        >
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] fill-none stroke-current"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )}

      {social.name}

      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
