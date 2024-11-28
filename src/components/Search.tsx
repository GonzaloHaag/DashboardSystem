import { IoMdSearch } from "react-icons/io"

export const Search = () => {
    return (
        <div className="w-full max-w-md min-w-[200px] h-full">
            <form className="relative w-full h-full">
                <input type="search" placeholder="Buscar cliente..." className="w-full h-full pl-3 pr-8 border border-slate-200 rounded outline-none transition-colors duration-300 focus:border-blue-800" />
                <IoMdSearch size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 fill-slate-400"/>
            </form>
        </div>
    )
}
