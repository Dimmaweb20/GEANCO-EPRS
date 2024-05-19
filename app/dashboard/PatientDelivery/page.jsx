'use client'

import React, { useEffect, useState, useRef } from 'react'
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
import { ClinicProtectedRoutes } from '@/utils/validation';
import { getStore } from '@/utils/storage';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { getAntenatalData } from '@/controllers';


const page = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [antenatals, setAntenatals] = useState([])
    const [singleAntenatal, setSingleAntenatal] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()
    const TABLE_HEAD = ["Deliver Site", "Full Name", "Mobile", "Residential Address", "Patient Category", "", ""];

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
                            <CardHeader className='p-4 flex justify-between items-center'>
                                <Typography variant='h5'>Patient Delivery Report</Typography>

                                <div className='w-96'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [name, mobile, institution, clinic id, category]' onChange={(e) => setSearch(e.target.value)} />
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
                                        {antenatals ? antenatals.filter((user) => (search?.toLowerCase().trim() == "" ? antenatals : user.Patient.lastname.toLowerCase().includes(search) ||
                                            user.Patient.firstname.toLowerCase().includes(search) ||
                                            user.Patient.lastname.toLowerCase().includes(search) ||
                                            user.Patient.email.toLowerCase().includes(search) ||
                                            user.delivery.includes(search) ||
                                            user.cyclelength.toLowerCase().includes(search) ||
                                            user.mensesnoofdays.toLowerCase().includes(search) ||
                                            user.gestationalageatbooking.toLowerCase().includes(search) ||
                                            user.lnmp.toLowerCase().includes(search) ||
                                            user.edd.toLowerCase().includes(search) ||
                                            user.labourhb.toLowerCase().includes(search) ||
                                            user.labourweight.toLowerCase().includes(search) ||
                                            user.clinicid.toLowerCase().includes(search) ||
                                            user.Patient.gender.toLowerCase().includes(search)) ||
                                            user.Patient.mobile.includes(search) ||
                                            user.id.toLowerCase().includes(search) ||
                                            user.Patient.patientcategory.toLowerCase().includes(search) ||
                                            user.dateofbirth.toLowerCase().includes(search) ||
                                            user.residentialaddress.toLowerCase().includes(search)).map((user, index) => {

                                                const isLast = index === antenatals.length - 1;
                                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                                return (
                                                <tr key={index}>
                                                    <td className={classes} onClick={() => handleGetSingleAntenatal(user.id)}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {user.delivery}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.Patient.lastname} ${user.Patient.firstname}`}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user.Patient.mobile}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user.Patient.residentialaddress}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user.Patient.patientcategory}
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
                                            )}) : null}
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
                                <p className='bg-gray-100 w-96 p-2'>Health Institution</p>
                                <p className='pr-2'>John & Terry</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>clinic Id</p>
                                <p className='pr-2'>JTL-1234</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>Igwe Peace</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Age</p>
                                <p className='pr-2'>34</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>+2349032993933</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>Okpuno, Awka-North, Awka</p>
                            </div>

                            <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem]'>
                                Delivery Details
                            </Typography>

                            <table>
                                <tr className='w-full p-10 border-b border-blue-gray-100 bg-blue-gray-50 gap-5'>

                                    <th>Delivery Site</th>
                                    <th>Delivery Outcome (Neonatal)</th>
                                    <th>Sex of Baby</th>
                                    <th>Date</th>
                                </tr>

                                <tr>
                                    <td>inbound (internal)</td>
                                    <td>Alive (Viable)</td>
                                    <td>Female</td>
                                    <td>15-Apr-2024</td>
                                </tr>

                                <tr>
                                    <td>inbound (internal)</td>
                                    <td>Alive (Viable)</td>
                                    <td>Female</td>
                                    <td>15-Apr-2024</td>
                                </tr>

                                <tr>
                                    <td>inbound (internal)</td>
                                    <td>Alive (Viable)</td>
                                    <td>Female</td>
                                    <td>15-Apr-2024</td>
                                </tr>

                                <tr>
                                    <td>inbound (internal)</td>
                                    <td>Alive (Viable)</td>
                                    <td>Female</td>
                                    <td>15-Apr-2024</td>
                                </tr>
                            </table>

                            <Typography variant="h5" color="blue-gray" className='border-b-2 border-gray-400 w-[40rem]'>
                                APGAR Scores breakdown
                            </Typography>

                            <table>
                                <tr className='w-full p-10 border-b border-blue-gray-100 bg-blue-gray-50 gap-5'>

                                    <th>Apperance</th>
                                    <th>Pulse</th>
                                    <th>Grimmace</th>
                                    <th>Activity</th>
                                    <th>Respiratory</th>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                </tr>
                            </table>



                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page
