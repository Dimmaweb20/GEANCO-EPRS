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
    Option,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { IoAddCircleOutline, IoCallOutline, IoCreate, IoCreateOutline, IoLocateOutline, IoLocationOutline, IoMenuOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const TABLE_HEAD = ["Delivery Date/Time", "Issues During Pregnancy", "Mode of Delivery", "Delivery Outcome", "Sex of Baby", "Weight at Birth(Kg)", "Labour/Postpartum Complications"];
    
    return (
        <>
            <main className='w-full h-screen flex items-start'>
                <Sidebar />
                <div className='w-full lg:pl-80'>
                    <AdminNavbar />

                    {/* CONtent goes here */}
                    <div className='px-2 lg:px-5'>
                        <Card className='mt-10'>
                            <CardHeader className='p-4 flex flex-col lg:flex-row justify-between items-center'>
                                <Typography variant='h5'>Antenatal Datasheet</Typography>

                                <div className='w-full lg:w-96 overflow-hidden'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' />
                                </div>
                            </CardHeader>
                            <CardBody className='mt-1'>
                                <section className='w-full grid lg:grid-cols-3 gap-5'>

                                    <div className='w-full bg-gradient-to-br from-white to-gray-100 p-5 rounded-lg text-black shadow ring-1 ring-gray-300 hover:scale-100 hover:shadow-lg duration-700 cursor-pointer' onClick={() => setOpen(true)}>
                                        <div className="w-full flex justify-between items-center">
                                            <h2 className='uppercase font-semibold'>Mrs. Mohammed  Mariam M.M</h2>

                                            <Menu>
                                                <MenuHandler>
                                                    <IconButton variant='text' className='rounded-full ease-in-out duration-700'>
                                                    <IoMenuOutline size={25} />
                                                    </IconButton>
                                                </MenuHandler>
                                                <MenuList>
                                                    <MenuItem className='flex items-center'><IoCreateOutline size={23} /> Edit</MenuItem>
                                                    <MenuItem className='flex items-center'><IoTrashOutline size={23} /> Delete</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>

                                        <div className='flex items-center mt-3 text-gray-700'>
                                            <IoLocationOutline />
                                            <p>Nchatancha, Enugu, 400213</p>
                                        </div>

                                        <div className='flex items-center gap-4 text-gray-800 mt-1 text-sm lg:text-lg'>
                                            <div className='flex items-center text-sm text-blue-700 hover:text-blue-500 duration-500'>
                                                <IoCallOutline />
                                                <a href='tel:+2340292922'>+2340292922</a>
                                            </div>
                                            <p>GOM-1002</p>
                                            <p><b>₦ 3000.00</b></p>
                                        </div>
                                    </div>

                                </section>

                                <Button onClick={() => router.push('/admin/patientReg')} variant='gradient' color='blue' className='flex items-center gap-2 rounded-full mt-5 float-right'>
                                    <IoAddCircleOutline size={25} />
                                    Add
                                </Button>
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
                                <p className='bg-gray-100 w-96 p-2'>Select Patient Id</p>
                                <p className='pr-2'>7504</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>LNMP</p>
                                <p className='pr-2'>04-Mar-2024</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>EDD</p>
                                <p className='pr-2'>Igwe Peace</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gestational Age at Booking</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Weight(kg)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Height (cm)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Tempreature(c)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>HB</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Blood Pressure (mmHg)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Pulse Rate (beats/min)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Abdominal Examination</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Pelvic Examination</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>HIV Status</p>
                                <p className='pr-2'>Negative</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Past Pregnancy Data</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Progress Record - Routine Examination</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Progress Record - Vaccination, Medical Tests & Treatment</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date/Time of Check-In</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Tempreature(c)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Blood Pressure (mmHg)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Pulse Rate (beats/min)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>HB</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Labour Progress</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Delivery</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Tempreature(c)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Blood Pressure (mmHg)</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'></p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>HB</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Drug Notes</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date/Time of Discharge</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Note about Patient</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Note about Neonate</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Name of Midwife</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>:::IMMUNIZATION - Profile, Vaccine & Drug Notes:::</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>:::Referral:::</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>APGAR Scores</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Cycle Length (Days)</p>
                                <p className='pr-2'>28 days</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Menses No of Days</p>
                                <p className='pr-2'>4 Days</p>
                            </div>

                            <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem]'>
                            Past Pregnancy Data
                            </Typography>

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
                                                    14-Feb-2020 12:10
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    nill
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    Spontaneous Vaginal Delivery (SVD)
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
                                                    Alive
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    Male
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
                                                    4.5
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
                                                    tab vitamin c 1dly 
                                                    tab folic acid 1dly 
                                                    tab fesolate 1dly 
                                                    tab multivitemin 1dly 
                                                    tab calcium 1dly 
                                                    tab paracetamol 2bd
                                                </Typography>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page