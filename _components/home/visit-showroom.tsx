
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Hammer,
  MapIcon,
  MapPinIcon,
  Trees,
} from "lucide-react";
import PrimaryButton from "../primary-button";

export default function VisitShowroom() {
  const shouldReduceMotion = useReducedMotion();

  return (
   <section
         id="dirbtuves"
         className="relative overflow-hidden bg-[#F0EDE4] py-20"
       >
         <div className="container">
           <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
   
            
   
             {/* Text content */}
             <motion.div
               initial={shouldReduceMotion ? false : { opacity: 0, x: 35 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{
                 duration: 0.8,
                 delay: 0.15,
                 ease: [0.22, 1, 0.36, 1],
               }}
               className="relative"
             >
              
   
               {/* Heading */}
               <h2 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#262626] sm:text-5xl lg:text-[3.5rem]">
               Pamatykite, kaip gimsta jūsų  {" "}
                 <span className="font-serif font-normal italic text-[#788C6A]">
                    būsimi namai.
                 </span>
               </h2>
   
               
   
               {/* Description */}
               <div className="mt-7 space-y-5 text-justify text-[15px] leading-[1.9] text-[#62665F]">
                 <p>
                   Apsilankymo metu galėsite įvertinti medienos kokybę, pamatyti vykdomus projektus, susipažinti su gamybos procesu ir tiesiogiai su meistrais aptarti savo būsimo namo viziją.

                          </p>
   
               
               </div>
   
               {/* Visit highlights */}
               <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#D9D2C5] py-6">
                
   
                 <div className="flex items-center gap-3">
                   <MapPinIcon
                     size={21}
                     strokeWidth={1.5}
                     className="shrink-0 text-[#788C6A]"
                   />
                   <span className="text-sm font-medium text-[#404040]">
                     Antalaušių kaimas, Ukmergės rajonas, LT-20379
                   </span>
                 </div>
               </div>
   
               {/* CTA */}
               <div className="mt-8">
                 <PrimaryButton link="https://maps.google.com/?cid=2534470294559763390&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF" name="Apsilankykite mūsų ekspozicijų salėje"/>
   
                 
               </div>
                  </motion.div>
                  
                   {/* Workshop image */}
             <motion.div
               initial={shouldReduceMotion ? false : { opacity: 0, x: -35 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="relative"
             >
               <div className="relative aspect-[4/4] overflow-hidden  ">
                 <Image
                   src="/images/projects/showroom.jpg"
                   alt="Rąstinių namų gamybos dirbtuvės ir rankomis apdirbami mediniai rąstai"
                   fill
                   //sizes="(max-width: 1024px) 100vw, 50vw"
                   className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                 />
   
                 <div className="absolute inset-0 bg-gradient-to-t from-[#17251D]/35 via-transparent to-transparent" />
               </div>
   
               {/* Image corner detail */}
               <div
                 aria-hidden="true"
                 className="absolute -bottom-5 -right-5 -z-10 h-2/3 w-2/3 border border-[#B8875B]/50"
               />
   
             </motion.div>
           </div>
         </div>
       </section>
  );
}
