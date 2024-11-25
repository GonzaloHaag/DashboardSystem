-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_sistemaId_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "sistemaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_sistemaId_fkey" FOREIGN KEY ("sistemaId") REFERENCES "Sistema"("id") ON DELETE SET NULL ON UPDATE CASCADE;
