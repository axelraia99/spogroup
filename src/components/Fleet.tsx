"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fleetImages = [1, 2, 3, 4, 5, 6];

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
          {fleetImages.map((n) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={`/fleet/fleet${n}.jpg`}
                alt={`Unidad ${n} de la flota SPOGROUP`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
