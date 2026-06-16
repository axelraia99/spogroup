"use client";

import { Star } from "lucide-react";

const testimonios = [
  {
    name: "Viajes Córdoba Express",
    text: "Trabajamos con SPOGROUP desde hace 8 años. Su servicio es impecable, las unidades siempre en perfecto estado y el equipo muy profesional.",
  },
  {
    name: "Javier M., Cliente particular",
    text: "Viajé a Buenos Aires con mi familia y fue excelente. Los choferes atentos, la unidad limpia y llegamos a horario. Recomiendo SPOGROUP sin dudarlo.",
  },
  {
    name: "Turismo La Plata",
    text: "Las tarifas especiales para agencias son muy competitivas. Además, tienen flexibilidad en horarios y disponibilidad de unidades.",
  },
  {
    name: "María S., Cliente particular",
    text: "Excelente experiencia. Viajar con SPOGROUP es cómodo y seguro. El personal muy amable y atento a cualquier necesidad.",
  },
  {
    name: "Rutas del Centro Agencia",
    text: "La comunicación con SPOGROUP siempre es rápida y clara. Nos resuelven cualquier imprevisto al instante. Un socio confiable para nuestra agencia.",
  },
  {
    name: "Lucía F., Cliente particular",
    text: "Viajé sola por primera vez y me sentí muy segura todo el trayecto. Las unidades son cómodas y modernas. Repetiría sin dudarlo.",
  },
  {
    name: "Norte Travel S.A.",
    text: "Más de 5 años trabajando juntos. La puntualidad y el cuidado de los pasajeros de nuestros grupos es siempre excelente.",
  },
  {
    name: "Diego R., Cliente particular",
    text: "El servicio de café y el WiFi a bordo hicieron mucho más corto el viaje. Muy recomendable para distancias largas.",
  },
];

export default function Testimonials() {
  const track = [...testimonios, ...testimonios];

  return (
    <section className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-cream-strong sm:text-4xl">
          Testimonios
        </h2>
      </div>

      <div className="group relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black to-transparent sm:w-24" />

        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <blockquote
              key={`${t.name}-${i}`}
              className="flex h-56 w-[300px] flex-shrink-0 flex-col rounded-2xl bg-card-2 p-6 sm:w-[340px]"
            >
              <div className="flex justify-center gap-1 text-brand-red">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <div className="flex flex-1 items-center">
                <p className="text-center text-sm italic leading-relaxed text-gray-400">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <footer className="text-center text-sm font-semibold text-cream-strong">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
