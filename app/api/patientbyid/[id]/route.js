import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { id } = context.params;

        const patients = await prisma.patient.findMany({ where: { id } })
        if (patients) {
            return NextResponse.json({ data: patients }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no patient' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}