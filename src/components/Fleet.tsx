"use client";

import { motion } from "framer-motion";

const placeholders = [1, 2, 3, 4, 5, 6];

export default function Fleet() {
  return (
    <section id="flota" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-brand-black sm:text-4xl">
          Flota
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-gray">
          Unidades modernas y equipadas para garantizar comodidad y seguridad
          en cada viaje.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {placeholders.map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-brand-gray-light/40 to-brand-gray/40"
            >
              {/* TODO: reemplazar con foto real de la flota (next/image) */}
              <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-brand-gray transition-transform duration-500 group-hover:scale-110">
                Foto de flota {n} (placeholder)
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
