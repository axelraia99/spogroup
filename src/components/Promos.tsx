"use client";

import { motion } from "framer-motion";
import { promos } from "@/config/site";

export default function Promos() {
  return (
    <section id="promos" className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-brand-black sm:text-4xl">
          Promos y Novedades
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-brand-gray">
          Seguinos en Instagram para no perderte nuestras promociones.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {/* TODO: reemplazar con contenido real de Instagram (@spogroupviajes) */}
          {promos.map((promo, i) => (
            <motion.a
              key={promo.title}
              href={promo.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-gray-light/40 to-brand-gray/40 text-sm text-brand-gray">
                Imagen placeholder
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-brand-black">
                  {promo.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray">{promo.text}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
