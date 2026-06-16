export type Promo = {
  image: string;
  title: string;
  text: string;
  date: string;
  link: string;
};

export type Servicio = {
  title: string;
  description: string;
  icon: string;
};

export const siteConfig = {
  name: "SPOGROUP",
  tagline: "Viajes y Turismo",
  description:
    "Transporte de larga distancia con más de 30 años de experiencia. Servicio para agencias de viaje y particulares en Córdoba, Argentina.",
  url: "https://spogroup.vercel.app",
  city: "Córdoba",
  region: "Córdoba",
  country: "Argentina",

  phone: "+54 9 351 2847-3921",
  whatsapp: "5493512847391",
  email: "consultas@spogroup.com.ar",
  address: "Av. Acoyte 1842, Córdoba, Argentina",

  instagram: "https://www.instagram.com/spogroupviajes/",

  social: {
    instagram: "https://www.instagram.com/spogroupviajes/",
    facebook: "https://www.facebook.com/spogroupviajes",
  },
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const servicios: Servicio[] = [
  {
    title: "Transporte de larga distancia",
    description:
      "Viajes terrestres de larga distancia con seguridad y puntualidad, conectando destinos en todo el país.",
    icon: "bus",
  },
  {
    title: "Servicio para agencias de viaje",
    description:
      "Soluciones B2B a medida para agencias: tarifas especiales, flexibilidad operativa y atención dedicada.",
    icon: "handshake",
  },
  {
    title: "Servicio para particulares y grupos",
    description:
      "Traslados para particulares, familias y grupos, con la misma calidad y confianza de siempre.",
    icon: "users",
  },
];

export const stats = [
  { label: "Años de experiencia", value: 31, suffix: "+" },
  { label: "Unidades en flota", value: 48, suffix: "" },
  { label: "Clientes satisfechos", value: 12500, suffix: "+" },
  { label: "Km recorridos", value: 3500000, suffix: "+" },
];

export const promos: Promo[] = [
  {
    image: "/promos/promo-1.jpg",
    title: "Verano con SPOGROUP",
    text: "10% de descuento en viajes de larga distancia. ¡Aprovecha el receso de verano!",
    date: "15 Dic 2024",
    link: "https://www.instagram.com/spogroupviajes/",
  },
  {
    image: "/promos/promo-2.jpg",
    title: "Conectamos Córdoba - Buenos Aires",
    text: "Ruta diaria directa con las mejores comodidades. WiFi, enchufes y bar a bordo.",
    date: "10 Dic 2024",
    link: "https://www.instagram.com/spogroupviajes/",
  },
  {
    image: "/promos/promo-3.jpg",
    title: "Viajes en grupo con tarifa especial",
    text: "Grupos de 10+ pasajeros: descuentos por cantidad. Consulta a nuestras agencias.",
    date: "5 Dic 2024",
    link: "https://www.instagram.com/spogroupviajes/",
  },
  {
    image: "/promos/promo-4.jpg",
    title: "Ruta nueva: Córdoba - Mendoza",
    text: "Ahora viajás 2 veces por semana. Cómodos asientos reclinables y catering incluido.",
    date: "1 Dic 2024",
    link: "https://www.instagram.com/spogroupviajes/",
  },
];

export const navLinks = [
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Agencias", href: "#agencias" },
  { label: "Flota", href: "#flota" },
  { label: "Promos", href: "#promos" },
  { label: "Contacto", href: "#contacto" },
];
