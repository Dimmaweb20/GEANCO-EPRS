import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { clinicid } = context.params

        const gopdrecords = await prisma.gopd.findMany({ where: { clinicid: clinicid }, include: { Patient: true } })
        if (gopdrecords) {
            return NextResponse.json({ data: gopdrecords }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no gopd record available' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}