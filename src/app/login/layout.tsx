import { auth } from "@/auth.config";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: "Dashboard | Login",
  description: "Potente sistema de dashboard para la gestión integral de clientes, productos, ventas y más. Organiza y optimiza tu negocio en una plataforma intuitiva y fácil de usar. Con herramientas avanzadas de análisis, seguimiento de métricas en tiempo real y funciones para agregar y administrar clientes, productos, facturación y reportes personalizados, este dashboard es ideal para pequeñas, medianas y grandes empresas que buscan un control total en un solo lugar. Simplifica la toma de decisiones y potencia el crecimiento de tu negocio con nuestro sistema de gestión centralizado",
};

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth();
  if(session?.user) {
    // Si intentar entrar a /login y ya estan registrados, los mando al dashboard 
    redirect('/dashboard');
  }
  return (
    <main className="bg-gray-200 w-full min-h-dvh">
        { children }
    </main>
  );
}
