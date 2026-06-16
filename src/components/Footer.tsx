import Image from "next/image";
import { navLinks, siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-gray-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Image
              src="/logo.png"
              alt="SPOGROUP Viajes y Turismo"
              width={140}
              height={48}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              {siteConfig.description}
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-gray-400">
            <p>{siteConfig.address}</p>
            <p className="mt-1">{siteConfig.phone}</p>
            <p className="mt-1">{siteConfig.email}</p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-medium text-brand-red hover:underline"
            >
              Instagram @spogroupviajes
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
