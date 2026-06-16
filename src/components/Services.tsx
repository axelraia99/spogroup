"use client";

import { motion } from "framer-motion";
import Icon from "./Icon";
import { servicios } from "@/config/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="servicios" className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-brand-black sm:text-4xl">
          Servicios
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-8 sm:grid-cols-3"
        >
          {servicios.map((servicio) => (
            <motion.div
              key={servicio.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Icon name={servicio.icon as "bus" | "handshake" | "users"} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-black">
                {servicio.title}
              </h3>
              <p className="mt-3 text-brand-gray">{servicio.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
