import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const data = await req.json()

        const onlineapplication = await prisma.clinic.findUnique({ where: { email: data.email } })

        if (onlineapplication) {
            return NextResponse.json({ data: "Application exists!" }, { status: 409 })
        }

        const Application = await prisma.Application.create({ data: data })
        return NextResponse.json({ data: Application, message: "Clinic created!" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        // const { params } = context
        // console.log("PARAMS =:", params);

        const onlineApplication = await prisma.onlineApplication.findMany();
        return NextResponse.json({ data: onlineApplication }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT PATIENT
export async function PUT(req) {
    try {
        const data = await req.json()

        const onlineApplication = await prisma.onlineApplication.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: onlineApplication, message: "Online Application record updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENT
export async function DELETE(req) {
    try {
        const data = await req.json()

        const findpatient = await prisma.onlineApplication.findFirst({ where: { id: data.id } })
        if (findpatient) {
            const onlineApplication = await prisma.onlineApplication.delete({ where: { id: data.id } })
            return NextResponse.json({ data: onlineApplication, message: "online Application Record Deleted" }, { status: 200 })
        } else {
            return NextResponse.json({ data: "Patient with id not found!" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}