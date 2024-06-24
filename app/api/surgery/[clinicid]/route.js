import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { clinicid } = context.params

        const gopd = await prisma.surgery.findMany({ where: { clinicid: clinicid }, include: { Patient: true } })
        if (gopd) {
            return NextResponse.json({ data: gopd }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no gopd record' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}