import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Dumbbell,
  Wallet,
  Layers,
  Database,
  ShieldCheck,
} from 'lucide-react';
const github = 'https://github.com/BrunoRasot';
const skills = [
  {
    title: 'Frontend',
    description:
      'Interfaces, navegación, formularios y visualización de información.',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Vite',
      'React Router',
      'TanStack Query',
      'React Hook Form',
      'Axios',
      'Recharts',
      'Radix UI',
    ],
  },
  {
    title: 'Backend',
    description: 'APIs REST y lógica para operaciones de negocio.',
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'Zod',
      'class-validator',
      'class-transformer',
      'RxJS',
      'Multer',
      'node-cron',
      'Winston',
    ],
  },
  {
    title: 'Bases de datos',
    description: 'Modelado relacional, consultas, migraciones y persistencia.',
    items: [
      'PostgreSQL',
      'SQL',
      'Prisma ORM',
      'Prisma Migrate',
      'node-postgres',
      'Supabase',
    ],
  },
  {
    title: 'Autenticación y seguridad',
    description: 'Sesiones, permisos y protección de APIs.',
    items: [
      'Supabase Auth',
      'JWT',
      'JOSE',
      'bcryptjs',
      'Helmet',
      'CORS',
      'Rate limiting',
      'OTP',
      'Roles y permisos',
    ],
  },
  {
    title: 'Pruebas y calidad',
    description: 'Validación del comportamiento y calidad del código.',
    items: [
      'Vitest',
      'Jest',
      'Testing Library',
      'Supertest',
      'jsdom',
      'ESLint',
      'Oxlint',
      'Prettier',
      'Cobertura de pruebas',
    ],
  },
  {
    title: 'Herramientas y despliegue',
    description: 'Control de versiones, entornos y automatización.',
    items: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Caddy',
      'pnpm',
      'npm',
      'Monorepos',
    ],
  },
];
const projects = [
  {
    number: '01',
    title: 'TemploGym',
    category: 'GESTIÓN DE NEGOCIOS',
    icon: Dumbbell,
    color: 'gym',
    repo: 'Sistema-de-Gimnasio',
    lead: 'La operación de un gimnasio, conectada en un solo sistema.',
    detail:
      'Una aplicación web que integra clientes, membresías, inventario, ventas, caja y asistencias. Su API REST conecta la operación con datos trazables y permisos por módulo.',
    features: [
      'Membresías y control de asistencias',
      'Punto de venta, caja y cuentas por cobrar',
      'Inventario con kardex auditable',
      'Roles, permisos y reportes operativos',
    ],
    stack: ['React 19', 'TypeScript', 'Express 5', 'PostgreSQL', 'Prisma'],
    front: 'React · Vite',
    back: 'Express · REST API',
    auth: 'JWT · OTP por correo',
    status: 'Aplicación web implementada',
  },
  {
    number: '02',
    title: 'Finance Pro',
    category: 'FINANZAS PERSONALES',
    icon: Wallet,
    color: 'finance',
    repo: 'Finance-pro',
    lead: 'Más claridad sobre el dinero. Desde cada movimiento.',
    detail:
      'Una aplicación de finanzas personales con cuentas, ingresos, gastos y saldos por usuario. Organizada como monorepo, con una web Next.js y una API NestJS.',
    features: [
      'Cuentas, ingresos y gastos',
      'Historial con filtros y saldos calculados',
      'Resumen mensual por moneda y categoría',
      'Autenticación y aislamiento por usuario',
    ],
    stack: ['Next.js', 'TypeScript', 'NestJS', 'Supabase Auth', 'Prisma'],
    front: 'Next.js · Web',
    back: 'NestJS · REST API',
    auth: 'Supabase Auth · JWT',
    status: 'Web en desarrollo · móvil pendiente',
  },
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header className="header wrap">
        <a className="brand" href="#inicio" aria-label="Bruno Ramos, inicio">
          br<span>.</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a
            className="github-nav"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
      <main id="contenido">
        <section id="inicio" className="hero wrap">
          <div className="eyebrow">
            <span className="dot" /> BRUNO RAMOS{' '}
            <span className="divider">/</span> DESARROLLO FULL STACK
          </div>
          <h1>
            Ideas claras.
            <br />
            Sistemas que
            <br />
            <span>las hacen realidad.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Desarrollo aplicaciones web que conectan interfaces, lógica de
              negocio y datos. Estos son mis proyectos de gestión y finanzas.
            </p>
            <a className="primary-link" href="#proyectos">
              Explorar proyectos <ArrowDown size={18} />
            </a>
          </div>
          <div className="hero-footer">
            <span>React / Next.js / Node.js / PostgreSQL</span>
            <span>PORTAFOLIO — 2026</span>
          </div>
        </section>
        <section
          id="sobre-mi"
          className="about wrap"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="eyebrow">SOBRE MÍ</p>
            <h2 id="about-title">
              Soy Bruno Ramos.
              <br />
              <span>Construyo de principio a fin.</span>
            </h2>
            <p className="full-name">Italo Bruno Ramos Sotomayor</p>
          </div>
          <div className="about-copy">
            <p className="about-intro">
              Soy desarrollador full stack, enfocado en crear aplicaciones web
              que resuelvan necesidades concretas de gestión y organización.
            </p>
            <p>
              Trabajo tanto en la experiencia de usuario como en la lógica del
              servidor y el diseño de bases de datos. Con React, Next.js,
              Node.js y PostgreSQL, conecto esas piezas para convertir procesos
              de negocio en herramientas prácticas.
            </p>
            <p>
              En TemploGym desarrollo flujos de membresías, ventas, inventario y
              control de acceso. En Finance Pro trabajo con cuentas, movimientos
              y resúmenes financieros, cuidando que cada usuario acceda
              únicamente a su información.
            </p>
            <p>
              Mi forma de trabajar combina código tipado, validación de datos,
              pruebas y control de versiones. Me interesa que una aplicación sea
              clara para quien la usa y mantenible para quien continúa su
              desarrollo.
            </p>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conoce mi trabajo en GitHub <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section
          id="tecnologias"
          className="skills-section wrap"
          aria-labelledby="skills-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECNOLOGÍAS Y HERRAMIENTAS</p>
              <h2 id="skills-title">Mi stack, de extremo a extremo.</h2>
            </div>
          </div>
          <p className="skills-intro">
            Las tecnologías con las que trabajo en mis proyectos, desde la
            interfaz hasta la base de datos y el despliegue.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <article className="skill-group" key={skill.title}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="tools-note">
            <span>También en mis proyectos</span>
            <p>
              Generación de reportes y documentos con ExcelJS, jsPDF y jsPDF
              AutoTable; códigos QR con qrcode y html5-qrcode; manejo de fechas
              con date-fns.
            </p>
          </div>
        </section>
        <section id="proyectos" className="projects-section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">DEL CÓDIGO AL PRODUCTO</p>
                <h2>
                  Proyectos seleccionados<span> (02)</span>
                </h2>
              </div>
              <span className="section-note">
                Dos problemas reales.
                <br />
                Dos formas de resolverlos.
              </span>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article className={`project ${p.color}`} key={p.title}>
                  <div className="project-visual">
                    <div className="visual-top">
                      <span>
                        <p.icon size={21} />
                        {p.title}
                      </span>
                      <span className="number">{p.number} /</span>
                    </div>
                    <div
                      className="architecture"
                      aria-label={`Arquitectura de ${p.title}`}
                    >
                      <div className="arch-label">INTERFAZ</div>
                      <div className="arch-node">
                        <Layers size={18} />
                        {p.front}
                        <span>01</span>
                      </div>
                      <div className="connector" />
                      <div className="arch-label">LÓGICA DE NEGOCIO</div>
                      <div className="arch-node">
                        <ShieldCheck size={18} />
                        {p.back}
                        <span>02</span>
                      </div>
                      <div className="connector" />
                      <div className="arch-label">PERSISTENCIA</div>
                      <div className="arch-node">
                        <Database size={18} />
                        PostgreSQL · Prisma<span>03</span>
                      </div>
                    </div>
                    <div className="visual-bottom">
                      <span>ARQUITECTURA DEL PROYECTO</span>
                      <span>{p.auth}</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <p className="eyebrow">{p.category}</p>
                    <h3>{p.title}</h3>
                    <p className="project-lead">{p.lead}</p>
                    <p className="project-detail">{p.detail}</p>
                    <ul className="features">
                      {p.features.map((f) => (
                        <li key={f}>
                          <span>↗</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="tags">
                      {p.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-end">
                      <span className="status">{p.status}</span>
                      <a
                        href={`${github}/${p.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código de ${p.title} en GitHub`}
                      >
                        Ver código <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="enfoque" className="approach wrap">
          <div>
            <p className="eyebrow">MI ENFOQUE</p>
            <h2>
              Una interfaz es
              <br />
              solo el comienzo.
            </h2>
            <p>
              Me interesa cómo funciona el sistema completo: lo que una persona
              ve, las reglas que sostienen cada operación y la información que
              queda registrada.
            </p>
          </div>
          <div className="approach-list">
            <div>
              <span>01</span>
              <section>
                <h3>Interfaces con propósito</h3>
                <p>
                  React, Next.js y TypeScript para organizar flujos de gestión,
                  cuentas y movimientos.
                </p>
              </section>
            </div>
            <div>
              <span>02</span>
              <section>
                <h3>Reglas de negocio explícitas</h3>
                <p>
                  APIs con Express y NestJS, validación de datos y control de
                  acceso.
                </p>
              </section>
            </div>
            <div>
              <span>03</span>
              <section>
                <h3>Datos que sostienen el producto</h3>
                <p>
                  PostgreSQL y Prisma para modelar relaciones, registrar
                  operaciones y consultar información.
                </p>
              </section>
            </div>
          </div>
        </section>
        <section className="closing wrap">
          <p className="eyebrow">EL TRABAJO CONTINÚA</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Más allá de esta página.
            <br />
            <span>Encuéntrame en GitHub.</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </section>
      </main>
      <footer className="footer wrap">
        <span>© 2026 Bruno Ramos</span>
        <span>Diseño, lógica y datos.</span>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Code2 size={16} /> BrunoRasot <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
