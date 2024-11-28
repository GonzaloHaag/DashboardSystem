import { Search } from "@/components";
import { FaDownload, FaUserPlus } from "react-icons/fa6";

export default function ClientesPage() {
  return (
    <section className="w-full flex flex-col gap-y-10">
      <div className="flex items-center justify-between h-10">
        <Search />
        <div className="flex items-center gap-x-6 h-full">
          <button type="button" title="Agregar cliente" className="flex items-center gap-x-2 h-full text-sm bg-blue-800 text-slate-100 px-4 rounded">
            <FaUserPlus size={16} fill="#f1f5f9" />
            <span>Agregar cliente</span>
          </button>
          <button type="button" title="exportar csv" className="flex items-center gap-x-2 h-full text-sm bg-blue-800 text-slate-100 px-4 rounded">
            <FaDownload size={16} fill="#f1f5f9" />
            <span>Exportar CSV</span>
          </button>
        </div>
      </div>
    </section>
  );
}