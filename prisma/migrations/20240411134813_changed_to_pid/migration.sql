/*
  Warnings:

  - Added the required column `pid` to the `Antenatal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Antenatal" DROP CONSTRAINT "Antenatal_patientId_fkey";

-- AlterTable
ALTER TABLE "Antenatal" ADD COLUMN     "pid" TEXT NOT NULL,
ALTER COLUMN "patientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Antenatal" ADD CONSTRAINT "Antenatal_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
