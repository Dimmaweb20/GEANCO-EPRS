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
import { getChildimmunizationDataByClinic } from '@/controllers'
import { getStore } from '@/utils/storage';
import moment from 'moment'

const Page = () => {
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic'))
    const [open, setOpen] = useState(false);
    const [immunization, setImmunization] = useState([])
    const [singleImmunization, setSingleImmunization] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()
    const TABLE_HEAD = ["Child Name", "Date of Birth", "Card no", "Gender", "Birth Certificate no", "", ""];

    const handleGetImmunization = async () => {
        const res = await getChildimmunizationDataByClinic(activeClinic?.id);
        setImmunization(res.data)
    }

    const handleGetSingleImmunization = (id) => {
        const patient = immunization.find((e) => e.id == id)
        setSingleImmunization(patient)

        // Open patient modal
        setOpen(true)
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
        handleGetImmunization()
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
                                        {immunization ? immunization.filter((user) => (search.toLowerCase().trim() == "" ? immunization : user.mothersname.toLowerCase().includes(search) ||
                                            user.fathersname.toLowerCase().includes(search) ||
                                            user.phone.toLowerCase().includes(search) ||
                                            user.hometown.toLowerCase().includes(search) ||
                                            user.residentialaddress.toLowerCase().includes(search) ||
                                            user.localgovernement.toLowerCase().includes(search) ||
                                            user.cardnumber.toLowerCase().includes(search) ||
                                            user.origin.toLowerCase().includes(search)) ||
                                            user.firstname.toLowerCase().includes(search) ||
                                            user.lastname.toLowerCase().includes(search) ||
                                            user.gender.toLowerCase().includes(search) ||
                                            user.birthcertificatenumber.toLowerCase().includes(search) ||
                                            user.id.toLowerCase().includes(search)).map((data, index) => {
                                                const isLast = index === patients.length - 1;
                                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                                return (
                                                    <tr key={index}>
                                                        <td className={classes} onClick={() => handleGetSingleImmunization(data?.id)}>
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
                                                                {moment(data.dob).format("MMMM Do, YYYY")}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {data?.cardnumber}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {data?.gender}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {data?.birthcertificatenumber}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {data?.birthcertificatenumber}
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
                                <p className='pr-2'>{singleImmunization?.mothersname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Father's Name</p>
                                <p className='pr-2'>{singleImmunization?.fathersname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Phone No</p>
                                <p className='pr-2'>{singleImmunization?.phone}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Residential Address</p>
                                <p className='pr-2'>{singleImmunization?.residentialaddress}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Home Town</p>
                                <p className='pr-2'>{singleImmunization?.hometown}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Local Govt.</p>
                                <p className='pr-2'>{singleImmunization?.localgovernement}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>State of Origin</p>
                                <p className='pr-2'>{singleImmunization?.origin}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Vaccine/Drug Notes</p>
                                <p className='pr-2'>{singleImmunization?.vaccine}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Card No</p>
                                <p className='pr-2'>{singleImmunization?.cardnumber}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Child Name</p>
                                <p className='pr-2'>{singleImmunization?.firstname.lastname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Date of Birth</p>
                                <p className='pr-2'>{singleImmunization?.dob}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Weight at Birth (Kg)</p>
                                <p className='pr-2'>{singleImmunization?.weight}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Birth Cert. Number</p>
                                <p className='pr-2'>{singleImmunization?.birthcertificatenumber}</p>
                            </div>


                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default Page