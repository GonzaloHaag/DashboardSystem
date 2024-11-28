import { auth } from "@/auth.config";
import { CardClientes, CardPedidos, CardProductos, CardVentas, GraficoClientes, GraficoPedidos, GraficoVentas } from "@/components";

export default async function DashboardPage() {
  const session = await auth();
  return (
    <section className="w-full flex flex-col gap-y-10">
      <div className="grid grid-cols-4 gap-8">
        <CardClientes />
        <CardVentas />
        <CardPedidos />
        <CardProductos />
      </div>
      <div className="flex flex-col gap-y-2">
        <section className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-y-3 w-full">
            <h2 className="text-lg text-center text-slate-900">Ventas</h2>
            <GraficoVentas />
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <h2 className="text-lg text-center text-slate-900">Pedidos</h2>
            <GraficoPedidos />
          </div>
        </section>
      </div>
    </section>
  );
}