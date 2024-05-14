import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

// API TO GET ALL PATIENTS
export async function GET(req, context) {
    try {
        const { clinicid } = context.params

        const antenatals = await prisma.antenatal.findMany({ where: { clinicid: clinicid } })
        if (antenatals) {
            return NextResponse.json({ data: antenatals }, { status: 200 })
        } 
        return NextResponse.json({ data: 'no antenal' }, { status: 404 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}