'use client'

import Referral from '@/components/Referral'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import { getOnlineapplicationData, getOnlineapplicationDataByClinic } from '@/controllers'
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
import React, { useEffect, useRef, useState } from 'react'
import { IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

const page = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
    const [applicants, setApplicants] = useState([])
    const [singleApplicants, setSingleApplicants] = useState()
    const [search, setSearch] = useState("")
    const info = useRef()

    const TABLE_HEAD = ["Application Status", "Doctor's Remark", "Specific Diagonsis", "Disease Of", "Patient's Full Name", "Other Condition Details", "Gender", "Age", "Phone No", "File Upload 1", "File Upload 2", "Capture Image 1", "Capture Image 2", "Referral Person/Clinic"];

    const handleGetApplicants = async () => {
        info.current = toast.info("Getting data...")
        const res = await getOnlineapplicationData();
        // const res = await getOnlineapplicationDataByClinic(activeClinic?.id);
        setApplicants(res.data)

        toast.dismiss(info.current)
    }

    const handleGetSingleApplicants = (id) => {
        const patient = applicants.find((e) => e.id == id)
        setSingleApplicants(patient)

        // Open patient modal
        setOpen(true)
    }

    useEffect(() => {
        { ClinicProtectedRoutes() ? null : router.push('/') }
        handleGetApplicants()
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
                                <Typography variant='h5'>Recommended For Scheduling</Typography>

                                <div className='w-[35rem]'>
                                    <Input variant='outlined' size='sm' color='blue' placeholder='search' label='search by: [firstname, lastname, middlename, city, address, town , disease etc]' />
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
                                        {applicants ? applicants.filter((user) => (search.toLowerCase().trim() == "" ? applicants : user.lastname.toLowerCase().includes(search) ||
                                            user.firstname.toLowerCase().includes(search) ||
                                            user.middlename.toLowerCase().includes(search) ||
                                            user.gender.toLowerCase().includes(search) ||
                                            user.city.toLowerCase().includes(search) ||
                                            user.disease.toLowerCase().includes(search) ||
                                            user.specificdiagnosis.toLowerCase().includes(search) ||
                                            user.addressname.toLowerCase().includes(search))).map((user, index) => (
                                                <tr key={index}>
                                                    <td onClick={() => handleGetSingleApplicants(user?.id)} className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.applicationstatus}`}
                                                        </Typography>
                                                    </td>

                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.doctorsremark}`}
                                                        </Typography>
                                                    </td>
                                                    
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.specificdiagnosis}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.disease}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.othercondition}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {`${user.firstname} ${user.lastname}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.age}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.gender}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.phone}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.fileuploadone}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.fileuploadtwo}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.imageone}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.imagetwo}`}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {`${user.alternativereferralperson}`}
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
                                <p className='bg-gray-50 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>{singleApplicants?.Patient?.registrationdate}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Patient's Full Name</p>
                                <p className='pr-2'>{singleApplicants?.firstname.lastname}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Gender</p>
                                <p className='pr-2'>{singleApplicants?.gender}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Date of Birth</p>
                                <p className='pr-2'>{singleApplicants?.dob}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Disease of:</p>
                                <p className='pr-2'>{singleApplicants?.disease}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Other Condition Details</p>
                                <p className='pr-2'>{singleApplicants?.othercondition}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Application Status</p>
                                <p className='pr-2'>{singleApplicants?.applicationstatus}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Doctor's Remark</p>
                                <p className='pr-2'>{singleApplicants?.doctorsremark}</p>
                            </div>


                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page