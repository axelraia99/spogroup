"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/config/site";

const beneficios = [
  "Tarifas especiales para agencias",
  "Flexibilidad operativa y disponibilidad de unidades",
  "Atención comercial dedicada",
  "Más de 30 años de respaldo y experiencia",
];

export default function Agencies() {
  return (
    <section id="agencias" className="overflow-hidden bg-brand-black py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:grid-cols-2 sm:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            B2B
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Para Agencias de Viaje
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Trabajamos junto a agencias de viaje en todo el país, ofreciendo
            un servicio confiable que se adapta a las necesidades de cada
            operación.
          </p>
          <a
            href={whatsappLink("Hola, soy una agencia de viajes y quiero más información comercial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
          >
            Contacto comercial
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {beneficios.map((beneficio) => (
            <li
              key={beneficio}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-gray-200"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red" />
              {beneficio}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
