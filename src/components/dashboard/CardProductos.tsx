import { SlHandbag } from "react-icons/sl";
export const CardProductos = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-y-6 justify-between p-6 rounded shadow-lg min-h-20">
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-slate-900">2,300</span>
            <SlHandbag size={30} fill="#1e40af" />
        </div>
        <h2 className="text-lg text-slate-900">Productos Totales</h2>
        <span className="text-lg text-green-500">↗ 5.58%</span>
    </div>
  )
}

