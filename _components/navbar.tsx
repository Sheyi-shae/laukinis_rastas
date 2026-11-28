"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
  dropdownItem?: { label: string; href: string }[];
};

const navigation: NavItem[] = [
  {
    label: "Namai ir statiniai", href: "namai-ir-statiniai", dropdown: true,
    dropdownItem: [{ label: "Gyvenamieji rąstiniai namai", href: "/namai-ir-statiniai#gyvenamieji-namai" },
      { label: "Rąstinės pirtys", href: "/namai-ir-statiniai#rastines-pirtys" },
      {label:"Poilsio namai ir sodybos", href:"/namai-ir-statiniai#poilsio-namai"}] },

  { label: "Įgyvendinti projektai", href: "/projektai" },

  {
    label: "Technologijos ir gamyba",
    href: "/technologija-ir-gamyba",
    dropdown: true,
    dropdownItem: [
      { label: "Medienos paruošimas", href: "/technologija-ir-gamyba#medienos-paruosimas" },
      { label: "Kanadietiška „laukinio rąsto“ technologija", href: "/technologija-ir-gamyba#kanadietiska-technologija" },
      { label: "Ar rąstinis namas tikrai šiltas?", href: "/technologija-ir-gamyba#siluminis-komfortas" },
      { label: "Natūralaus mikroklimato poveikis", href: "/technologija-ir-gamyba#naturalus-mikroklimatas" },
      { label: "Meistryste ir patirtis", href: "/technologija-ir-gamyba#meistryste-ir-patirtis" },
    ],
  },

  { label: "Apie mus", href: "/apie-mus" },

  { label: "Kontaktai", href: "/kontaktai" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };


  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] h-[76px] border-b transition-all duration-300 md:h-[96px] border-[#2F4A3B]/10 bg-[#F7F5EE] shadow-[0_2px_20px_rgba(0,0,0,0.045)] backdrop-blur-md`}
    >
      <div className="container relative flex h-full items-center justify-between">
        {/* LOGO - LEFT */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="relative block w-[34%] sm:w-[30%] md:w-[25%] lg:w-[15%] bg-white"
        >
          <Image
            width="200"
            height="100"
            alt="logo"
            src={"/images/header-logo.png"}
          
            className=" w-full"
          />
           
        </Link>

        {/* DESKTOP NAVIGATION - CENTER */}
        <nav
          aria-label="Main navigation"
          className="absolute left-[47%] hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
         
            <span key={item.label} className="group/item relative">
              <Link
                href={item.href}
                className={`relative flex items-center tracking-wide font-medium gap-1 whitespace-nowrap py-3 text-[12px] transition-colors duration-300 xl:text-[14px] ${
                  isActive(item.href)
                    ? "text-[#2F4A3B]"
                    : "text-[#454B46] group-hover/item:text-[#2F4A3B]"
                }`}
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-focus-within/item:rotate-180 group-hover/item:rotate-180"
                  />
                )}

                <span
                  className={`absolute bottom-[3px] left-0 h-[2px] rounded-full bg-[#2F4A3B] transition-all duration-300 ${
                    isActive(item.href)
                      ? "w-full"
                      : "w-0 group-hover/item:w-full"
                  }`}
                />
              </Link>

              {/* DROPDOWN PANEL */}
              {item.dropdown && item.dropdownItem && (
                <div
                  className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-out group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100"
                >
                  <div className="relative min-w-[250px] rounded-2xl border border-[#2F4A3B]/10 bg-[#F7F5EE] p-2 shadow-[0_20px_50px_rgba(23,39,31,0.14)]">
                    {/* little pointer notch */}
                    <span
                      aria-hidden
                      className="absolute -top-[6px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[2px] border-l border-t border-[#2F4A3B]/10 bg-[#F7F5EE]"
                    />

                    <ul className="relative">
                      {item.dropdownItem.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className={`group/sub flex items-center justify-between gap-6 rounded-xl px-4 py-3 text-[14px] transition-colors duration-200 hover:bg-[#2F4A3B]/[0.06] ${
                              isActive(sub.href) && sub.href !== "#"
                                ? "text-[#2F4A3B]"
                                : "text-[#454B46] hover:text-[#2F4A3B]"
                            }`}
                          >
                            <span>{sub.label}</span>
                            <ArrowUpRight
                              size={15}
                              className="-translate-x-1 translate-y-1 text-[#B8875B] opacity-0 transition-all duration-300 group-hover/sub:translate-x-0 group-hover/sub:translate-y-0 group-hover/sub:opacity-100"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </span>
          ))}
        </nav>

        {/* DESKTOP CTA - RIGHT */}
        <div className="ml-auto hidden lg:block">
          <motion.a
            href="/kontaktai#kontaktine-informacija"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative hidden items-center gap-4 overflow-hidden  border border-[#D9C9B1]/35 bg-[#2F4A3B] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.19em] text-[#F5F0E7] shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-[#D9C9B1]/70 hover:bg-[#2F4A3B]/75 md:flex"
          >
            {/* Focused glass spotlight */}
            <span className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,201,177,0.28),transparent_65%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Glass reflection */}
            <motion.span
              className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              animate={{ left: ["-60%", "160%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />

            {/* Inner illuminated border */}
            <span className="pointer-events-none absolute inset-[1px] border border-white/[0.06]" />

            <span className="relative z-10 whitespace-nowrap">
              Gauti pasiūlymą
            </span>

            <motion.span
              className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C9B1]/35 bg-[#D9C9B1]/10 text-[#D9C9B1] transition-all duration-500 group-hover:border-[#D9C9B1] group-hover:bg-[#D9C9B1] group-hover:text-[#243A2F]"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </motion.span>
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#2F4A3B] text-white transition-colors hover:bg-[#243A2F] lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 top-full w-full border-t border-[#2F4A3B]/10 bg-[#F7F5EE] shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto w-[90%] max-w-[600px] pb-7 pt-5">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className={`group flex items-center justify-between border-b border-[#2F4A3B]/10 py-[15px] transition-colors ${
                  isActive(item.href)
                    ? "text-[#2F4A3B]"
                    : "text-[#454B46] hover:text-[#2F4A3B]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[15px] font-medium">{item.label}</span>
                </div>

                {item.dropdown ? (
                  <ChevronDown size={16} className="text-[#788C6A]" />
                ) : (
                  <ArrowRight
                    size={15}
                    className={`transition-all duration-300 ${
                      isActive(item.href)
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                )}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(false)}
            className="group mt-6 flex w-full items-center justify-between rounded-full bg-[#2F4A3B] px-6 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#243A2F]"
          >
            <span>Gauti pasiūlymą</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

        
        </div>
      </div>
    </header>
  );
}