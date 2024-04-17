import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const data = await req.json()

        const admin = await prisma.admin.findUnique({ where: { email: data.email } })
        if (admin) {
            return NextResponse.json({ data: "User exists!" }, { status: 409 })
        }

        const createAdmin = await prisma.admin.create({ data: data })
        return NextResponse.json({ data: createAdmin }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}

export async function GET(req, res) {
    try {
        const admins = await prisma.admin.findMany()
        return NextResponse.json({ data: admins }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error }, { status: 500 })
    }
}

export async function PUT(req) {
    try {
        const data = await req.json()

        const admin = await prisma.admin.update({ where: { id: data.id }, data: data })
        return NextResponse.json({ data: admin, message: "Admin record updated" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}

// API TO DELETE PATIENT
export async function DELETE(req) {
    try {
        const data = await req.json()

        const admin = await prisma.admin.findFirst({ where: { id: data.id } })
        if (admin) {
            const deleteAdmin = await prisma.admin.delete({ where: { id: data.id } })
            return NextResponse.json({ data: deleteAdmin, message: "Admin Record Deleted" }, { status: 200 })
        } else {
            return NextResponse.json({ data: "Admin with id not found!" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json({ data: error.message }, { status: 500 })
    }
}
