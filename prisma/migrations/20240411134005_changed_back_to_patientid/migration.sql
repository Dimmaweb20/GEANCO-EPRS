/*
  Warnings:

  - You are about to drop the column `pp` on the `Antenatal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Antenatal" DROP COLUMN "pp",
ADD COLUMN     "patientId" TEXT NOT NULL DEFAULT '';
