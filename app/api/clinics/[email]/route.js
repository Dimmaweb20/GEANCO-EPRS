import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function GET(req, context) {
    try {
        const { email } = context.params

        const getClinic = await prisma.clinic.findUnique({ where: { clinicemail: email } })
        if (getClinic) {
            return NextResponse.json({ data: getClinic }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no clinic found' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}