"use client";

import { motion } from "framer-motion";
import { Bus, Handshake, Users } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import { servicios } from "@/config/site";

const icons = { bus: Bus, handshake: Handshake, users: Users };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Services() {
  return (
    <section id="servicios" className="relative min-h-screen bg-black py-20 sm:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[{ text: "Servicios pensados para cada viaje.", className: "font-normal text-cream-strong" }]}
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-3 sm:grid-cols-3 sm:gap-2"
        >
          {servicios.map((servicio) => {
            const IconComp = icons[servicio.icon as keyof typeof icons];
            return (
              <motion.div
                key={servicio.title}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-card-2 p-8 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <IconComp className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-cream-strong">
                  {servicio.title}
                </h3>
                <p className="mt-3 text-gray-400">{servicio.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
