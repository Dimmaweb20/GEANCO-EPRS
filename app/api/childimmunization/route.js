import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const data = await req.json()
        

        const childImmunization = await prisma.childImmunization.create({ data: data })
        return NextResponse.json({ data: childImmunization, message: "Antenatal created!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ data: error });
    }
}


// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        // const { params } = context
        // console.log("PARAMS =:", params);

        const childImmunization = await prisma.childImmunization.findMany();
        return NextResponse.json({ data: childImmunization }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT PATIENT
export async function PUT(req) {
    try {
        const data = await req.json()

        const childImmunization = await prisma.childImmunization.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: antenatal, message: "Child Immunization record updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENT
export async function DELETE(req) {
    try {
        const data = await req.json()

        const findpatient = await prisma.childImmunization.findFirst({ where: { id: data.id } })
        if (findpatient) {
            const childImmunization = await prisma.childImmunization.delete({ where: { id: data.id } })
            return NextResponse.json({ data: childImmunization, message: "Child Immunization Record Deleted" }, { status: 200 })
        } else {
            return NextResponse.json({ data: "Patient with id not found!" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}