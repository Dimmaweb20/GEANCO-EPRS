'use client'

import React, { useEffect, useState } from 'react'
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
    TABLE_HEAD
} from "@material-tailwind/react";
import { IoAddCircleOutline, IoCallOutline, IoCreate, IoCreateOutline, IoLocateOutline, IoLocationOutline, IoMenuOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation'
import { getStore } from '@/utils/storage';
import { ClinicProtectedRoutes } from '@/utils/validation';
import { getPatientDataByClinic } from '@/controllers';
import moment from 'moment/moment';
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [patients, setPatients] = useState([])
    const [singlePatient, setSinglePatient] = useState()
    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false);

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
                            <CardHeader className='p-4 flex flex-col lg:flex-row justify-between items-center'>
                                <Typography variant='h5'>Patient Payment Report</Typography>

                                <div className='w-full lg:w-96 overflow-hidden'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' />
                                </div>
                            </CardHeader>
                            <CardBody className='mt-1'>
                                <section className='w-full grid lg:grid-cols-3 gap-5'>

                                    { patients ? patients.filter((user) => (search.toLowerCase().trim() == "" ? patients : user.lastname.toLowerCase().includes(search) ||
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
                                        user.residentialaddress.toLowerCase().includes(search)).map((user, index) => (

                                            <div className='w-full bg-gradient-to-br from-white to-gray-100 p-5 rounded-lg text-black shadow ring-1 ring-gray-300 hover:scale-100 hover:shadow-lg duration-700 cursor-pointer' onClick={() => handleGetSinglePatient(user?.id)} key={index}>
                                                <div className="w-full flex justify-between items-center">
                                                    <h2 className='uppercase font-semibold'>{user?.firstname} {user?.lastname}</h2>
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
                                                    <p>{`${user?.residentialaddress}, ${user?.postalcode}`}</p>
                                                </div>

                                                <div className='flex items-center gap-4 text-gray-800 mt-1 text-sm lg:text-lg'>
                                                    <div className='flex items-center text-sm text-blue-700 hover:text-blue-500 duration-500'>
                                                        <IoCallOutline />
                                                        <a href={`tel:${user?.mobile}`}>{ user?.mobile }</a>
                                                    </div>
                                                    <p>{ user?.clinicid.substring(0, 10) }..</p>
                                                    <p><b>₦ { Intl.NumberFormat().format(user?.totalamountbilled) }</b></p>
                                                </div>
                                            </div>
                                        )) : null }


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

                        <Typography variant='h5 mt-30'>Installments Completed</Typography>
                        
                        <table>
                            <tr className='w-full p-10 border-b border-blue-gray-100 bg-blue-gray-50 gap-5'>
                                <th>Date of Visit</th>
                                <th>Amount Paid</th>
                                <th>Service Category</th>
                                <th>Service Description</th>
                            </tr>

                            <tr>
                                <td>24/4/2024</td>
                                <td>2100</td>
                                <td>gchcad</td>
                                <td>data</td>
                            </tr>

                            <tr>
                                <td>24/4/2024</td>
                                <td>2100</td>
                                <td>gchcad</td>
                                <td>data</td>
                            </tr>
                        </table>
                        

                        <section className='w-full text-sm mt-10'>
                        <Typography variant='h5 mt-30'>Patient Payment Report</Typography>


                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Billed</p>
                                <p className='pr-2'>{singlePatient?.totalamountbilled}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Paid</p>
                                <p className='pr-2'>{singlePatient?.totalamountpaid}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Balance Amount to Pay</p>
                                <p className='pr-2'>{singlePatient?.balanceamount}</p>
                            </div>

                        </section>


                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page