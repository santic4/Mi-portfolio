# Portfolio de Santiago Cañu

Portfolio responsive construido con Next.js, React, TypeScript y CSS propio. Incluye proyectos con casos visuales opcionales en PDF, certificaciones verificables y descargas de CV. No requiere base de datos, variables de entorno ni Tailwind CSS.

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

- `app/page.tsx`: contenido, proyectos, certificaciones, textos y enlaces.
- `app/globals.css`: estilos y comportamiento responsive.
- `app/layout.tsx`: SEO básico, título y descripción.

## Agregar un caso visual a un proyecto

Los casos visuales se guardan como PDF dentro de `public/proyectos/`. Para agregar uno:

1. Copiá el PDF dentro de `public/proyectos/` con un nombre corto y sin espacios.
2. En `app/page.tsx`, buscá el proyecto y agregá la propiedad `caseStudyPdf` con su ruta pública.

Ejemplo:

```tsx
caseStudyPdf: "/proyectos/mi-proyecto-portfolio.pdf",
```

- E-Beneficios ya tiene asociado su caso visual en PDF.
- Si `caseStudyPdf` no existe, la tarjeta no muestra ningún botón, enlace ni espacio reservado.
- El enlace abre el PDF en una pestaña nueva para que el visitante pueda recorrer las pantallas con comodidad.

## Certificados y CV

- Los seis PDFs originales están en `public/certificados/` y sus datos se administran en el arreglo `certifications` de `app/page.tsx`.
- El CV actualizado en español está en `public/cv/Santiago_Canu_CV_Full_Stack_ES.pdf`.
- También se incluye su versión editable en `public/cv/Santiago_Canu_CV_Full_Stack_ES.docx`.
- El CV en inglés está en `public/cv/Santiago_Canu_CV_Full_Stack_EN.pdf` y su versión editable en `.docx`.
