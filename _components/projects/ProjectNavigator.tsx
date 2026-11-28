
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navigationItems = [
  { label: "Ekspozicija", href: "#ekspozicija" },
  // { label: "Raimondos namas", href: "#raimondos-namai" },
  // { label: "Fredžio kompleksas", href: "#fredzio-kompleksas" },
  { label: "Įgyvendinti projektai", href: "#klientu-projektai" },
 
  { label: "Galerija", href: "#projektu-galerija" },
];

export default function ProjectsNavigation() {
  return (
    <nav
      id="projektu-navigacija"
      aria-label="Projektų puslapio navigacija"
      className="sticky top-20 z-40 border-b border-[#E5E0D5] bg-[#F7F5EE]/95 shadow-[0_5px_20px_rgba(38,38,38,0.04)] backdrop-blur-xl"
    >
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <div className="hidden shrink-0 items-center gap-2 py-5 lg:flex">
            <span className="h-2 w-2 rounded-full bg-[#B8875B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6B6F76]">
              Mūsų projektai
            </span>
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-7 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-end">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-semibold text-[#555B55] transition-colors duration-300 hover:text-[#2F4A3B] sm:text-sm"
              >
                {item.label}
                {index === navigationItems.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="text-[#B8875B] transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
                <span className="absolute -bottom-4 left-0 h-[2px] w-0 bg-[#B8875B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
