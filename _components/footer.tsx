"use client"
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Phone,

  ArrowUp,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const navigation = [
  { label: "Pagrindinis", href: "/" },
  { label: "Apie mus", href: "/apie-mus" },
  { label: "Mūsų darbai", href: "/projektai" },
  { label: "Kaip dirbame", href: "/#procesas" },
  { label: "Kontaktai", href: "/kontaktai" },
];

const categories = [
  {
    label: "Gyvenamieji rąstiniai namai",
    href: "/gyvenamieji-rastiniai-namai",
  },
  { label: "Rąstinės pirtys", href: "/rastines-pirtys" },
  {
    label: "Poilsio namai ir sodybos",
    href: "/poilsio-namai-ir-sodybos",
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#243A2F] text-[#F7F5EE]">
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/[0.07] sm:h-[650px] sm:w-[650px]"
      >
        <div className="absolute inset-12 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-24 rounded-full border border-white/[0.04]" />
      </div>

      <div className="container">
        {/* Main footer content */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.75fr_1fr_1fr] lg:gap-12 lg:py-24">

          {/* Brand column */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Laukinis rąstas – pagrindinis puslapis"
              className="inline-flex flex-col"
            >
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Laukinis rąstas
              </span>
              
            </Link>

            <p className="mt-6 text-sm leading-8 text-white/65">
              Kuriame išskirtinius rąstinius namus iš Karpatų kalnų eglės,
              derindami kanadietišką „laukinio rąsto“ technologiją,
              natūralų medienos grožį ir ilgametę meistrystę.
            </p>

            {/* Social links */}
           <div className="mt-8 flex items-center gap-3">
  <a
    href="YOUR_FACEBOOK_URL"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B8875B] hover:bg-[#B8875B] hover:text-white"
  >
    <FaFacebookF size={15} />
  </a>

  <a
    href="YOUR_INSTAGRAM_URL"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#B8875B] hover:bg-[#B8875B] hover:text-white"
  >
    <FaInstagram size={17} />
  </a>
</div>
          </div>

          {/* Navigation */}
          <div>
           <p className="mb-7 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#B8875B]">
              Navigacija
            </p>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-[#B8875B] transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Building categories */}
          <div>
            <p className="mb-7 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#B8875B]">
              Mūsų statiniai
            </p>

            <ul className="space-y-4">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm leading-relaxed text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 shrink-0 bg-[#B8875B] transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/projektai"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8875B] transition-colors hover:text-white"
            >
              Visi projektai
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-7 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#B8875B]">
              Susisiekime
            </p>

            <p className="mb-6 text-sm leading-7 text-white/65">
              Turite idėją savo būsimam namui? Pasikalbėkime apie jūsų projektą.
            </p>

            <Link
              href="/kontaktai"
              className="group inline-flex min-h-[50px] items-center justify-between gap-5 bg-[#B8875B] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#A5754B]"
            >
              Aptarkime projektą
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <div className="mt-8 space-y-4">
              <Link
                href="/kontaktai"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <MapPin size={17} className="shrink-0 text-[#B8875B]" />
                Mūsų kontaktai
              </Link>

              <Link
                href="/kontaktai"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail size={17} className="shrink-0 text-[#B8875B]" />
                Parašykite mums
              </Link>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <p className="text-center text-xs text-white/45 sm:text-left">
             © 2026 Laukinis rąstas. Visos teisės saugomos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/privatumo-politika"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Privatumo politika
              </Link>

              <Link
                href="/slapuku-politika"
                className="text-xs text-white/45 transition-colors hover:text-white"
              >
                Slapukų politika
              </Link>

              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Grįžti į puslapio viršų"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 transition-all duration-300 hover:border-[#B8875B] hover:bg-[#B8875B] hover:text-white"
              >
                <ArrowUp size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
