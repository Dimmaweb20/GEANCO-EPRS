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
    Option
} from "@material-tailwind/react";
import { IoCreate, IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5';
import { deletePatient, getPatientDataByClinic } from '@/controllers';
import { ClinicProtectedRoutes } from '@/utils/validation';
import { useRouter } from 'next/navigation';
import { getStore } from '@/utils/storage';
import moment from 'moment';
import { toast } from 'react-toastify';


const page = () => {
    const router = useRouter();
    const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
    const [patients, setPatients] = useState([])
    const [singlePatient, setSinglePatient] = useState()
    const [search, setSearch] = useState("")
    const [open, setOpen] = useState(false);
    const info = useRef()

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
        const data = { id: singlePatient?.id }
        const conf = confirm("Are you sure you want to delete?")

        if (conf) {
            const res = await deletePatient(data)

            if (res.message == "Patient deleted") {
                setOpen(false)
                toast.dismiss(info.current) // import toast

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

    const TABLE_HEAD = ["Registration Date", "Profile Photo", "Health Institution", "Health Institution Initials", "Clinic ID", "Patient Category", "Patient Record", ""];

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
                                <Typography variant='h5'>Reimbursement Report</Typography>

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
                                            user.residentialaddress.toLowerCase().includes(search)).map((user, index) => (
                                                <tr key={index}>
                                                    <td onClick={() => handleGetSinglePatient(user?.id)} className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {moment(user?.registrationdate).format("MMMM Do, YYYY")}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user?.healthinstitution}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user?.healthinstitutioninitials}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                             {user?.clinicid}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user?.patientcategory}
                                                        </Typography>
                                                    </td>
                                                    <td className='p-4 border-b border-blue-gray-50 cursor-pointer'>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user?.id}
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
                    <Drawer open={open} onClose={() => setOpen(false)} className="p-4 overflow-y-auto" placement='right' size={800}>
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
                                <p className='bg-gray-100 w-96 p-2'>Registration Date</p>
                                <p className='pr-2'>{moment(singlePatient?.recordentrydate).format("MMMM Do, YYYY")}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Profile Picture</p>
                                <p className='pr-2'></p>
                            </div>


                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Health Institution</p>
                                <p className='pr-2'>{singlePatient?.healthinstitution}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Health Institution Intials</p>
                                <p className='pr-2'>{singlePatient?.healthinstitutioninitials}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Clinic Id</p>
                                <p className='pr-2'>{singlePatient?.clinicid}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Patient Category</p>
                                <p className='pr-2'>{singlePatient?.patientcategory}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Patient Record ID</p>
                                <p className='pr-2'>{singlePatient?.id}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Marital Status</p>
                                <p className='pr-2'>{singlePatient?.maritalstatus}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Full Name</p>
                                <p className='pr-2'>{`${singlePatient?.firstname} ${singlePatient?.middlename} ${singlePatient?.lastname}`}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Date of birth</p>
                                <p className='pr-2'>{moment(singlePatient?.dateofbirth).format("MMMM Do, YYYY")}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Age</p>
                                <p className='pr-2'>{singlePatient?.age}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Educational Level</p>
                                <p className='pr-2'>{singlePatient?.educationlevel}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Occupation</p>
                                <p className='pr-2'>{singlePatient?.occupation}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Religion</p>
                                <p className='pr-2'>{singlePatient?.religion}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Current State</p>
                                <p className='pr-2'>{singlePatient?.currentstate}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Nationality</p>
                                <p className='pr-2'>{singlePatient?.nationality}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Place of Origin Address</p>
                                <p className='pr-2'>{singlePatient?.residentialaddress}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>State of Origin</p>
                                <p className='pr-2'>{singlePatient?.stateoforigin}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Gender</p>
                                <p className='pr-2'>{singlePatient?.gender}</p>
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
                                <p className='bg-gray-100 w-96 p-2'>NOK Full Name</p>
                                <p className='pr-2'>{`${singlePatient?.nokfirstname} ${singlePatient?.noklastname}`}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Relationship With NOK</p>
                                <p className='pr-2'>{singlePatient?.nokrelationship}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Address</p>
                                <p className='pr-2'>{singlePatient?.nokaddress}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mobile</p>
                                <p className='pr-2'>{singlePatient?.nokphone}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Hypertension</p>
                                <p className='pr-2'>{singlePatient?.hypertension}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Heart Disease</p>
                                <p className='pr-2'>{singlePatient?.heartdisease}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Sickle cell Anaemia</p>
                                <p className='pr-2'>{singlePatient?.sicklecellanaemia}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Diabetes</p>
                                <p className='pr-2'>{singlePatient?.diabetes}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Tuberculosis</p>
                                <p className='pr-2'>{singlePatient?.tuberculosis}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Asthma</p>
                                <p className='pr-2'>{singlePatient?.asthma}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Epilespy</p>
                                <p className='pr-2'>{singlePatient?.epilepsy}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mental Disorder</p>
                                <p className='pr-2'>{singlePatient?.mentaldisorder}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Previous Surgery (if any)</p>
                                <p className='pr-2'>{singlePatient?.previoussurgery}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Drug History</p>
                                <p className='pr-2'>{singlePatient?.drughistory}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Burning Sensation</p>
                                <p className='pr-2'>{singlePatient?.burningsensation}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Swelling</p>
                                <p className='pr-2'>{singlePatient?.swelling}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Chronic Lower Abdominal Pain</p>
                                <p className='pr-2'>{singlePatient?.chroniclowerabdominalpain}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Painful Unrination</p>
                                <p className='pr-2'>{singlePatient?.painfulurination}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Genital Sores</p>
                                <p className='pr-2'>{singlePatient?.genitalsores}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Genital Limps/Growth (Warts)</p>
                                <p className='pr-2'>{singlePatient?.genitalgrowth}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Others</p>
                                <p className='pr-2'>{singlePatient?.others}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>General Notes</p>
                                <p className='pr-2'>{singlePatient?.generalnotes}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Postpartum Haemorrage (F)</p>
                                <p className='pr-2'>{singlePatient?.postpartum}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Hypertension (F)</p>
                                <p className='pr-2'>{singlePatient?.hypertensionf}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Birth Defects (F)</p>
                                <p className='pr-2'>{singlePatient?.birthdefects}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Heart Disease (F)</p>
                                <p className='pr-2'>{singlePatient?.heartdiseasef}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Diabetes (F)</p>
                                <p className='pr-2'>{singlePatient?.diabetesf}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Mental Disorder(F)</p>
                                <p className='pr-2'>{singlePatient?.mentaldisorderfh}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Twin (F)</p>
                                <p className='pr-2'>{singlePatient?.twinf}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Others (Please give details)</p>
                                <p className='pr-2'>{singlePatient?.othersfh}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Billed</p>
                                <p className='pr-2'>₦ {Intl.NumberFormat().format(singlePatient?.totalamountbilled)}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Total Amount Paid</p>
                                <p className='pr-2'>₦ {Intl.NumberFormat().format(singlePatient?.totalamountpaid)}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Balance Amount to Pay</p>
                                <p className='pr-2'>₦ {Intl.NumberFormat().format(singlePatient?.balanceamount)}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-100 w-96 p-2'>Record Entry Date & Time</p>
                                <p className='pr-2'>{moment(singlePatient?.recordentrydate).format("MMMM Do, YYYY, h:mm:ss")}</p>
                            </div>



                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page
