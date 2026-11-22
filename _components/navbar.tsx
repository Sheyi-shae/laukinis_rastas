
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navigation = [


  { label: "Namai ir pastatai", href: "#" },

{ label: "Įgyvendinti projektaiv", href: "#" },

{ label: "Technologijos ir gamyba", href: "#", dropdown: true },

{ label: "Apie mus", href: "#" },

{ label: "Kontaktai", href: "#" },
 
];



export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

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

  const showBackground = !isHome || scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] h-[76px] border-b transition-all duration-300 md:h-[96px] ${
        showBackground
          ? "border-[#2F4A3B]/10 bg-[#F7F5EE]/95 shadow-[0_2px_20px_rgba(0,0,0,0.045)] backdrop-blur-md"
          : "border-transparent bg-transparent shadow-none"
      }`}
    >
          <div className="container relative flex h-full items-center justify-between">
              {/* LOGO - LEFT */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="relative z-10 flex shrink-0 items-center gap-2.5 text-[#2F4A3B] md:gap-3.5"
        >
          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[34px] w-[34px] md:h-[43px] md:w-[43px]"
          >
            <path
              d="M21.5 3L39 16V40H26V23H17V40H4V16L21.5 3Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M12 40V20L21.5 13L31 20V40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>

          
        </Link>

        {/* DESKTOP NAVIGATION - CENTER */}
        <nav
          aria-label="Main navigation"
          className="absolute left-[45%] hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group relative flex items-center gap-1 whitespace-nowrap py-3 text-[12px]  transition-colors duration-300 xl:text-[16px] font-medium ${
                isActive(item.href)
                  ? "text-[#2F4A3B]"
                  : "text-[#454B46] hover:text-[#2F4A3B]"
              }`}
            >
              {item.label}

              {item.dropdown && (
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )}

              <span
                className={`absolute bottom-[3px] left-0 h-[2px] rounded-full bg-[#2F4A3B] transition-all duration-300 ${
                  isActive(item.href)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA - RIGHT */}
        <div className="ml-auto hidden lg:block">
          <button
            
            className="btn btn-primary "
          >
            Gauti pasiūlymą

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
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

          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#80664C]">
              Navigation
            </span>

            <span className="text-[10px] tracking-[1px] text-[#8A8F89]">
              Explore Wooden Homes
            </span>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item, index) => (
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
                  <span className="text-[10px] font-medium text-[#B8875B]">
                    0{index + 1}
                  </span>

                  <span className="text-[15px] font-medium">
                    {item.label}
                  </span>
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

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="group mt-6 flex w-full items-center justify-between rounded-full bg-[#2F4A3B] px-6 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#243A2F]"
          >
            <span>Gauti pasiūlymą</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="mt-5 text-center text-[10px] tracking-[1.5px] text-[#8A8F89]">
            NATURAL · MODERN · LASTING
          </p>
        </div>
      </div>
    </header>
  );
}
