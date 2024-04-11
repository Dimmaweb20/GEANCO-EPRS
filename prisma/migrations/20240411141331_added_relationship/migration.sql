-- AlterTable
ALTER TABLE "FamilyPlanning" ALTER COLUMN "patientId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Gopd" ALTER COLUMN "patientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Gopd" ADD CONSTRAINT "Gopd_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyPlanning" ADD CONSTRAINT "FamilyPlanning_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
