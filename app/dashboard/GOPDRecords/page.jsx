'use client'

import React, { useState, useRef, useEffect } from 'react'
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
    Option,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { IoAddCircleOutline, IoCallOutline, IoCreate, IoCreateOutline, IoLocateOutline, IoLocationOutline, IoMenuOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'
import { ClinicProtectedRoutes } from '@/utils/validation';
import { getGopdData, getGopdDataByClinic } from '@/controllers';
import { toast } from 'react-toastify';
import { getStore } from '@/utils/storage';
import moment from 'moment';

const page = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [gopd, setGopd] = useState([])
    const [singleGopd, setSingleGopd] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()

    const TABLE_HEAD = ["Fullname", "Residential Address", "Mobile", "Registration Date"];

    const handleGetGopdrecords = async () => {
        info.current = toast.info("Getting data...")
        const res = await getGopdData();
        // const res = await getGopdDataByClinic(activeClinic?.id);
        setGopd(res.data)
        console.log(res.data);

        toast.dismiss(info.current)
    }

    const handleGetSingleGopd = (id) => {
        const patient = gopd.find((e) => e.id == id)
        setSingleGopd(patient)

        // Open patient modal
        setOpen(true)
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
        handleGetGopdrecords()
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
                                <Typography variant='h5'>GOPD Records</Typography>

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
                                        {gopd ? gopd.filter((user) => (search.toLowerCase().trim() == "" ? gopd : user.Patient.lastname.toLowerCase().includes(search) ||
                                            user.Patient.firstname.toLowerCase().includes(search) ||
                                            user.Patient.middlename.toLowerCase().includes(search) ||
                                            user.Patient.mobile.toLowerCase().includes(search) ||
                                            user.Patient.residentialaddress.toLowerCase().includes(search) ||
                                            user.Patient.recordentrydate.toLowerCase().includes(search))).map((user, index) => (
                                                <tr key={index}>
                                                    <td onClick={() => handleGetSingleGopd(user?.id)} className='p-4 border-b border-blue-gray-50 cursor-pointer'>
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
                                                            {`${user.Patient.residentialaddress}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.Patient.mobile}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {moment(user.recordentrydate).format("MMMM Do, YYYY")}
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
                                <p className='bg-gray-100 w-96 p-2'>Patient Id</p>
                                <p className='pr-2'>{singleGopd?.Patient.id}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>{singleGopd?.Patient?.registrationdate}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>{singleGopd?.Patient?.lastname.firstname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>{singleGopd?.Patient?.gender}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>{singleGopd?.Patient?.dateofbirth}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>{singleGopd?.Patient?.mobile}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Email</p>
                                <p className='pr-2'>{singleGopd?.Patient?.email}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>{singleGopd?.Patient?.residentialaddress}</p>
                            </div>

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page