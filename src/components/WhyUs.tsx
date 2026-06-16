"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const items = [
  { label: "Años de trayectoria", value: 30, suffix: "+" },
  { label: "Provincias con cobertura", value: 20, suffix: "+" }, // TODO: reemplazar con valor real
  { label: "Viajes realizados con seguridad", value: 100, suffix: "%" },
];

export default function WhyUs() {
  return (
    <section className="bg-brand-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Por qué elegirnos
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-4xl font-bold text-brand-red">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
