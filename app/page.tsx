type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  result: string;
  accent: string;
  caseStudyPdf?: string;
  status?: string;
  statusTone?: "active" | "historic" | "neutral";
  highlights?: string[];
};

// Las tarjetas muestran el resumen de cada producto y permiten desplegar el alcance técnico
// sin convertir la grilla principal en bloques de texto demasiado largos.
const projects: Project[] = [
  {
    number: "01",
    title: "E-Beneficios",
    type: "Plataforma de beneficios para empresas y usuarios",
    description:
      "Desarrollé una plataforma que reúne el catálogo público de beneficios y la gestión interna de empresas y administradores. Me encargué del frontend, backend, integraciones y despliegue en producción.",
    technologies: [
      "React + Vite",
      "Node.js + Express",
      "PostgreSQL + Prisma",
      "Redis + BullMQ",
      "Docker + Nginx",
      "Google OAuth",
    ],
    highlights: [
      "Construí el catálogo responsive con búsqueda, categorías, marcas y páginas de detalle, junto con paneles para administradores, empresas y usuarios.",
      "Implementé autenticación local y con Google, roles y permisos para separar los accesos y las acciones de cada perfil.",
      "Desarrollé la gestión de beneficios, empresas, planes y estados de publicación, e integré pagos con Mercado Pago.",
      "Incorporé correos transaccionales para verificación y avisos, además de analítica de impresiones, vistas, clics y beneficios guardados.",
      "Organicé estadísticas, importaciones CSV y newsletters en procesos en segundo plano con Redis y BullMQ.",
      "Configuré el despliegue con Docker y Nginx en dos VPS, separando la aplicación de los workers, e implementé metadata, URLs canónicas y sitemap.",
    ],
    result: "Catálogo y gestión por roles integrados",
    status: "Activo · Producción",
    statusTone: "active",
    accent: "blue",
    caseStudyPdf: "/proyectos/ebeneficios-portfolio.pdf",
  },
  {
    number: "02",
    title: "Flow Sell",
    type: "Automatización de posventa para Mercado Libre",
    description:
      "Desarrollé una aplicación para automatizar tareas repetitivas después de cada venta en Mercado Libre. Construí el panel, el backend y la integración para gestionar publicaciones, consultar ventas y configurar mensajes y seguimientos.",
    technologies: [
      "React",
      "Node.js + Express",
      "MongoDB",
      "Mercado Libre API + OAuth",
      "Redis + BullMQ",
      "Cloudinary",
      "Render",
    ],
    highlights: [
      "Integré el acceso mediante OAuth y la sincronización de publicaciones y ventas, con información y configuración separadas por cuenta.",
      "Construí un dashboard con importe vendido, órdenes, unidades, ticket promedio y rendimiento por producto.",
      "Implementé plantillas reutilizables con imágenes, mensajes inmediatos y seguimientos diferidos configurables por publicación.",
      "Desarrollé campañas de mensajería con selección de audiencias y períodos.",
      "Organicé webhooks y envíos en colas con Redis y BullMQ, incorporando reintentos y controles para evitar procesar eventos duplicados.",
      "Implementé cifrado de tokens, protección de sesiones, CSRF y límites de solicitudes, además de almacenamiento en Cloudinary y despliegue en Render.",
    ],
    result: "+4.000 operaciones automatizadas acumuladas",
    status: "Activo · Producción",
    statusTone: "active",
    accent: "lime",
    caseStudyPdf: "/proyectos/flow-sell-portfolio.pdf",
  },
  {
    number: "03",
    title: "Alfil Digital",
    type: "E-commerce de productos digitales",
    description:
      "Desarrollé una tienda de ebooks e imprimibles, desde el catálogo y el carrito hasta el pago y la entrega automática. El proyecto finalizó su etapa comercial; las métricas corresponden a ese período de actividad.",
    technologies: [
      "React",
      "Node.js + Express",
      "MongoDB",
      "Mercado Pago",
      "PayPal",
      "Webhooks",
    ],
    highlights: [
      "Construí la experiencia responsive de compra con catálogo, búsqueda, filtros, categorías y páginas de producto.",
      "Desarrollé el carrito y el checkout, con Mercado Pago y PayPal para procesar los pagos.",
      "Implementé la confirmación de pagos mediante webhooks y la entrega automática de los productos digitales por email.",
      "Construí herramientas administrativas para gestionar productos, pedidos, usuarios y contenido.",
      "Durante su etapa activa, la tienda superó las 1.000 ventas y registró más de 12.000 visitas. Estas cifras son históricas y no representan actividad actual.",
    ],
    result: "+1.000 ventas durante su etapa activa",
    status: "Finalizado · Métricas históricas",
    statusTone: "historic",
    accent: "orange",
    caseStudyPdf: "/proyectos/Alfil_Digital_Portfolio.pdf",
  },
  {
    number: "04",
    title: "ZetaData",
    type: "Dashboard de indicadores operativos",
    description:
      "Desarrollé un dashboard para consultar indicadores a partir de información distribuida en archivos. Trabajé en la interfaz, el procesamiento de datos y la integración con OpenAI para generar sugerencias operativas.",
    technologies: [
      "React",
      "Node.js",
      "Procesamiento de datos",
      "OpenAI API",
    ],
    highlights: [
      "Construí una interfaz para consultar indicadores y seguir la operación diaria.",
      "Implementé el procesamiento de más de 100 archivos por día para alimentar el dashboard.",
      "Integré la API de OpenAI para generar sugerencias operativas a partir de la información procesada.",
    ],
    result: "+100 archivos procesados por día",
    status: "Caso de producto",
    statusTone: "neutral",
    accent: "purple",
  },
];

const certifications = [
  {
    category: "Carrera",
    title: "Desarrollo Full Stack",
    date: "30 abr. 2024",
    detail: "194 horas · 51 semanas",
    href: "/certificados/carrera-full-stack-santiago-canu.pdf",
  },
  {
    category: "Curso",
    title: "Programación Backend",
    date: "30 abr. 2024",
    detail: "96 horas · 24 semanas",
    href: "/certificados/programacion-backend-santiago-canu.pdf",
  },
  {
    category: "Carrera",
    title: "Desarrollo Frontend React",
    date: "5 sep. 2023",
    detail: "98 horas · 27 semanas",
    href: "/certificados/carrera-frontend-react-santiago-canu.pdf",
  },
  {
    category: "Curso",
    title: "React JS",
    date: "5 sep. 2023",
    detail: "30 horas · 8 semanas",
    href: "/certificados/react-js-santiago-canu.pdf",
  },
  {
    category: "Curso",
    title: "JavaScript",
    date: "8 jul. 2023",
    detail: "32 horas · 9 semanas",
    href: "/certificados/javascript-santiago-canu.pdf",
  },
  {
    category: "Curso",
    title: "Desarrollo Web",
    date: "22 jun. 2023",
    detail: "36 horas · 10 semanas",
    href: "/certificados/desarrollo-web-santiago-canu.pdf",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav shell" aria-label="Principal">
          <a className="wordmark" href="#inicio" aria-label="Ir al inicio">
            <span className="wordmark-mark">S</span>
            <span>Santiago Cañu</span>
          </a>
          <div className="nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#proceso">Enfoque</a>
            <a href="#certificaciones">Formación</a>
            <a href="#cv">CV</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="availability" href="mailto:santisv4@gmail.com">
            <span aria-hidden="true" />Disponible
          </a>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span />Full Stack Developer · Argentina</p>
            <h1>Construyo software web que <em>hace que el negocio avance.</em></h1>
            <p className="hero-lead">
              Conecto productos, automatizaciones e infraestructura para transformar procesos manuales en sistemas que escalan.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Ver proyectos <span aria-hidden="true">↘</span></a>
              <a className="button button-quiet" href="#cv">Descargar CV <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-footnote">
              <div className="avatar-stack" aria-hidden="true"><span>R</span><span>N</span><span>P</span></div>
              <p><strong>4 años</strong> creando productos web reales, de la idea al despliegue.</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Resumen de capacidades técnicas">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="system-card">
              <div className="terminal-head"><span><i /><i /><i /></span><small>product.system</small><b>↗</b></div>
              <div className="terminal-body">
                <p className="code-comment">// diseño, construyo, itero</p>
                <p><span className="code-key">const</span> producto = <span className="code-fn">resolver</span>({'{'}</p>
                <p className="indent">frontend: <span className="code-string">&quot;React&quot;</span>,</p>
                <p className="indent">backend: <span className="code-string">&quot;Node.js&quot;</span>,</p>
                <p className="indent">impacto: <span className="code-string">&quot;medible&quot;</span></p>
                <p>{'}'});</p>
              </div>
              <div className="system-metrics">
                <div><strong>4+</strong><span>años</span></div>
                <div><strong>4k</strong><span>ops. auto.</span></div>
                <div><strong>100+</strong><span>archivos/día</span></div>
              </div>
            </div>
            <div className="floating-tag tag-api">APIs &amp; webhooks</div>
            <div className="floating-tag tag-ship">Deploy · Docker · AWS</div>
          </div>
        </div>
        <div className="tech-tape" aria-label="Tecnologías principales">
          <div>React <b>✦</b> Node.js <b>✦</b> PostgreSQL <b>✦</b> Redis <b>✦</b> Docker <b>✦</b> AWS <b>✦</b> OpenAI API <b>✦</b> React <b>✦</b> Node.js <b>✦</b> PostgreSQL <b>✦</b> Redis <b>✦</b> Docker <b>✦</b> AWS <b>✦</b> OpenAI API <b>✦</b></div>
        </div>
      </section>

      <section className="work section shell" id="proyectos">
        <div className="section-heading">
          <div><p className="eyebrow"><span />Trabajo seleccionado</p><h2>Productos que pasan de la idea a la operación.</h2></div>
          <p>Me gusta trabajar donde el código tiene una consecuencia concreta: menos tareas repetidas, mejor información y una experiencia más fluida.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-top">
                <span>/{project.number}</span>
                {project.status && (
                  <span className={`project-status ${project.statusTone ?? "neutral"}`}>
                    <i aria-hidden="true" />{project.status}
                  </span>
                )}
              </div>
              <div className="project-shape" aria-hidden="true"><i /><i /><i /></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>

              {project.highlights && project.highlights.length > 0 && (
                <details className="project-details">
                  <summary>
                    <span><small>Alcance técnico</small><strong>Ver qué incluye el proyecto</strong></span>
                    <b aria-hidden="true">+</b>
                  </summary>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </details>
              )}

              {project.caseStudyPdf && (
                <a
                  className="project-case-link"
                  href={project.caseStudyPdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir caso visual de ${project.title} en PDF`}
                >
                  <span><small>Recorrido visual</small><strong>Explorar pantallas y funcionalidades</strong></span>
                  <b>PDF ↗</b>
                </a>
              )}
              <div className="project-result"><span>Resultado</span><strong>{project.result}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="proceso">
        <div className="shell approach-grid">
          <div className="approach-intro">
            <p className="eyebrow"><span />Cómo trabajo</p>
            <h2>Antes de escribir código, entiendo qué tiene que cambiar.</h2>
            <p>La tecnología sirve cuando elimina fricción. Por eso, mi punto de partida es el proceso real de las personas que van a usar el producto.</p>
          </div>
          <ol className="process-list">
            <li><span>01</span><div><h3>Entender la operación</h3><p>Identifico el cuello de botella, los datos importantes y qué resultado vale la pena medir.</p></div></li>
            <li><span>02</span><div><h3>Diseñar un sistema claro</h3><p>Defino una solución mantenible: interfaz, API, datos, integraciones y tareas en segundo plano.</p></div></li>
            <li><span>03</span><div><h3>Ponerlo en marcha e iterar</h3><p>Despliego, observo y priorizo mejoras en ciclos breves, organizando el avance con prácticas de Scrum y Kanban.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="certifications section shell" id="certificaciones">
        <div className="section-heading certifications-heading">
          <div><p className="eyebrow"><span />Formación verificable</p><h2>Conocimientos respaldados por seis credenciales.</h2></div>
          <p>Formación completada en Coderhouse. Cada tarjeta abre el certificado original en PDF con la carga horaria y la fecha de emisión.</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <a
              className="certification-card"
              href={certification.href}
              target="_blank"
              rel="noreferrer"
              key={certification.title}
            >
              <div className="certification-top">
                <span>{certification.category}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <h3>{certification.title}</h3>
              <p>{certification.detail}</p>
              <div className="certification-link"><span>{certification.date}</span><strong>Ver PDF ↗</strong></div>
            </a>
          ))}
        </div>
      </section>

      <section className="about section shell">
        <div className="about-card">
          <div className="about-profile"><div className="profile-symbol">SC</div><div><p className="eyebrow"><span />Perfil</p><h2>De Bragado para productos con alcance real.</h2></div></div>
          <p>Trabajo en remoto desde Bragado, Buenos Aires, y también puedo sumarme a equipos híbridos o presenciales en CABA. Me siento especialmente cómodo en productos con integraciones, automatización y desafíos de operación.</p>
          <div className="about-tags"><span>React / Vite</span><span>Node.js / Express</span><span>Prisma / PostgreSQL</span><span>Docker / Nginx</span><span>Mercado Libre OAuth</span><span>OpenAI API</span><span>Scrum / Kanban</span></div>
        </div>
      </section>

      <section className="resume section shell" id="cv">
        <div className="resume-card">
          <div className="resume-copy">
            <p className="eyebrow"><span />Currículum</p>
            <h2>Elegí la versión que necesitás.</h2>
            <p>CV actualizado para posiciones Full Stack, con experiencia en productos web, automatizaciones e integraciones.</p>
            <p className="resume-note">Disponible full-time · Remoto Argentina/LATAM · Híbrido o presencial en CABA</p>
          </div>
          <div className="resume-actions" aria-label="Descargar currículum">
            <a className="resume-download" href="/cv/Santiago_Canu_CV_Full_Stack_ES.pdf" download>
              <span><small>PDF</small><strong>CV en español</strong></span><b aria-hidden="true">↓</b>
            </a>
            <a className="resume-download" href="/cv/Santiago_Canu_CV_Full_Stack_EN.pdf" download>
              <span><small>PDF</small><strong>CV in English</strong></span><b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>
      </section>

      <section className="contact shell" id="contacto">
        <div className="contact-copy"><p className="eyebrow"><span />Contacto</p><h2>¿Tenés un producto o proceso que necesita moverse más rápido?</h2></div>
        <div className="contact-links">
          <a className="contact-email" href="mailto:santisv4@gmail.com">santisv4@gmail.com <span aria-hidden="true">↗</span></a>
          <div><a href="https://www.linkedin.com/in/santiagocanu" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/santic4" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </section>

      <footer className="shell footer"><span>© {new Date().getFullYear()} Santiago Cañu</span><span>Diseñado y construido con intención.</span></footer>
    </main>
  );
}
