-- CreateTable
CREATE TABLE "Clinic" (
    "id" TEXT NOT NULL,
    "clinicname" TEXT NOT NULL,
    "clinicemail" TEXT NOT NULL,
    "clinicphone" TEXT NOT NULL,
    "clinicaddress" TEXT NOT NULL,
    "clinicpassword" TEXT NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);
