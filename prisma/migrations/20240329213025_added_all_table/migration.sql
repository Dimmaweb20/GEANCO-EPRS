-- CreateTable
CREATE TABLE "Laparoscopic" (
    "id" TEXT NOT NULL,
    "applicant" TEXT NOT NULL,
    "preopscheck" TEXT[],
    "surgerydate" TIMESTAMP(3) NOT NULL,
    "surgeryoutcome" TEXT NOT NULL,
    "surgicalteam" TEXT NOT NULL,
    "surgerynote" TEXT NOT NULL,
    "postopscare" TEXT[],
    "postvitalsigns" TEXT[],
    "dischargedate" TIMESTAMP(3) NOT NULL,
    "dischargenote" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "pictureone" TEXT NOT NULL,
    "picturetwo" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "Laparoscopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OnlineApplication" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "middlename" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
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
    "applicationstatus" TEXT NOT NULL,
    "doctorsremark" TEXT NOT NULL,

    CONSTRAINT "OnlineApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
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
    "passport" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnlineApplication_email_key" ON "OnlineApplication"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OnlineApplication_alternativeemail_key" ON "OnlineApplication"("alternativeemail");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");
