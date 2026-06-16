"use client";

import { motion } from "framer-motion";

// TODO: reemplazar con testimonios reales de clientes/agencias
const testimonios = [
  {
    name: "Agencia placeholder",
    text: "Texto de testimonio placeholder. Reemplazar con comentario real de un cliente o agencia.",
  },
  {
    name: "Cliente placeholder",
    text: "Texto de testimonio placeholder. Reemplazar con comentario real de un cliente o agencia.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-brand-black sm:text-4xl">
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
              className="rounded-2xl border border-gray-200 bg-[#fafafa] p-8"
            >
              <p className="text-brand-gray">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-4 font-semibold text-brand-black">
                {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
