/*
  Warnings:

  - Made the column `emailVerified` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "emailVerified" SET NOT NULL,
ALTER COLUMN "emailVerified" SET DEFAULT false;
