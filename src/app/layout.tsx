import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Potente sistema de dashboard para la gestión integral de clientes, productos, ventas y más. Organiza y optimiza tu negocio en una plataforma intuitiva y fácil de usar. Con herramientas avanzadas de análisis, seguimiento de métricas en tiempo real y funciones para agregar y administrar clientes, productos, facturación y reportes personalizados, este dashboard es ideal para pequeñas, medianas y grandes empresas que buscan un control total en un solo lugar. Simplifica la toma de decisiones y potencia el crecimiento de tu negocio con nuestro sistema de gestión centralizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} antialiased bg-slate-100`}
      >
        { children }
        <Toaster />
      </body>
    </html>
  );
}
