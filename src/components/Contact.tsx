"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import InstagramIcon from "./InstagramIcon";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState<"agencia" | "particular">("particular");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hola, soy ${name || "(nombre)"}.`,
      `Tipo de cliente: ${type === "agencia" ? "Agencia de viajes" : "Particular"}.`,
      phone ? `Teléfono/email de contacto: ${phone}.` : "",
      message ? `Mensaje: ${message}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 sm:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-cream-strong sm:text-4xl">
              Contacto
            </h2>
            <p className="mt-4 text-gray-400">
              Completá el formulario y te respondemos por WhatsApp, o
              contactanos directamente.
            </p>

            <div className="mt-8 space-y-3 text-cream">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-red" strokeWidth={1.5} />
                {siteConfig.phone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-red" strokeWidth={1.5} />
                {siteConfig.email}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-brand-red" strokeWidth={1.5} />
                {siteConfig.address}
              </p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-semibold text-brand-red hover:underline"
              >
                <InstagramIcon className="h-4 w-4 flex-shrink-0" />
                @spogroupviajes
              </a>
            </div>

            {/* Google Maps embebido — Córdoba, Argentina */}
            <div className="mt-8 overflow-hidden rounded-xl opacity-90">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.4825690862787!2d-64.19887232346932!3d-31.41970847352145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2b0f0f0f0f%3A0xf0f0f0f0f0f0f0f!2sAv.%20Acoyte%201842%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl bg-card-2 p-8"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-cream-strong">
                Nombre
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-2 text-base text-cream focus:border-brand-red focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-cream-strong">
                Teléfono o email
              </label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-2 text-base text-cream focus:border-brand-red focus:outline-none"
              />
            </div>

            <div>
              <span className="mb-1 block text-sm font-medium text-cream-strong">
                Tipo de cliente
              </span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-cream">
                  <input
                    type="radio"
                    name="type"
                    checked={type === "particular"}
                    onChange={() => setType("particular")}
                  />
                  Particular
                </label>
                <label className="flex items-center gap-2 text-sm text-cream">
                  <input
                    type="radio"
                    name="type"
                    checked={type === "agencia"}
                    onChange={() => setType("agencia")}
                  />
                  Agencia
                </label>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-cream-strong">
                Mensaje
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-black px-4 py-2 text-base text-cream focus:border-brand-red focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-brand-red px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
