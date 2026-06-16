import Image from "next/image";
import { navLinks, siteConfig } from "@/config/site";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 text-gray-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
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

          <nav className="flex flex-col items-center gap-2 text-sm sm:items-start">
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

          <div className="flex flex-col items-center gap-1 text-sm text-gray-400 sm:items-start">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-medium text-brand-red hover:underline"
            >
              <InstagramIcon className="h-4 w-4" />
              @spogroupviajes
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
