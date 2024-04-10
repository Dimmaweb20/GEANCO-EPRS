-- CreateTable
CREATE TABLE "Antenatal" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "cyclelength" TEXT NOT NULL,
    "mensesnoofdays" TEXT NOT NULL,
    "gestationalageatbooking" TEXT NOT NULL,
    "lnmp" TIMESTAMP(3) NOT NULL,
    "edd" TIMESTAMP(3) NOT NULL,
    "gravida" TEXT NOT NULL,
    "para" TEXT NOT NULL,
    "spontaneousabortion" TEXT NOT NULL,
    "inducedabortion" TEXT NOT NULL,
    "othernotes" TEXT NOT NULL,
    "firstvisitweight" TEXT NOT NULL,
    "firstvisitheight" TEXT NOT NULL,
    "firstvisitbloodpressure" TEXT NOT NULL,
    "firstvisittemperature" TEXT NOT NULL,
    "firstvisitpulserate" TEXT NOT NULL,
    "firstvisitabdominalexam" TEXT NOT NULL,
    "firstvisitpelvicexam" TEXT NOT NULL,
    "firstvisithivstatus" TEXT NOT NULL,
    "firstvisithepatitisb" TEXT NOT NULL,
    "hepatitisc" TEXT NOT NULL,
    "pastpregnacydata" TEXT[],
    "progressrecordRoutine" TEXT[],
    "progressrecordVaccination" TEXT[],
    "checkindate" TIMESTAMP(3) NOT NULL,
    "labourtemperature" TEXT NOT NULL,
    "labourbloodpressure" TEXT NOT NULL,
    "labourweight" TEXT NOT NULL,
    "labourpulserate" TEXT NOT NULL,
    "labourhb" TEXT NOT NULL,
    "labourproggress" TEXT[],
    "delivery" TEXT[],
    "apgarscores" TEXT[],
    "postdeliverytemperature" TEXT NOT NULL,
    "postdeliverybloodpressure" TEXT NOT NULL,
    "postdeliveryweight" TEXT NOT NULL,
    "postdeliverypulserate" TEXT NOT NULL,
    "postdeliveryhb" TEXT NOT NULL,
    "postdeliverydrugnotes" TEXT NOT NULL,
    "deliveryoutcome" TEXT NOT NULL,
    "postdeliverygeneralremark" TEXT NOT NULL,
    "dischargedate" TIMESTAMP(3) NOT NULL,
    "noteaboutpatient" TEXT NOT NULL,
    "noteaboutneonate" TEXT NOT NULL,
    "midwifename" TEXT NOT NULL,
    "immunizationprofile" TEXT[],
    "referral" TEXT[],
    "payments" TEXT[],
    "totalbilled" INTEGER NOT NULL,
    "totalpaid" INTEGER NOT NULL,
    "outstandingbalance" INTEGER NOT NULL,

    CONSTRAINT "Antenatal_pkey" PRIMARY KEY ("id")
);