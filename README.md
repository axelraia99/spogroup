# SPOGROUP — Landing Page

Landing page (one-page) para SPOGROUP Viajes y Turismo. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Correr el proyecto

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

Build de producción:

```bash
npm run build
npm run start
```

## Dónde completar los datos pendientes

Todo lo editable está centralizado en [`src/config/site.ts`](src/config/site.ts):

- **Contacto**: `phone`, `whatsapp` (formato internacional sin "+" ni espacios, ej. `5493511234567`), `email`, `address`.
- **Instagram / redes**: `instagram`, `social`.
- **Estadísticas** (`stats`): años, unidades, clientes, km recorridos — reemplazar valores placeholder.
- **Promos** (`promos`): array vacío/placeholder listo para pegar contenido real de Instagram (imagen, título, texto, fecha, link).

Otros placeholders a buscar en el código (marcados con `TODO:`):

- `src/components/Fleet.tsx` — fotos reales de la flota (reemplazar bloques placeholder por `next/image`).
- `src/components/Testimonials.tsx` — testimonios reales de clientes/agencias.
- `src/components/Contact.tsx` — mapa embebido real (Google Maps) con la dirección definitiva.
- `src/app/layout.tsx` / `src/config/site.ts` — `siteConfig.url` cuando se configure el dominio propio en Vercel.

El formulario de contacto no envía mail: arma un mensaje y abre WhatsApp con los datos completados.

## Deploy (Vercel + GitHub)

1. Crear un repositorio en GitHub y subir este proyecto (ver instrucciones que te dio Claude Code en el chat).
2. En [vercel.com/new](https://vercel.com/new), importar ese repositorio.
3. Vercel detecta Next.js automáticamente — no requiere variables de entorno.
4. Cada `git push` a la rama principal dispara un deploy automático a producción; cada Pull Request genera un preview deploy.
