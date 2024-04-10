/*
  Warnings:

  - A unique constraint covering the columns `[clinicemail]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clinic_clinicemail_key" ON "Clinic"("clinicemail");
