-- CreateTable
CREATE TABLE "ChildImmunization" (
    "id" TEXT NOT NULL,
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
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "birthcertificatenumber" TEXT NOT NULL,
    "vaccine" TEXT[],

    CONSTRAINT "ChildImmunization_pkey" PRIMARY KEY ("id")
);
