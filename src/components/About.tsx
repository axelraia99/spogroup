"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import AnimatedLetters from "./AnimatedLetters";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import { stats } from "@/config/site";

export default function About() {
  return (
    <section id="sobre" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-card-1 px-6 py-16 text-center sm:px-12 sm:py-20">
          <p className="text-[10px] uppercase tracking-wide text-primary sm:text-xs">
            Transporte de larga distancia
          </p>

          <div className="mx-auto mt-6 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Somos SPOGROUP,", className: "font-normal text-primary" },
                { text: "una red que conecta personas", className: "font-serif italic text-primary" },
                { text: "desde hace más de 30 años.", className: "font-normal text-primary" },
              ]}
            />
          </div>

          <AnimatedLetters
            text="Desde nuestros inicios recorremos rutas de larga distancia en todo el país, trabajando junto a agencias de viaje y particulares. Construimos una flota moderna y un equipo comprometido que hizo de SPOGROUP un referente del transporte terrestre de pasajeros."
            className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
          />

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl font-bold text-brand-red sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
