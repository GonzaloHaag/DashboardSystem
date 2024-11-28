import { PiUsersThree } from "react-icons/pi";
export const CardClientes = () => {
  return (
    <div className="bg-white w-full flex flex-col gap-y-6 justify-between p-6 rounded shadow-lg min-h-20 group hover:bg-blue-800 transition-colors duration-300">
        <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold text-slate-900 group-hover:text-slate-100 transition-colors duration-300">1,200</span>
            <PiUsersThree size={30} className="fill-blue-800 group-hover:fill-slate-100 transition-colors duration-300" />
        </div>
        <h2 className="text-lg text-slate-900 group-hover:text-slate-100 transition-colors duration-300">Clientes Totales</h2>
        <span className="text-lg text-green-500">↗ 2.58%</span>
    </div>
  )
}
