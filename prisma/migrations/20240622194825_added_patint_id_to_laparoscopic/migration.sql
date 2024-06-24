-- AlterTable
ALTER TABLE "Laparoscopic" ADD COLUMN     "patientId" TEXT;

-- AddForeignKey
ALTER TABLE "Laparoscopic" ADD CONSTRAINT "Laparoscopic_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
