
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  CreditCard,
  FileText,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const companies = [
  {
    name: "UAB „LAUKINIS RĄSTAS“",
    address: "P. Vileišio g. 3A-3, LT-10308 Vilnius, Lietuva",
    companyCode: "304914398",
    vatCode: "LT100020630719",
    bankAccount: "LT717290099021612217",
    bank: "AB CITADELE Bankas",
  },
  {
    name: "UAB „ZASKOV-GRUP“",
    address: "Antalaušių k. 15, 20379 Ukmergės raj. sav., Lietuva",
    companyCode: "302282786",
    vatCode: "LT100005490314",
    bankAccount: "LT177290000010467569",
    bank: "AB CITADELE Bankas",
  },
];

export default function CompanyDetails() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#E9DFD0] py-20 sm:py-24 ">
      {/* Decorative details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[420px] w-[420px] rounded-full border border-[#B8875B]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-12 -z-10 h-[300px] w-[300px] rounded-full border border-[#B8875B]/10"
      />

      <div className="container">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
           
            <span className="text-xs font-semibold tracking-[0.22em] text-[#788C6A]">
              ĮMONĖS INFORMACIJA
            </span>
            
          </div>

          <h2 className="font-serif flex items-center justify-center gap-4 text-4xl leading-tight tracking-tight text-[#262626] sm:text-5xl lg:text-6xl">
            Įmonės
            <span className=" italic text-[#788C6A]">
              rekvizitai
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#555A54] sm:text-lg">
            Žemiau pateikiami įmonių registracijos ir atsiskaitymo duomenys.
          </p>
        </motion.div>

        {/* Company cards */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {companies.map((company, index) => (
            <motion.article
              key={company.companyCode}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
              className="flex h-full flex-col border border-[#D8CDBD] bg-[#F7F5EE] p-6 shadow-[0_12px_35px_rgba(38,38,38,0.04)] sm:p-8 lg:p-9"
            >
              {/* Company heading */}
              <div className="flex items-center gap-4 border-b border-[#E5DED2] pb-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#E9E3D8] text-[#2F4A3B]">
                  <Building2 size={22} strokeWidth={1.6} />
                </div>

                <div>
                  {/* <span className="text-[10px] font-semibold tracking-[0.2em] text-[#788C6A]">
                    JURIDINIS ASMUO
                  </span> */}

                  <h3 className="mt-1 font-serif text-xl leading-snug text-[#262626] sm:text-2xl">
                    {company.name}
                  </h3>
                </div>
              </div>

              {/* Legal information */}
              <div className="flex-1 space-y-6 py-7">
                <div className="flex gap-4">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#A4774D]"
                  />

                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.12em] text-[#788C6A]">
                      JURIDINIS ADRESAS
                    </p>

                    <p className="mt-2 text-sm leading-7 text-[#404040]">
                      {company.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FileText
                    size={18}
                    className="mt-0.5 shrink-0 text-[#A4774D]"
                  />

                  <div className="min-w-0 flex-1 space-y-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[#788C6A]">
                        ĮMONĖS KODAS
                      </p>
                      <p className="mt-2 text-sm font-medium tracking-wide text-[#262626]">
                        {company.companyCode}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-[#788C6A]">
                        PVM MOKĖTOJO KODAS
                      </p>
                      <p className="mt-2 break-all text-sm font-medium tracking-wide text-[#262626]">
                        {company.vatCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank information */}
              <div className="border-t border-[#E5DED2] pt-6">
                <div className="mb-4 flex items-center gap-3">
                  <CreditCard size={19} className="text-[#A4774D]" />
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-[#788C6A]">
                    BANKO REKVIZITAI
                  </h4>
                </div>

                <div className="bg-[#E9E3D8] p-4 sm:p-5">
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-[#77766F]">
                    ATSISKAITOMOJI SĄSKAITA
                  </p>

                  <p className="mt-2 break-all font-mono text-sm font-semibold tracking-wide text-[#262626] sm:text-base">
                    {company.bankAccount}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#D8CDBD] pt-4">
                    <span className="text-xs text-[#77766F]">
                      Bankas
                    </span>
                    <span className="text-xs font-semibold text-[#404040]">
                      {company.bank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verification note */}
              <div className="mt-5 flex items-center gap-2 text-[11px] leading-5 text-[#77766F]">
                <ShieldCheck size={15} className="shrink-0 text-[#788C6A]" />
                <span>Įmonės duomenys pateikti pagal turimą informaciją.</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
