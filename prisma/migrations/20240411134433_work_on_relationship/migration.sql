-- AlterTable
ALTER TABLE "Antenatal" ALTER COLUMN "patientId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Antenatal" ADD CONSTRAINT "Antenatal_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
