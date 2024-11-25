import { auth } from "@/auth.config";
import { CardClientes, CardPedidos, CardProductos, CardVentas } from "@/components";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <section className="w-full flex flex-col gap-y-6">
      <div className="grid grid-cols-4 gap-8">
        <CardClientes />
        <CardVentas />
        <CardPedidos />
        <CardProductos />
      </div>
    </section>
  );
}