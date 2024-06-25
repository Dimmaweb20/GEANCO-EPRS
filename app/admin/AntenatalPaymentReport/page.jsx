'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import { getAntenatalData, getAntenatalDataByClinic } from '@/controllers';
import { toast } from 'react-toastify';
import { formatNum } from '@/utils/format';
import { getStore } from '@/utils/storage';

const Page = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [antenatals, setAntenatals] = useState([])
    const [singleAntenatal, setSingleAntenatal] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()

    const handleGetAntenatal = async () => {
        info.current = toast.info("Getting data...")
        const res = await getAntenatalData();
        // const res = await getAntenatalDataByClinic(activeClinic?.id);
        setAntenatals(res.data)
        console.log(res.data);

        toast.dismiss(info.current)
    }

    const handleGetSingleAntenatal = (id) => {
        const patient = antenatals.find((e) => e.id == id)
        setSingleAntenatal(patient)

        // Open patient modal
        setOpen(true)
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
        handleGetAntenatal()
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
                            <CardHeader className='p-4 flex flex-col lg:flex-row justify-between items-center'>
                                <Typography variant='h5'>Antenatal Payment Report</Typography>

                                <div className='w-full lg:w-96 overflow-hidden'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' />
                                </div>
                            </CardHeader>
                            <CardBody className='mt-1'>
                                <section className='w-full grid lg:grid-cols-3 gap-5'>

                                    {antenatals ? antenatals.filter((user) => (search.toLowerCase().trim() == "" ? antenatals : user.lastname.toLowerCase().includes(search) ||
                                        user.firstname.toLowerCase().includes(search) ||
                                        user.lastname.toLowerCase().includes(search) ||
                                        user.email.toLowerCase().includes(search) ||
                                        user.delivery.toLowerCase().includes(search) ||
                                        user.cyclelength.toLowerCase().includes(search) ||
                                        user.mensesnoofdays.toLowerCase().includes(search) ||
                                        user.gestationalageatbooking.toLowerCase().includes(search) ||
                                        user.lnmp.toLowerCase().includes(search) ||
                                        user.edd.toLowerCase().includes(search) ||
                                        user.labourhb.toLowerCase().includes(search) ||
                                        user.labourweight.toLowerCase().includes(search) ||
                                        user.clinicid.toLowerCase().includes(search) ||
                                        user.gender.toLowerCase().includes(search)) ||
                                        user.mobile.toLowerCase().includes(search) ||
                                        user.id.toLowerCase().includes(search) ||
                                        user.patientcategory.toLowerCase().includes(search) ||
                                        user.dateofbirth.toLowerCase().includes(search) ||
                                        user.residentialaddress.toLowerCase().includes(search)).map((user, index) => (

                                            <div className='w-full bg-gradient-to-br from-white to-gray-100 p-5 rounded-lg text-black shadow ring-1 ring-gray-300 hover:scale-100 hover:shadow-lg duration-700 cursor-pointer' onClick={() => handleGetSingleAntenatal(user.id)}>
                                                <div className="w-full flex justify-between items-center">
                                                    <h2 className='uppercase font-semibold'>{`${user.Patient.firstname} ${user.Patient?.lastname}`}</h2>

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
                                                    <p>{user.Patient?.residentialaddress}</p>
                                                </div>

                                                <div className='flex items-center gap-4 text-gray-800 mt-1 text-sm lg:text-lg'>
                                                    <div className='flex items-center text-sm text-blue-700 hover:text-blue-500 duration-500'>
                                                        <IoCallOutline />
                                                        <a href='tel:+2340292922'>{user.Patient?.mobile}</a>
                                                    </div>
                                                    {/* <p>{activeClinic?.id}</p> */}
                                                    <p><b>₦ {formatNum(user.totalbilled)}</b></p>
                                                    <p><b>₦ {formatNum(user.totalpaid)}</b></p>
                                                </div>
                                            </div>

                                        )) : null}

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
                            Payment History Report
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
                                <p className='pr-2'>{singleAntenatal?.patientId}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.registrationdate}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.lastname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.gender}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.dateofbirth}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.mobile}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Email</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.email}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>{singleAntenatal?.Patient?.residentialaddress}</p>
                            </div>

                        </section>

                        <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem] mb-10 mt-10'>
                               Payments
                            </Typography>

                            <table>
                            <tr className='w-full p-10 border-b border-blue-gray-100 bg-blue-gray-50 gap-5'>
                                
                                <th>Date Paid</th>
                                <th>Service Category</th>
                                <th>Amount Billed</th>
                                <th>Amount Paid</th>
                                <th>Amount To Balance</th>
                            </tr>

                            <tr>
                                <td>21-Oct-2021</td>
                                <td>Drugs</td>
                                <td>₦ 7,000.00</td>
                                <td>₦ 7,000.00</td>
                                <td>₦ 7,000.00</td>
                            </tr>
                        </table>

                        

                        <section className='w-full text-sm mt-10 '>

                        <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem] mb-10'>
                         Billing and Payments Summary
                        </Typography>


                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Billed</p>
                                <p className='pr-2'>₦ 7,000.00</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Paid</p>
                                <p className='pr-2'>₦ 7,000.00</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Outstanding Balance</p>
                                <p className='pr-2'>₦ 7,000.00</p>
                            </div>

                        </section>
                        

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default Page