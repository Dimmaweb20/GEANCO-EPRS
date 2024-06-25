'use client'

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
} from '@material-tailwind/react'
import React, { useState } from 'react'
import { IoCreateOutline, IoPrintOutline, IoTrashOutline } from 'react-icons/io5'

const Page = () => {
    const [open, setOpen] = useState(false);
    const TABLE_HEAD = ["Full Name", "Health Institution", "Mobile", "Clinic ID", "Patient Category", "", ""];

    const TABLE_ROWS = [
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
        {
            name: "John Michael",
            healthInstitution: "John Terry",
            mobile: "0908288282",
            clinicId: "JTL-0862",
            patientCategory: "Antenatal",
            date: "15-03-2024"
        },
    ];

    return (
        <>
            <main className='w-full'>
                <Sidebar />
                <div className='w-full lg:pl-80'>
                    <AdminNavbar />

                    {/* Content goes here */}
                    <div className='px-2 lg:px-5 mt-5'>
                        <Select label='Select to view' size='sm' color='blue'>
                            <Option value='Select' disabled>Select</Option>
                            <Option value='Antenatal'>Antenatal</Option>
                            <Option value='General Outpatient Department'>General Outpatient Department</Option>
                            <Option value='Godwin Onyema Maternity Centre'>Godwin Onyema Maternity Centre</Option>
                        </Select>

                        <Card className='mt-10'>
                            <CardHeader className='p-4 flex justify-between items-center h-auto'>
                                <Typography variant='h5'>Registration by clinic</Typography>

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
                                        {TABLE_ROWS.map(({ name, healthInstitution, mobile, clinicId, patientCategory, date }, index) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                            return (
                                                <tr key={name}>
                                                    <td className={classes} onClick={() => setOpen(true)}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {name}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {healthInstitution}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {mobile}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {clinicId}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {patientCategory}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {date}
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
                                            );
                                        })}
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
                                <p className='bg-gray-50 w-96 p-2'>Hypertension (F)</p>
                                <p className='pr-2'>{singlePatient?.hypertension}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Sickle cell anaemia (F)</p>
                                <p className='pr-2'>{singlePatient?.sicklecellanaemia}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Asthma(f)</p>
                                <p className='pr-2'>{singlePatient?.asthma}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Heart Disease (F)</p>
                                <p className='pr-2'>{singlePatient?.heartdiseasef}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Diabetes (F)</p>
                                <p className='pr-2'>{singlePatient?.diabetesf}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Twin (f)</p>
                                <p className='pr-2'>{singlePatient?.twinf}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Birth Defects (F)</p>
                                <p className='pr-2'>{singlePatient?.birthdefects}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Mental Disorder</p>
                                <p className='pr-2'>{singlePatient?.mentaldisorder}</p>
                            </div>
                            
                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Total Amount Billed</p>
                                <p className='pr-2'>{singlePatient?.totalamountbilled}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Total Amount Paid	</p>
                                <p className='pr-2'>{singlePatient?.totalamountpaid}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Balance Amount to Pay</p>
                                <p className='pr-2'>{singlePatient?.balanceamount}</p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Record Entry Date & Time</p>
                                <p className='pr-2'>{singlePatient?.recordentrydate}</p>
                            </div>

                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default Page