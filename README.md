# Portfolio de Santiago Cañu

Portfolio responsive construido con Next.js, React, TypeScript y CSS propio. No requiere base de datos, variables de entorno ni Tailwind CSS.

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Generar el sitio para producción

```bash
npm run build
```

El resultado queda en la carpeta `out/`. Es un sitio estático, por lo que podés desplegar esa carpeta en Vercel, Netlify, Cloudflare Pages, GitHub Pages o cualquier hosting estático.

## Despliegue en un dominio propio

En Vercel, Netlify o Cloudflare Pages conectá este repositorio y usá:

- Comando de instalación: `npm install`
- Comando de build: `npm run build`
- Directorio de publicación: `out`
- Versión de Node: `20.9` o superior

Después configurá tu dominio desde el panel de la plataforma elegida. No hay secretos ni variables de entorno para cargar.

## Dónde editar

- `app/page.tsx`: contenido, proyectos, textos y enlaces.
- `app/globals.css`: estilos y comportamiento responsive.
- `app/layout.tsx`: SEO básico, título y descripción.
