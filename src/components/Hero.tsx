"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black pt-24"
    >
      {/* TODO: reemplazar con imagen/video real de la flota */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#1a1a1a] to-brand-black" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff10 0, #ffffff10 2px, transparent 2px, transparent 12px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Transporte de larga distancia con{" "}
          <span className="text-brand-red">+30 años</span> de experiencia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl"
        >
          SPOGROUP conecta destinos en todo el país, brindando un servicio
          confiable para agencias de viaje y particulares.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink("Hola, quiero cotizar un viaje.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-red px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
          >
            Cotizar ahora
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-brand-red hover:text-brand-red"
          >
            Conocer servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
