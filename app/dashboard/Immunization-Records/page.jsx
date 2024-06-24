'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import { ClinicProtectedRoutes } from '@/utils/validation'
import {
    Card,
    CardHeader,
    CardBody,
    Textarea,
    Typography,
    Input,
    Drawer,
    IconButton,
    Button,
    Select,
    Option
} from '@material-tailwind/react'
import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5'

const page = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("")
    const info = useRef()
    const TABLE_HEAD = ["Child Name", "Date of Birth", "Card no", "Gender", "Birth Certificate no", "", ""];

    const TABLE_ROWS = [
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
        {
            childname: "John Michael",
            dateofbirth: "John Terry",
            cardno: "0908288282",
            gender: "JTL-0862",
            birthcertificateno: "Antenatal"
        },
    ];


    return (
        <>
            <main className='w-full'>
                <Sidebar />
                <div className='w-full lg:pl-80'>
                    <AdminNavbar />

                    {/* Content goes here */}
                    <div className='px-2 lg:px-5 mt-5'>

                        <Card className='mt-10'>
                            <CardHeader className='p-4 flex justify-between items-center h-auto'>
                                <Typography variant='h5'>Immunization Records</Typography>

                                <div className='w-96 h-auto'>

                                </div>
                            </CardHeader>
                            <CardBody className='mt-1'>
                                <table className="w-full min-w-max table-auto text-left overflow-hidden">
                                    <thead>
                                        <tr className='rounded-lg'>
                                            {TABLE_HEAD.map((head) => (
                                                <th
                                                    key={head}
                                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        {head}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TABLE_ROWS.map(({ childname, dateofbirth, cardno, gender, birthcertificateno }, index) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                            return (
                                                <tr key={childname}>
                                                    <td className={classes} onClick={() => setOpen(true)}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {childname}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {dateofbirth}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {cardno}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {gender}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {birthcertificateno}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            as="a"
                                                            href="#"
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-medium"
                                                        >
                                                            Edit
                                                        </Typography>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Drawer */}
                    <Drawer open={open} onClose={() => setOpen(false)} className="p-4" placement='right' size={800}>
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem]'>
                                Immunization Records
                            </Typography>
                            <div className='flex items-center gap-2'>
                                <IconButton variant="text" color="blue-gray" onClick={() => setOpen(false)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </IconButton>
                                <IoPrintOutline size={20} />
                                <IoCreateOutline size={20} />
                                <IoTrashOutline size={20} />
                            </div>
                        </div>

                        <section className='w-full text-sm mt-10'>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Mother's Name</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Father's Name</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Phone No</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Home Town</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Local Govt.</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>State of Origin</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Vaccine/Drug Notes</p>
                                <p className='pr-2'></p>
                            </div>
                            
                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Card No</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Child Name</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Date of Birth</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Weight at Birth (Kg)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Birth Cert. Number</p>
                                <p className='pr-2'></p>
                            </div>


                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page