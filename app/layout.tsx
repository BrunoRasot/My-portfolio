import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bruno Ramos | Desarrollo Full Stack',
  icons: { icon: '/favicon.svg' },
  description:
    'Portafolio de Bruno Ramos: Vivelite ERP, TemploGym, USHAS y Finance Pro. Aplicaciones web full stack con React, Next.js, Vue, NestJS y PostgreSQL.',
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
