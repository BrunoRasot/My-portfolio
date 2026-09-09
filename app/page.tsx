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
          <a href="#proyectos">Proyectos</a>
          <a href="#enfoque">Enfoque</a>
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
