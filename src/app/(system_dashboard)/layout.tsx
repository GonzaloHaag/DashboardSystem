import { auth } from "@/auth.config";
import { AsideBar, TopBar } from "@/components";
import { redirect } from "next/navigation";

export default async function DashboardAndSystemLayout({
    children
}: {
    children: React.ReactNode;
}) {

    // Aca protejo toda mi app, si el usuario no tiene session lo mando al login 
    const session = await auth();
    if (!session?.user) {
        redirect('/login');
    }
    return (
        <main className="flex min-h-dvh">
            <AsideBar />
            <div className="flex flex-col w-full">
                <TopBar />
                <div className="px-8 py-4">
                    {children}
                </div>
            </div>
        </main>
    );
}