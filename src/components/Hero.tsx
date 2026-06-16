"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/config/site";
import WordsPullUp from "./WordsPullUp";

export default function Hero() {
  return (
    <section id="top" className="h-screen p-4 md:p-6">
      <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* TODO: reemplazar por <video autoPlay loop muted playsInline> con video institucional real de la flota */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/fleet/fleet2.jpg)" }}
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-10 sm:pb-14 md:px-14 md:pb-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1
                className="text-[26vw] leading-[0.85] font-medium tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="SPOGROUP" showAsterisk />
              </h1>
            </div>

            <div className="md:col-span-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
              >
                SPOGROUP es una red de transporte de larga distancia con más
                de 30 años de trayectoria, uniendo agencias de viaje y
                particulares a través de cada ruta del país.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <a
                  href={whatsappLink("Hola, quiero cotizar un viaje.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  Cotizar ahora
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-cream" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
