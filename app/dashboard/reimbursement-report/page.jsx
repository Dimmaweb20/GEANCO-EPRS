'use client'

import React, { useState } from 'react'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
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
} from "@material-tailwind/react";
import { IoCreate, IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';


const page = () => {
    const [open, setOpen] = useState(false);
    const TABLE_HEAD = ["Registration Date", "Profile Photo", "Health Institution", "Clinic ID", "Patient Category", "Patient Record", ""];

    return (
        <>
            <main className='w-full h-screen flex items-start'>
                <Sidebar />
                <div className='w-full lg:pl-80'>
                    <AdminNavbar />

                    {/* CONtent goes here */}
                    <div className='px-2 lg:px-5'>
                        <Card className='mt-10'>
                            <CardHeader className='p-4 flex justify-between items-center'>
                                <Typography variant='h5'>Reimbursement Report</Typography>

                                <div className='w-96'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' />
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
                                        <tr>
                                            <td onClick={() => setOpen(true)} className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"

                                                >
                                                    11-Mar-2024
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    ''
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    Robin & Estelle & Clarke Family Centre
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    REC
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    REC-044/24
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    Antenatal
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    as="a"
                                                    href="#"
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-medium"
                                                >
                                                    7540
                                                </Typography>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Drawer */}
                    <Drawer open={open} onClose={() => setOpen(false)} className="p-4" placement='right' size={800}>
                        <div className="mb-6 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem]'>
                                Overview
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
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>04-Mar-2024</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Profile Picture</p>
                                <p className='pr-2'></p>
                            </div>


                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Health Institution</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Health Institution Intials</p>
                                <p className='pr-2'>JTL</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Clinic Id</p>
                                <p className='pr-2'>7504</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Patient Category</p>
                                <p className='pr-2'>Antenatal</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Record Id</p>
                                <p className='pr-2'>7504</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Marital Status</p>
                                <p className='pr-2'>Married</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>Igwe Peace</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>07-Aug-2003</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Age</p>
                                <p className='pr-2'>20</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Educational Level</p>
                                <p className='pr-2'>BSc</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Occupation</p>
                                <p className='pr-2'>Teacher</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Religion</p>
                                <p className='pr-2'>Christianity</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Current State</p>
                                <p className='pr-2'>Enugu</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Nationality</p>
                                <p className='pr-2'>Nigeria</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Place of Origin Address</p>
                                <p className='pr-2'>Okpuno, Awka-North, Awka</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>State of Origin</p>
                                <p className='pr-2'>Enugu</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>Female</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>07037318027</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Email</p>
                                <p className='pr-2'>mma@gmail.com</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>NOK Full Name</p>
                                <p className='pr-2'>Igwe Peace</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Relationship With NOK</p>
                                <p className='pr-2'>Mother</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Address</p>
                                <p className='pr-2'>Okpuno, Awka-North, Awka</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>07037318027</p>
                            </div>  

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Hypertension</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Heart Disease</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Sickle cell Anaemia</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Diabetes</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Tuberculosis</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Asthma</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Epilespy</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mental Disorder</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Previous Surgery (if any)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Drug History</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Burning Sensation</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Swelling</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Chronic Lower Abdominal Pain</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Painful Unrination</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Genital Sores</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Genital Limps</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Others</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>General Notes</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Postpartum Haemorrage (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Hypertension (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Birth Defects (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Heart Disease (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Diabetes (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mental Disorder(F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Twin (F)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Others (Please give details)</p>
                                <p className='pr-2'>Negative</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Billed</p>
                                <p className='pr-2'>₦ 100.00</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Paid</p>
                                <p className='pr-2'>₦ 100.00</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Balance Amount to Pay</p>
                                <p className='pr-2'>₦ 100.00</p>
                            </div> 

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Record Entry Date & Time</p>
                                <p className='pr-2'>24-Apr-2024 00:00:00</p>
                            </div> 

                            

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page
