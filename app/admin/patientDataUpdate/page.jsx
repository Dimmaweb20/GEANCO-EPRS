'use client'

import React, { useState, useEffect, useRef } from 'react'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import {
    Card, CardHeader, CardBody, Typography, Input, Drawer, IconButton,
} from "@material-tailwind/react";
import { IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';
import { deletePatient, getPatientDataByClinic } from '@/controllers'
import moment from 'moment/moment';
import { toast } from 'react-toastify'
import { getStore } from '@/utils/storage';
import { ClinicProtectedRoutes } from '@/utils/validation';
import { useRouter } from 'next/navigation';


const Page = () => {
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [open, setOpen] = useState(false);
    const [patients, setPatients] = useState([])
    const [singlePatient, setSinglePatient] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()
    const TABLE_HEAD = ["Full Name", "Health Institution", "Mobile", "Clinic ID", "Patient Category"];

    const handleGetPatients = async () => {
        const res = await getPatientDataByClinic(activeClinic?.id);
        setPatients(res.data)
    }

    const handleGetSinglePatient = (id) => {
        const patient = patients.find((e) => e.id == id)
        setSinglePatient(patient)

        // Open patient modal
        setOpen(true)
    }

    const handleDeletePatient = async () => {
        info.current = toast.info("Processing...")
        const data = { id: singlePatient?.id }
        const conf = confirm("Are you sure you want to delete?")

        if (conf) {
            const res = await deletePatient(data)

            if (res.message == "Patient deleted") {
                setOpen(false)
                toast.dismiss(info.current)

                toast.success("Patient deleted successfully")
                handleGetPatients()
            } else {
                toast.error(res.data)
            }
        }
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
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
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' onChange={(e) => setSearch(e.target.value)} />
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
                                        {patients ? patients.filter((user) => (search.toLowerCase().trim() == "" ? patients : user.lastname.toLowerCase().includes(search) ||
                                            user.firstname.toLowerCase().includes(search) ||
                                            user.lastname.toLowerCase().includes(search) ||
                                            user.email.toLowerCase().includes(search) ||
                                            user.healthinstitution.toLowerCase().includes(search) ||
                                            user.clinicid.toLowerCase().includes(search) ||
                                            user.gender.toLowerCase().includes(search)) ||
                                            user.mobile.toLowerCase().includes(search) ||
                                            user.id.toLowerCase().includes(search) ||
                                            user.patientcategory.toLowerCase().includes(search) ||
                                            user.dateofbirth.toLowerCase().includes(search) ||
                                            user.residentialaddress.toLowerCase().includes(search)).map((data, index) => {
                                                const isLast = index === patients.length - 1;
                                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                                return (
                                                    <tr key={index}>
                                                        <td className={classes} onClick={() => handleGetSinglePatient(data?.id)}>
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
                                            }) : null}
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
                                <IoPrintOutline size={20} onClick={() => window.print()} className='cursor-pointer' />
                                <IoCreateOutline size={20} className='cursor-pointer' />
                                <IoTrashOutline size={20} onClick={handleDeletePatient} className='cursor-pointer' />
                            </div>
                        </div>

                        <section className='w-full text-sm mt-10'>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Patient Id</p>
                                <p className='pr-2'>{singlePatient?.id}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>{moment(singlePatient?.recordentrydate).format("MMMM Do, YYYY")}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>{`${singlePatient?.firstname} ${singlePatient?.lastname}`}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>{singlePatient?.gender}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>{moment(singlePatient?.dateofbirth).format("MMMM Do, YYYY")}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>{singlePatient?.mobile}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Email</p>
                                <p className='pr-2'>{singlePatient?.email}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>{singlePatient?.residentialaddress}</p>
                            </div>

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default Page
