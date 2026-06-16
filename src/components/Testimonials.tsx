"use client";

import { motion } from "framer-motion";

const testimonios = [
  {
    name: "Viajes Córdoba Express",
    text: "Trabajamos con SPOGROUP desde hace 8 años. Su servicio es impecable, las unidades siempre en perfecto estado y el equipo muy profesional. Nuestros clientes confían 100%.",
  },
  {
    name: "Javier M., Cliente particular",
    text: "Viajé a Buenos Aires con mi familia y fue excelente. Los choferes atentos, la unidad limpia y llegamos a horario. Recomiendo SPOGROUP sin dudarlo.",
  },
  {
    name: "Turismo La Plata",
    text: "Las tarifas especiales para agencias son muy competitivas. Además, tienen flexibilidad en horarios y disponibilidad de unidades. Perfecto para nuestros paquetes.",
  },
  {
    name: "María S., Cliente particular",
    text: "Excelente experiencia. Viajar con SPOGROUP es cómodo y seguro. El personal muy amable y atento a cualquier necesidad.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-cream-strong sm:text-4xl">
          Testimonios
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {testimonios.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card-2 p-6 transition-colors"
            >
              <div className="flex gap-1 text-brand-red">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-3 italic text-gray-400">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 font-semibold text-cream-strong">
                — {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
