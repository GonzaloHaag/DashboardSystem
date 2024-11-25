import { FormLogin } from "@/components";

export default function LoginPage() {
    return (
        <div className="flex justify-center">
            <div className="bg-white w-96 flex flex-col gap-y-4 p-6 rounded mt-10 animate-in slide-in-from-top-full duration-500">
                <div className="flex flex-col gap-y-1 text-center">
                    <h1 className="font-semibold text-gray-700">Bienvenido</h1>
                    <p className="text-sm leading-5">Debe ingresar sus credenciales para poder ingresar al sistema.</p>
                </div>
                <FormLogin />
            </div>
        </div>
    );
}