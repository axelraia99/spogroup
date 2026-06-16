"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/config/site";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-brand-black sm:text-4xl">
            Sobre SPOGROUP
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-gray">
            Desde hace más de 30 años, SPOGROUP brinda servicios de transporte
            de larga distancia, acompañando a agencias de viaje y
            particulares con seguridad, puntualidad y un equipo
            comprometido con cada trayecto. Nuestra trayectoria nos convirtió
            en un referente del transporte terrestre de pasajeros.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-brand-red sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-brand-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
