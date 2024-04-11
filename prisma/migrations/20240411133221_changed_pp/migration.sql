/*
  Warnings:

  - You are about to drop the column `patientId` on the `Antenatal` table. All the data in the column will be lost.
  - Added the required column `pp` to the `Antenatal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Antenatal" DROP COLUMN "patientId",
ADD COLUMN     "pp" TEXT NOT NULL;
