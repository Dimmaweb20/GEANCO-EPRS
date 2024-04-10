-- CreateTable
CREATE TABLE "FamilyPlanning" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "allergies" BOOLEAN NOT NULL,
    "allergiescontent" TEXT,
    "pregnancytest" TEXT NOT NULL,
    "sourceofinformation" TEXT NOT NULL,
    "followupcall" BOOLEAN NOT NULL,
    "breastcancer" BOOLEAN NOT NULL,
    "pelvicinlammatorydisease" TEXT NOT NULL,
    "systemiclupuserythematous" TEXT NOT NULL,
    "strokehistory" TEXT NOT NULL,
    "activethrombosis" TEXT NOT NULL,
    "hypertension" TEXT NOT NULL,
    "livercirrhosis" TEXT NOT NULL,
    "livertumor" TEXT NOT NULL,
    "irregularvaginableeding" TEXT NOT NULL,
    "ischemicheartdisease" TEXT NOT NULL,
    "endometrialcancer" TEXT NOT NULL,
    "contraceptivemethod" TEXT NOT NULL,
    "contraceptiveduration" TEXT NOT NULL,
    "contraceptivecurrent" BOOLEAN NOT NULL,
    "contraceptivereason" TEXT NOT NULL,
    "surgicalhistory" TEXT[],
    "temperature" TEXT NOT NULL,
    "pulserate" TEXT NOT NULL,
    "respirationrate" TEXT NOT NULL,
    "bloodpressure" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "hblevel" TEXT NOT NULL,
    "conjunctiva" TEXT NOT NULL,
    "insertiondetails" TEXT[],
    "selectedmethoddetails" TEXT[],
    "singleinsertiondetails" TEXT[],
    "servicecost" INTEGER NOT NULL,
    "actualamountpaid" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FamilyPlanning_pkey" PRIMARY KEY ("id")
);
