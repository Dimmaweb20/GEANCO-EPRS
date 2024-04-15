import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const data = await req.json()

        const checkClinic = await prisma.clinic.findUnique({ where: { clinicemail: data.clinicemail } })

        if (checkClinic) {
            return NextResponse.json({ data: "Clinic exists!" }, { status: 409 })
        }

        const clinic = await prisma.clinic.create({ data: data })
        return NextResponse.json({ data: clinic, message: "Clinic created!" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}

export async function GET(req, context) {
    try {
        const { params } = context

        const clinic = await prisma.clinic.findMany();
        return NextResponse.json({ data: clinic }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT CLINICS
export async function PUT(req) {
    try {
        const data = await req.json()

        const clinic = await prisma.clinic.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: clinic, message: "Clinic updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE CLINICS
export async function DELETE(req) {
    try {
        const data = await req.json()

        const clinic = await prisma.clinic.delete({ where: { id: data.id }})
        return NextResponse.json({ data: clinic, message: "Doctor deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}