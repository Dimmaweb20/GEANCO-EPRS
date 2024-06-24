import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { clinicid } = context.params

        const applicants = await prisma.onlineApplication.findMany({ where: { clinicid: clinicid } })
        if (applicants) {
            return NextResponse.json({ data: applicants }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no applicant available' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}