'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoChatbubblesOutline, IoGridOutline, IoSettingsOutline } from "react-icons/io5";
import { LuClipboardList, LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { PiMoneyWavy } from "react-icons/pi";


const navLinksArray = [
    {
        id: 1,
        path: '/dashboard',
        icon: <LuLayoutDashboard size={25} />,
        title: 'Dashboard'
    },
    {
        id: 2,
        path: '/clientes',
        icon: <GoPeople size={25} />,
        title: 'Clientes'
    },
    {
        id: 3,
        path: '/categorias',
        icon: <MdOutlineCategory size={25} />,
        title: 'Categorías'
    },
    {
        id: 4,
        path: '/productos',
        icon: <IoGridOutline size={25} />,
        title: 'Productos'
    },
    {
        id: 5,
        path: '/pedidos',
        icon: <LuClipboardList size={25} />,
        title: 'Pedidos'
    },
    {
        id: 6,
        path: '/ventas',
        icon: <PiMoneyWavy size={25} />,
        title: 'Ventas'
    }
];
export const NavLinks = () => {

    const pathname = usePathname();

    console.log(pathname);
    return (
        <div className="flex flex-col h-full mt-4">
            <nav>
                <ul className="flex flex-col gap-y-6">
                    {
                        navLinksArray.map((navLink) => (
                            <Link
                                key={navLink.id}
                                href={navLink.path}
                                title={navLink.title}
                                className={`flex items-center gap-x-2 rounded p-2 text-base transition-colors duration-300 ${pathname === navLink.path ? 'bg-blue-800 text-slate-100 hover:bg-blue-600' : 'bg-inherit hover:bg-gray-200'}`}
                            >
                                {navLink.icon}
                                <span>{navLink.title}</span>
                            </Link>
                        ))
                    }
                </ul>
                <hr className="my-6" />
                <div className="flex flex-col gap-y-4">
                    <span className="text-sm text-slate-400">Configuraciones</span>
                    <Link href={'/ajustes'} title="Ajustes" className={`flex items-center gap-x-2 rounded p-2 text-base hover:bg-gray-200 transition-colors duration-300 ${pathname === 'ajustes' ? 'bg-blue-800 text-slate-100 hover:bg-blue-600' : 'bg-inherit hover:bg-gray-200'}`}>
                        <IoSettingsOutline size={25} />
                        <span>Ajustes</span>
                    </Link>
                    <Link href={'/ayuda'} title="Ajustes" className={`flex items-center gap-x-2 rounded p-2 text-base hover:bg-gray-200 transition-colors duration-300 ${pathname === 'ayuda' ? 'bg-blue-800 text-slate-100 hover:bg-blue-600' : 'bg-inherit hover:bg-gray-200'}`}>
                        <IoChatbubblesOutline size={25} />
                        <span>Ayuda - IA</span>
                    </Link>
                </div>
            </nav>
        </div>



    )
}
