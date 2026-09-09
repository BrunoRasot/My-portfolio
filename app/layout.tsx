import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bruno Ramos | Desarrollo Full Stack',
  description:
    'Portafolio de Bruno Ramos: TemploGym y Finance Pro, aplicaciones de gestión y finanzas con React, Next.js, Node.js y PostgreSQL.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
