import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const data = await req.json()
        

        const antenatal = await prisma.antenatal.create({ data: data })
        return NextResponse.json({ data: antenatal, message: "Antenatal created!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ data: error });
    }
}