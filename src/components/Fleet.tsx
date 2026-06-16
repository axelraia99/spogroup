"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icon";

type Feature = { icon: "usb" | "bed" | "coffee" | "wifi" | "tv" | "snowflake" | "shield"; label: string };

const units: { name: string; image: string; features: Feature[] }[] = [
  {
    name: "Confort Mix",
    image: "/fleet/fleet1.jpg",
    features: [
      { icon: "bed", label: "Asientos semi-cama reclinables" },
      { icon: "usb", label: "Cargador USB en cada butaca" },
      { icon: "snowflake", label: "Aire acondicionado dual" },
      { icon: "wifi", label: "WiFi a bordo" },
    ],
  },
  {
    name: "Suite Cama",
    image: "/fleet/fleet2.jpg",
    features: [
      { icon: "bed", label: "Asientos cama 180°" },
      { icon: "coffee", label: "Servicio de café y snacks" },
      { icon: "tv", label: "Pantallas individuales" },
      { icon: "shield", label: "Cinturón de seguridad en cada butaca" },
    ],
  },
  {
    name: "Ejecutivo",
    image: "/fleet/fleet3.jpg",
    features: [
      { icon: "usb", label: "Cargador USB y 220V" },
      { icon: "wifi", label: "WiFi de alta velocidad" },
      { icon: "coffee", label: "Bar a bordo" },
      { icon: "snowflake", label: "Climatización individual" },
    ],
  },
];

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

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {units.map((unit, i) => (
            <motion.div
              key={unit.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={unit.image}
                  alt={`Unidad ${unit.name} de la flota SPOGROUP`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-black">
                  {unit.name}
                </h3>
                <ul className="mt-4 space-y-3">
                  {unit.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-center gap-3 text-sm text-brand-gray"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                        <Icon name={feature.icon} className="h-4 w-4" />
                      </span>
                      {feature.label}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
