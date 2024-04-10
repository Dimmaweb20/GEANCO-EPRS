import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO REGISTER DOCTOR
export async function POST(req) {
    try {
        const data = await req.json()

        const user = await prisma.doctor.findUnique({ where: { email: data.email } })
        if (user) {
            return NextResponse.json({ data: "Doctor exists" }, { status: 409 })
        }

        const doctor = await prisma.doctor.create({ data: data })
        return NextResponse.json({ data: doctor, message: "Doctor registered" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO GET ALL DOCTORS
export async function GET(req, context) {
    try {
        const { params } = context
        console.log("PARAMS =:", params);

        const doctors = await prisma.doctor.findMany();
        return NextResponse.json({ data: doctors }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT DOCTOR
export async function PUT(req) {
    try {
        const data = await req.json()

        const doctor = await prisma.doctor.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: doctor, message: "Doctor updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE DOCTOR
export async function DELETE(req) {
    try {
        const data = await req.json()

        const doctor = await prisma.doctor.delete({ where: { id: data.id }})
        return NextResponse.json({ data: doctor, message: "Doctor deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}