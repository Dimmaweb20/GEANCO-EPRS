'use client'

import React, { useState, useEffect } from 'react'
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
import { getPatientData } from '@/controllers'


const page = () => {
    const [open, setOpen] = useState(false);
    const [patients, setPatients] = useState([])
    const [singlePatient, setSinglePatient] = useState()
    const TABLE_HEAD = ["Full Name", "Health Institution", "Mobile", "Clinic ID", "Patient Category"];

    const handleGetPatients = async () => {
        const res = await getPatientData();
        setPatients(res.data)
    }

    const handleGetSinglePatient = (id) => {
        console.log(patients.find((e) => e._id == id));
    }

    useEffect(() => {
        handleGetPatients()
    }, [])

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
                                <Typography variant='h5'>Patient Data & Update</Typography>

                                <div className='w-96'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' />
                                </div>
                            </CardHeader>
                            <CardBody className='mt-1'>
                                <table className="w-full min-w-max table-auto text-left overflow-hidden">
                                    <thead>
                                        <tr className='rounded-lg'>
                                            {TABLE_HEAD.map((head, index) => (
                                                <th
                                                    key={index}
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
                                        {patients.map((data, index) => {
                                            const isLast = index === patients.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                            return (
                                                <tr key={index}>
                                                    <td className={classes} onClick={() => handleGetSinglePatient(data?._id)}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal cursor-pointer"

                                                        >
                                                            {data?.firstname} {data?.lastname}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {data?.healthinstitution}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {data?.mobile}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {data?.clinicid}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {data?.patientcategory}
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
                                <p className='bg-gray-100 w-96 p-2'>Patient Id</p>
                                <p className='pr-2'>7504</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>04-Mar-2024</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>Igwe Peace</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>Female</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>07-Aug-2003</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>+2349032993933</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Email</p>
                                <p className='pr-2'>+2349032993933</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>Okpuno, Awka-North, Awka</p>
                            </div>

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page
