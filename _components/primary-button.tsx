import React from 'react'
import {motion} from "framer-motion"
import { ArrowUpRight } from 'lucide-react'

interface button{
    name:string
}
export default function PrimaryButton({ name }:button) {
  return (
      <div>
           <div className="ml-auto hidden lg:block">
          <motion.a
            href="#contact"
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
              {name}
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
    </div>
  )
}

export  function SecondaryButton({ name }:button) {
  return (
      <div>
           <div className="ml-auto hidden lg:block">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative hidden items-center gap-4 overflow-hidden  border border-[#B8875B]/35 bg-[#B8875B] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.19em] text-[#F5F0E7] shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 hover:border-[#B8875B]/70 hover:bg-[#B8875B]/75 md:flex"
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
              {name}
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
    </div>
  )
}