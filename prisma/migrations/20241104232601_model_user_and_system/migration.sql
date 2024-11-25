-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Superadmin', 'Admin', 'User');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'Admin',
    "emailVerified" BOOLEAN,
    "image" TEXT,
    "sistemaId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sistema" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logoImage" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Sistema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_sistemaId_fkey" FOREIGN KEY ("sistemaId") REFERENCES "Sistema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
