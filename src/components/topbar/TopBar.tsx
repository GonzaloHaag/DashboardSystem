import Image from "next/image";
import { FaAngleDown, FaRegBell } from "react-icons/fa";
export const TopBar = () => {
    return (
        <header className="min-h-20 flex items-center justify-between px-10 border-b border-b-slate-200">
            <h1 className="font-medium text-2xl">Dashboard</h1>
            <div className="flex items-center gap-x-6">
                <FaRegBell size={25} fill="#1e3a8a" />
                <div className="flex items-center gap-x-2">
                    <Image src={'/user.webp'} width={35} height={35} alt="user image" className="rounded-full aspect-square" />
                    <div className="flex items-center gap-x-1">
                        <span className="text-sm text-slate-800">Sofia Peralta</span>
                        <FaAngleDown />
                    </div>
                </div>
            </div>
        </header>
    )
}
