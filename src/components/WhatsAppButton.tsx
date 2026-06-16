"use client";

import { whatsappLink } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola SPOGROUP, quiero más información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.04 0C7.16 0 0 7.16 0 16.04c0 2.83.74 5.6 2.15 8.03L.1 31.6a.6.6 0 0 0 .74.73l7.74-2.03a16 16 0 0 0 7.46 1.81c8.88 0 16.04-7.16 16.04-16.04S24.92 0 16.04 0Zm0 29.36c-2.49 0-4.92-.67-7.04-1.93l-.5-.3-4.6 1.2 1.23-4.48-.32-.46a13.27 13.27 0 0 1-2.13-7.35c0-7.32 5.96-13.28 13.36-13.28 7.32 0 13.28 5.96 13.28 13.28 0 7.4-5.96 13.32-13.28 13.32Zm7.3-9.96c-.4-.2-2.36-1.16-2.72-1.3-.37-.13-.63-.2-.9.2-.27.4-1.02 1.3-1.25 1.56-.23.27-.46.3-.86.1-2.3-1.15-3.8-2.06-5.32-4.66-.4-.7.4-.65 1.15-2.16.13-.27.06-.5-.07-.7-.13-.2-1-2.4-1.36-3.3-.36-.86-.73-.74-1-.74-.26 0-.6 0-1 0-.4 0-.97.15-1.5.74-.53.6-2.03 1.99-2.03 4.83 0 2.86 2.06 5.6 2.36 5.98.3.37 3.6 5.4 8.9 7.4 5.3 2 5.3 1.34 6.27 1.26.96-.07 2.36-.97 2.7-1.9.34-.94.34-1.74.24-1.9-.1-.17-.4-.27-.8-.46Z" />
      </svg>
    </a>
  );
}
