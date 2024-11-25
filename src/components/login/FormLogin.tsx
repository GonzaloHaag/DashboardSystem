'use client';

import { loginUser } from "@/actions";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


interface Login {
    email: string;
    password: string;
}
export const FormLogin = () => {

    const { register, formState: { errors,isValid }, handleSubmit } = useForm<Login>();

    const formLoginSubmit = handleSubmit(async (data) => {
        if(isValid) {
            const respuesta = await loginUser( data.email,data.password );
            if(!respuesta.ok) {
                toast.error(respuesta.message,{
                    position:'top-center',
                    duration:2000
                });
                return;
            }
            
            redirect('/dashboard');
        }
    })
    return (
        <form onSubmit={ formLoginSubmit } className="flex flex-col gap-y-4 text-sm">
            <div className="flex flex-col gap-y-1">
                <input
                    type="email"
                    placeholder="Email"
                    required
                    {...register('email', {
                        required: '*Este campo es requerido'
                    })}
                    className="w-full bg-inherit rounded py-2 px-4 border border-slate-300 outline-none focus:border-blue-950 transition-colors duration-300"
                />
                {
                   errors.email && (
                    <span className="text-red-600 text-xs">{errors.email.message}</span>
                   )
                }
            </div>
            <div className="flex flex-col gap-y-1">
                <input
                    type="password"
                    placeholder="Contraseña"
                    required
                    {...register('password', {
                        required: '*Este campo es requerido',
                        minLength: {
                            message: 'Minimo 4 caracteres',
                            value: 4
                        }
                    })}
                    className="w-full bg-inherit rounded py-2 px-4 border border-slate-300 outline-none focus:border-blue-950 transition-colors duration-300"
                />
                {
                    errors.password && (
                        <span className="text-red-600 text-xs">{errors.password.message}</span>
                    )
                }
            </div>
            <button type="submit" className="w-full py-2 bg-blue-950 text-slate-100 rounded hover:bg-blue-950/90 transition-colors duration-200">
                Ingresar
            </button>
        </form>
    )
}
