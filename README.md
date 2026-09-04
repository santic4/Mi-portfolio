# Portfolio de Santiago Cañu

Portfolio responsive construido con Next.js, React, TypeScript y CSS propio. Incluye proyectos con galería opcional, certificaciones verificables y descargas de CV. No requiere base de datos, variables de entorno ni Tailwind CSS.

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
- `app/ProjectGallery.tsx`: comportamiento de la galería (0, 1 o varias imágenes).
- `app/globals.css`: estilos y comportamiento responsive.
- `app/layout.tsx`: SEO básico, título y descripción.

## Reemplazar las imágenes de demostración

Las imágenes actuales están en `public/images/projects/` y aparecen identificadas como “Vista demo”. Para reemplazarlas:

1. Copiá las capturas reales dentro de `public/images/projects/`.
2. En `app/page.tsx`, buscá el proyecto y cambiá `src`, `alt` y `caption` dentro de `images`.
3. Cambiá `placeholder: true` por `placeholder: false` para ocultar la etiqueta “Vista demo”.

Ejemplo:

```tsx
images: [
  {
    src: "/images/projects/mi-proyecto-dashboard.webp",
    alt: "Dashboard principal de Mi Proyecto",
    caption: "Vista general del panel",
    placeholder: false,
  },
]
```

- Con varias imágenes se muestran navegación, contador y miniaturas.
- Con una sola imagen no aparecen controles innecesarios.
- Con `images: []` —o eliminando la propiedad— la tarjeta conserva su composición y no muestra enlaces ni imágenes rotas.
- Si una ruta falla, la galería descarta esa imagen y mantiene visibles las restantes.

## Certificados y CV

- Los seis PDFs originales están en `public/certificados/` y sus datos se administran en el arreglo `certifications` de `app/page.tsx`.
- El CV actualizado en español está en `public/cv/Santiago_Canu_CV_Full_Stack_ES.pdf`.
- También se incluye su versión editable en `public/cv/Santiago_Canu_CV_Full_Stack_ES.docx`.
