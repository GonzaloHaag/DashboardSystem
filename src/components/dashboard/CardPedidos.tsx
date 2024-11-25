import { BsBoxSeam } from "react-icons/bs";
export const CardPedidos = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-y-6 justify-between p-6 rounded shadow-lg min-h-20">
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-slate-900">20</span>
            <BsBoxSeam size={30} fill="#1e40af" />
        </div>
        <h2 className="text-lg text-slate-900">Pedidos Totales</h2>
        <span className="text-lg text-red-500">↘ 0.38%</span>
    </div>
  )
}