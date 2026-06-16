"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { promos } from "@/config/site";

export default function Promos() {
  return (
    <section id="promos" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-cream-strong sm:text-4xl">
          Promos y Novedades
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Seguinos en Instagram para no perderte nuestras promociones.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group block overflow-hidden rounded-2xl bg-card-2 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden bg-brand-gray/20">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-cream-strong">
                  {promo.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{promo.text}</p>
                {promo.date && (
                  <p className="mt-2 text-xs text-gray-500">{promo.date}</p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
