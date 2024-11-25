import { auth } from "@/auth.config"
import Image from "next/image";
import { redirect } from "next/navigation";
import { NavLinks } from "./NavLinks";

export const AsideBar = async () => {

  const session = await auth();
  if(!session?.user) {
    redirect('/login')
  }
  
  return (
    <aside className="w-60 min-h-dvh bg-white flex flex-col px-8 shadow-sm shadow-slate-300">
        <div className="flex gap-x-2 items-center justify-center min-h-20 border-b border-b-slate-200">
            <Image src={'/logo-pocho.webp'} alt="logo pocho mates" width={45} height={45} className="aspect-square rounded-full"/>
            <span className="font-semibold text-sm">Elpochomates</span>
        </div>
        <NavLinks />
    </aside>
  )
}
