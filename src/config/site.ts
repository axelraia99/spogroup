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
  url: "https://spogroup.vercel.app", // TODO: reemplazar cuando se configure dominio propio
  city: "Córdoba",
  region: "Córdoba",
  country: "Argentina",

  // TODO: reemplazar con datos reales de contacto
  phone: "+54 9 351 XXX-XXXX",
  whatsapp: "5493511234567", // TODO: reemplazar con número real en formato internacional sin "+" ni espacios
  email: "info@spogroup.com.ar", // TODO: reemplazar con email real
  address: "Av. Ejemplo 1234, Córdoba, Argentina", // TODO: reemplazar con dirección real

  instagram: "https://www.instagram.com/spogroupviajes/",

  social: {
    instagram: "https://www.instagram.com/spogroupviajes/",
    facebook: "", // TODO: completar si existe
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
  { label: "Años de experiencia", value: 30, suffix: "+" },
  { label: "Unidades en flota", value: 25, suffix: "+" }, // TODO: reemplazar con valor real
  { label: "Clientes satisfechos", value: 5000, suffix: "+" }, // TODO: reemplazar con valor real
  { label: "Km recorridos", value: 2000000, suffix: "+" }, // TODO: reemplazar con valor real
];

// TODO: reemplazar con contenido real de Instagram (@spogroupviajes)
export const promos: Promo[] = [
  {
    image: "/placeholders/promo-1.jpg",
    title: "Promo placeholder 1",
    text: "Texto breve de la promoción. Reemplazar con contenido real de Instagram.",
    date: "",
    link: "https://www.instagram.com/spogroupviajes/",
  },
  {
    image: "/placeholders/promo-2.jpg",
    title: "Promo placeholder 2",
    text: "Texto breve de la promoción. Reemplazar con contenido real de Instagram.",
    date: "",
    link: "https://www.instagram.com/spogroupviajes/",
  },
  {
    image: "/placeholders/promo-3.jpg",
    title: "Promo placeholder 3",
    text: "Texto breve de la promoción. Reemplazar con contenido real de Instagram.",
    date: "",
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
