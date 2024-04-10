-- CreateTable
CREATE TABLE "Surgery" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "applicationstatus" TEXT NOT NULL,
    "preOps" TEXT[],
    "medicaltest" TEXT NOT NULL,
    "xraytextuploadone" TEXT NOT NULL,
    "xraytextuploadtwo" TEXT NOT NULL,
    "xraytextuploadthree" TEXT NOT NULL,
    "xraytextuploadfour" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "complexity" TEXT NOT NULL,
    "implants" TEXT NOT NULL,
    "surgerytime" TIMESTAMP(3) NOT NULL,
    "surgeryoutcome" TEXT NOT NULL,
    "medications" TEXT NOT NULL,
    "reactions" TEXT NOT NULL,
    "surgerysite" TEXT NOT NULL,
    "surgeryteam" TEXT NOT NULL,
    "surgeryremark" TEXT NOT NULL,
    "postoperation" TEXT[],
    "testimonial" TEXT NOT NULL,
    "pictureone" TEXT NOT NULL,
    "picturetwo" TEXT NOT NULL,
    "picturethree" TEXT NOT NULL,
    "picturefour" TEXT NOT NULL,
    "operationvideo" TEXT NOT NULL,
    "otherfileupload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Surgery_pkey" PRIMARY KEY ("id")
);