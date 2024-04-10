import { prisma } from "@/config/prisma"
import { NextResponse } from "next/server"

export async function POST(request) {
    const formdata = await request.json()

    const check = await prisma.product.findUnique({ where: { pname: formdata.pname } })

    if (check) {
        return NextResponse.json("data exists", { status: 409 })
    }

    const product = await prisma.product.create({ data: formdata })
    return NextResponse.json(product, { status: 201 })
}