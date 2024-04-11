import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO REGISTER PATIENTS
export async function POST(req) {
    try {
        const data = await req.json()

        const user = await prisma.antenatal.count({ where: { patientId: data.patientId  } })
        if (user) {
            return NextResponse.json({ data: "Patients exists" }, { status: 409 })
        }

        const doctor = await prisma.antenatal.create({ data: data })
        return NextResponse.json({ data: antenatal, message: "Patient registered" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { params } = context
        console.log("PARAMS =:", params);

        const doctors = await prisma.antenatal.findMany();
        return NextResponse.json({ data: antenatal }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT DOCTOR
export async function PUT(req) {
    try {
        const data = await req.json()

        const doctor = await prisma.antenatal.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: antenatal, message: "Patients updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENTS
export async function DELETE(req) {
    try {
        const data = await req.json()

        const doctor = await prisma.antenatal.delete({ where: { id: data.id }})
        return NextResponse.json({ data: antenatal, message: "Patients deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}