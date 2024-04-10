-- CreateTable
CREATE TABLE "Gopd" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "vitalsigns" TEXT[],
    "medicaltest" TEXT[],
    "immunization" TEXT[],
    "referral" TEXT[],
    "payments" TEXT[],
    "totalbilled" INTEGER NOT NULL,
    "totalpaid" INTEGER NOT NULL,
    "outstandingbalance" INTEGER NOT NULL,

    CONSTRAINT "Gopd_pkey" PRIMARY KEY ("id")
);
