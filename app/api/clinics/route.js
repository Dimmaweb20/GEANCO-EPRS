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