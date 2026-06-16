"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { promos } from "@/config/site";

export default function Promos() {
  const [featured, ...rest] = promos;

  return (
    <section id="promos" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-cream-strong sm:text-4xl">
          Promos y Novedades
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Seguinos en Instagram para no perderte nuestras promociones.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <motion.a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="group block overflow-hidden rounded-2xl bg-card-2 transition-colors lg:col-span-2"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-brand-gray/20">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
                Promo vigente
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-cream-strong sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 sm:text-base">{featured.text}</p>
              {featured.date && (
                <p className="mt-3 text-xs text-gray-500">{featured.date}</p>
              )}
            </div>
          </motion.a>

          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-1 lg:grid-cols-1">
            {rest.map((promo, i) => (
              <motion.a
                key={promo.title}
                href={promo.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
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
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-cream-strong">
                    {promo.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">{promo.text}</p>
                  {promo.date && (
                    <p className="mt-1 text-[10px] text-gray-500">{promo.date}</p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
