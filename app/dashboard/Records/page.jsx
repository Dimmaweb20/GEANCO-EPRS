'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import { getLaparoscopicData, getLaparoscopicDataByClinic } from '@/controllers'
import { getStore } from '@/utils/storage'
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
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import { IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

const Page = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
    const [record, setRecord] = useState([])
    const [singleRecord, setSingleRecord] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()
    
    const TABLE_HEAD = ["Select Applicant", "Date of Birth", "Gender", "Disease of", "Other Condition Details", "Application Status", "Phone No"];

    const handleGetRecords = async () => {
        info.current = toast.info("Getting data...")
        const res = await getLaparoscopicData();
        // const res = await getLaparoscopicDataByClinic(activeClinic?.id);
        setRecord(res.data)

        toast.dismiss(info.current)
    }

    const handleGetSingleRecord = (id) => {
        const patient = record.find((e) => e.id == id)
        setSingleRecord(patient)

        // Open patient modal
        setOpen(true)
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
        handleGetRecords()
    }, [])

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
                                <Typography variant='h5'>Records</Typography>

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
                                        {record ? record.filter((user) => (search.toLowerCase().trim() == "" ? record : user.Patient.lastname.toLowerCase().includes(search) ||
                                            user.Patient.firstname.toLowerCase().includes(search) ||
                                            user.Patient.middlename.toLowerCase().includes(search) ||
                                            user.Patient.mobile.toLowerCase().includes(search) ||
                                            user.Patient.residentialaddress.toLowerCase().includes(search) ||
                                            user.Patient.recordentrydate.toLowerCase().includes(search))).map((user, index) => (
                                                <tr key={index}>
                                                    <td onClick={() => handleGetSingleRecord(user?.id)} className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {`${user.Patient.firstname} ${user.Patient.lastname}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${moment(user.dateofbirth).format("MMMM Do, YYYY")}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.Patient.gender}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`Disease of:`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`Other condition Details:`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`Application Status`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            Phone Number
                                                        </Typography>
                                                    </td>

                                                </tr>

                                            )) : null}

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
                                <p className='bg-gray-50 w-96 p-2'>Date & Time of Surgery</p>
                                <p className='pr-2'>{singleRecord?.surgerydate}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Surgery Outcome</p>
                                <p className='pr-2'>{singleRecord?.surgeryoutcome}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Surgical Team</p>
                                <p className='pr-2'>{singleRecord?.surgicalteam}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Message/Text</p>
                                <p className='pr-2'>{singleRecord?.message}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Picture 1</p>
                                <p className='pr-2'>{singleRecord?.pictureone}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Picture 2</p>
                                <p className='pr-2'>{singleRecord?.picturetwo}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Add Video</p>
                                <p className='pr-2'>{singleRecord?.video}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Pre-Ops Check [Vital Signs and Tests]</p>
                                <p className='pr-2'>{singleRecord?.preopscheck}</p>
                            </div>
                            
                           
                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default Page