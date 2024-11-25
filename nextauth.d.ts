import NextAuth, { DefaultSession } from "next-auth";
declare module 'next-auth' {
    interface Session {
        user: {
            id:string;
            email: string;
            username: string;
            createdAt: Date;
            role: string;
            emailVerified?: boolean;
            image?: string;
            sistemaId?: number;
        } & DefaultSession['user'];
    }
}