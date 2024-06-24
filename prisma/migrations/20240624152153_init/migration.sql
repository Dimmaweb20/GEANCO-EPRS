-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "dateofbirth" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "educationlevel" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "denomination" TEXT NOT NULL,
    "photo" TEXT NOT NULL DEFAULT 'null',
    "healthinstitution" TEXT NOT NULL,
    "healthinstitutioninitials" TEXT NOT NULL,
    "clinicid" TEXT,
    "patientcategory" TEXT NOT NULL,
    "maritalstatus" TEXT NOT NULL,
    "residentialaddress" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "postalcode" TEXT NOT NULL,
    "currentstate" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "addressline2" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "stateoforigin" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nokfirstname" TEXT NOT NULL,
    "noklastname" TEXT NOT NULL,
    "nokrelationship" TEXT NOT NULL,
    "nokphone" TEXT NOT NULL,
    "nokaddress" TEXT NOT NULL,
    "hypertension" TEXT NOT NULL,
    "burningsensation" TEXT NOT NULL,
    "heartdisease" TEXT NOT NULL,
    "swelling" TEXT NOT NULL,
    "sicklecellanaemia" TEXT NOT NULL,
    "chroniclowerabdominalpain" TEXT NOT NULL,
    "diabetes" TEXT NOT NULL,
    "painfulurination" TEXT NOT NULL,
    "tuberculosis" TEXT NOT NULL,
    "genitalsores" TEXT NOT NULL,
    "asthma" TEXT NOT NULL,
    "genitalgrowth" TEXT NOT NULL,
    "epilepsy" TEXT NOT NULL,
    "mentaldisorder" TEXT NOT NULL,
    "previoussurgery" TEXT NOT NULL,
    "drughistory" TEXT NOT NULL,
    "others" TEXT NOT NULL,
    "generalnotes" TEXT NOT NULL,
    "postpartum" TEXT NOT NULL,
    "hypertensionf" TEXT NOT NULL,
    "sicklecellanaemiaf" TEXT NOT NULL,
    "asthmaf" TEXT NOT NULL,
    "heartdiseasef" TEXT NOT NULL,
    "diabetesf" TEXT NOT NULL,
    "twinf" TEXT NOT NULL,
    "birthdefects" TEXT NOT NULL,
    "mentaldisorderfh" TEXT NOT NULL,
    "othersfh" TEXT NOT NULL,
    "billsbalance" TEXT[],
    "totalamountbilled" INTEGER NOT NULL,
    "totalamountpaid" INTEGER NOT NULL,
    "balanceamount" INTEGER NOT NULL,
    "recordentrydate" TEXT NOT NULL,
    "registrationdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(3),

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surgery" (
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "clinicid" TEXT,
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
    "surgerytime" TEXT NOT NULL,
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
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Surgery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Antenatal" (
    "id" TEXT NOT NULL,
    "cyclelength" TEXT NOT NULL,
    "mensesnoofdays" TEXT NOT NULL,
    "gestationalageatbooking" TEXT NOT NULL,
    "lnmp" TEXT NOT NULL,
    "edd" TEXT NOT NULL,
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
    "checkindate" TEXT NOT NULL,
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
    "dischargedate" TEXT NOT NULL,
    "noteaboutpatient" TEXT NOT NULL,
    "noteaboutneonate" TEXT NOT NULL,
    "midwifename" TEXT NOT NULL,
    "immunizationprofile" TEXT[],
    "referral" TEXT[],
    "payments" TEXT[],
    "totalbilled" INTEGER NOT NULL,
    "totalpaid" INTEGER NOT NULL,
    "outstandingbalance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "patientId" TEXT,
    "clinicid" TEXT,

    CONSTRAINT "Antenatal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gopd" (
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "clinicid" TEXT,
    "vitalsigns" TEXT[],
    "medicaltest" TEXT[],
    "immunization" TEXT[],
    "referral" TEXT[],
    "payments" TEXT[],
    "totalbilled" INTEGER NOT NULL,
    "totalpaid" INTEGER NOT NULL,
    "outstandingbalance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Gopd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChildImmunization" (
    "id" TEXT NOT NULL,
    "clinicid" TEXT,
    "mothersname" TEXT NOT NULL,
    "fathersname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "hometown" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "residentialaddress" TEXT NOT NULL,
    "localgovernement" TEXT NOT NULL,
    "cardnumber" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "birthcertificatenumber" TEXT NOT NULL,
    "vaccine" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ChildImmunization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyPlanning" (
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "clinicid" TEXT,
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
    "date" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "FamilyPlanning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laparoscopic" (
    "id" TEXT NOT NULL,
    "patientId" TEXT,
    "clinicid" TEXT,
    "preopscheck" TEXT[],
    "surgerydate" TEXT NOT NULL,
    "surgeryoutcome" TEXT NOT NULL,
    "surgicalteam" TEXT NOT NULL,
    "surgerynote" TEXT NOT NULL,
    "postopscare" TEXT[],
    "postvitalsigns" TEXT[],
    "dischargedate" TEXT NOT NULL,
    "dischargenote" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "pictureone" TEXT NOT NULL,
    "picturetwo" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Laparoscopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineApplication" (
    "id" TEXT NOT NULL,
    "clinicid" TEXT,
    "title" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "backupphone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "addressname" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "disease" TEXT NOT NULL,
    "specificdiagnosis" TEXT NOT NULL,
    "othercondition" TEXT NOT NULL,
    "fileuploadone" TEXT NOT NULL,
    "fileuploadtwo" TEXT NOT NULL,
    "fileuploadthree" TEXT NOT NULL,
    "imageone" TEXT NOT NULL,
    "imagetwo" TEXT NOT NULL,
    "imagethree" TEXT NOT NULL,
    "alternativesurname" TEXT NOT NULL,
    "alternativefirstname" TEXT NOT NULL,
    "alternativephone" TEXT NOT NULL,
    "alternativebackupphone" TEXT NOT NULL,
    "alternativeemail" TEXT NOT NULL,
    "alternativeaddress" TEXT NOT NULL,
    "alternativereferralperson" TEXT NOT NULL,
    "applicationstatus" TEXT,
    "doctorsremark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "OnlineApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "clinicid" TEXT,
    "email" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "practicelevel" TEXT NOT NULL,
    "addressstreet" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phonenumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinic" (
    "id" TEXT NOT NULL,
    "clinicname" TEXT NOT NULL,
    "clinicemail" TEXT NOT NULL,
    "clinicphone" TEXT NOT NULL,
    "clinicaddress" TEXT NOT NULL,
    "clinicpassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "jobtitle" TEXT NOT NULL,
    "clinicowner" TEXT NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OnlineApplication_email_key" ON "OnlineApplication"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OnlineApplication_alternativeemail_key" ON "OnlineApplication"("alternativeemail");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_clinicemail_key" ON "Clinic"("clinicemail");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Surgery" ADD CONSTRAINT "Surgery_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Antenatal" ADD CONSTRAINT "Antenatal_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gopd" ADD CONSTRAINT "Gopd_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyPlanning" ADD CONSTRAINT "FamilyPlanning_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laparoscopic" ADD CONSTRAINT "Laparoscopic_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
