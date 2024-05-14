import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO REGISTER PATIENT
export async function POST(req) {
    try {
        const data = await req.json()

        const user = await prisma.patient.findUnique({ where: { email: data.email } })
        if (user) {
            return NextResponse.json({ data: "Patient exists" }, { status: 409 })
        }

        const patient = await prisma.patient.create({ data: data })
        return NextResponse.json({ data: patient, message: "Patient registered" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO GET ALL PATIENTS
export async function GET(req, res) {
    try {
        const { pid } = req.query
        console.log("PARAMS =:", pid);

        const patients = await prisma.patient.findMany();
        return NextResponse.json({ data: patients }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO EDIT PATIENT
export async function PUT(req) {
    try {
        const data = await req.json()

        const patient = await prisma.patient.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: patient, message: "Patient updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENT
export async function DELETE(req) {
    try {
        const data = await req.json()

        const findpatient = await prisma.patient.findFirst({ where: { id: data.id } })
        if (findpatient) {
            const patient = await prisma.patient.delete({ where: { id: data.id } })
            return NextResponse.json({ data: patient, message: "Patient deleted" }, { status: 200 })
        } else {
            return NextResponse.json({ data: "Patient with id not found!" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}