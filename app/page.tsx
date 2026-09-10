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
    type: "Plataforma B2B2C de beneficios y promociones",
    description:
      "Plataforma multirol que conecta usuarios, empresas y administradores en un mismo ecosistema: catálogo público, gestión comercial, analítica, comunicaciones, automatizaciones e infraestructura productiva.",
    technologies: [
      "React + Vite",
      "Node + Express",
      "Prisma / PostgreSQL",
      "Redis + BullMQ",
      "Docker + Nginx",
      "Google OAuth",
    ],
    highlights: [
      "Sitio público 100% responsive con búsqueda, categorías, marcas, Flash, destacados, rankings Top y páginas de detalle.",
      "Paneles independientes para Admin, Empresa y Usuario, con autenticación local/Google, roles y permisos.",
      "Gestión de beneficios, empresas, planes, facturación, contenido editorial, estados y publicación.",
      "Tracking y analítica de impresiones, vistas, clicks, guardados y estadísticas agregadas por día.",
      "Emails transaccionales y comunicaciones/newsletters para verificación, onboarding y avisos del sistema.",
      "Workers con Redis + BullMQ para estadísticas, importaciones CSV, newsletters y tareas asíncronas.",
      "SEO técnico con metadata, canonicals, sitemap, robots, estructura de URLs y Google Search Console.",
      "Deploy con Docker Compose + Nginx en dos VPS: aplicación principal y servidor dedicado a workers.",
    ],
    result: "Plataforma activa en producción",
    status: "Activo · Producción",
    statusTone: "active",
    accent: "blue",
    caseStudyPdf: "/proyectos/ebeneficios-portfolio.pdf",
  },
  {
    number: "02",
    title: "Flow Sell",
    type: "SaaS de automatización posventa para Mercado Libre",
    description:
      "SaaS que centraliza publicaciones, ventas, estadísticas y mensajería posventa de Mercado Libre mediante flujos automáticos, plantillas, campañas y procesamiento asíncrono.",
    technologies: [
      "React",
      "Node + Express",
      "MongoDB",
      "Mercado Libre API + OAuth",
      "Redis + BullMQ",
      "Cloudinary",
      "Render",
    ],
    highlights: [
      "OAuth con Mercado Libre y sincronización de publicaciones, ventas y actividad por cuenta.",
      "Dashboard con facturación, órdenes, unidades, ticket promedio, compradores y rendimiento por producto.",
      "Flujos posventa con mensajes inmediatos y seguimientos diferidos configurables por publicación.",
      "Plantillas reutilizables con imágenes y campañas para audiencias y períodos seleccionados.",
      "Colas Redis + BullMQ para webhooks, mensajes programados, tracking, reintentos y trabajos en background.",
      "Webhooks endurecidos con validación, idempotencia y controles para evitar procesamiento duplicado.",
      "Seguridad de sesiones y tokens: cifrado, cookies protegidas, CSRF, Helmet y rate limiting.",
      "Storage en Cloudinary y despliegue productivo con servicios administrados.",
    ],
    result: "+4.000 operaciones automatizadas",
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
      "E-commerce full stack que integró descubrimiento, compra, pago y entrega de ebooks, imprimibles y otros productos digitales dentro de un flujo completamente online.",
    technologies: [
      "React",
      "Node + Express",
      "MongoDB",
      "Mercado Pago",
      "PayPal + Webhooks",
      "Cloudinary",
    ],
    highlights: [
      "Home, catálogo, buscador, filtros, categorías, páginas de producto y recomendaciones relacionadas.",
      "Carrito y checkout con una experiencia responsive orientada a reducir fricción en la compra.",
      "Integraciones con Mercado Pago y PayPal para cobros locales e internacionales.",
      "Webhooks para validar pagos y continuar automáticamente el circuito posterior a la compra.",
      "Entrega automática de productos digitales y comunicaciones asociadas a las operaciones.",
      "Herramientas administrativas para productos, pedidos, usuarios y contenido del e-commerce.",
      "Soporte y contacto por WhatsApp, además de preguntas frecuentes dentro de la experiencia pública.",
      "Diseño 100% responsive y storage de imágenes/archivos en Firebase.",
    ],
    result: "+1.000 ventas al cierre",
    status: "Ciclo finalizado · métricas históricas",
    statusTone: "historic",
    accent: "orange",
    caseStudyPdf: "/proyectos/Alfil_Digital_Portfolio.pdf",
  },
  {
    number: "04",
    title: "ZetaData",
    type: "Dashboard e insights operativos",
    description:
      "KPIs para seguir una operación diaria y convertir información dispersa en señales útiles para decidir más rápido.",
    technologies: ["React", "Node.js", "Procesamiento de datos", "OpenAI API"],
    result: "+100 archivos/día",
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
