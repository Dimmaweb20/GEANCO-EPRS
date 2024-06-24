-- AlterTable
ALTER TABLE "ChildImmunization" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "FamilyPlanning" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "Gopd" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "Laparoscopic" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "OnlineApplication" ADD COLUMN     "clinicid" TEXT;

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "clinicid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Surgery" ADD COLUMN     "clinicid" TEXT;
