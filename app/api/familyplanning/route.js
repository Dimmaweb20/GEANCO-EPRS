import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const data = await req.json()
        

        const familyPlanning = await prisma.familyPlanning.create({ data: data })
        return NextResponse.json({ data: familyPlanning, message: "Family Planning created!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ data: error });
    }
}


// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        // const { params } = context
        // console.log("PARAMS =:", params);

        const familyPlanning = await prisma.familyPlanning.findMany();
        return NextResponse.json({ data: familyPlanning }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT PATIENT
export async function PUT(req) {
    try {
        const data = await req.json()

        const familyPlanning = await prisma.familyPlanning.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: familyPlanning, message: "Family Planning record updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENT
export async function DELETE(req) {
    try {
        const data = await req.json()

        const findpatient = await prisma.familyPlanning.findFirst({ where: { id: data.id } })
        if (findpatient) {
            const familyPlanning = await prisma.familyPlanning.delete({ where: { id: data.id } })
            return NextResponse.json({ data: familyPlanning, message: "Family Planning Record Deleted" }, { status: 200 })
        } else {
            return NextResponse.json({ data: "Patient with id not found!" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}