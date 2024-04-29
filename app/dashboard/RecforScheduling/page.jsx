'use client'

import Referral from '@/components/Referral'
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

const page = () => {
    const [open, setOpen] = useState(false);
    const TABLE_HEAD = ["Application Status", "Doctor's Remark", "Specific Diagonsis", "Disease Of","Patient's Full Name","Other Condition Details", "Gender", "Age","Phone No", "File Upload 1", "File Upload 2", "Capture Image 1", "Capture Image 2", "Referral Person/Clinic"];

    const TABLE_ROWS = [
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
            
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
        },
        {
            applicationstatus: "Approved",
            patientname: "John Michael",
            doctorremark: "Approved",
            specificdiagonsis: "Approved",
            diseaseof: "Hernia",
            othercondition: "Infertility",
            gender: "Female",
            age: "17-May-2024",
            Phoneno: "0801234555",
            fileupload1: "",
            fileupload2: "",
            captureimage1:"",
            captureimage2: "",
            referral: "JTL"
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

                        <Card className='mt-10'>
                            <CardHeader className='p-4 flex justify-between items-center h-auto'>
                                <Typography variant='h5'>Recommended For Scheduling</Typography>

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
                                        {TABLE_ROWS.map(({ applicationstatus,patientname, doctorremark, specificdiagonsis, diseaseof, othercondition,gender, age, Phoneno,fileupload1, fileupload2, captureimage1,captureimage2, referral }, index) => {
                                            const isLast = index === TABLE_ROWS.length - 1;
                                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50 cursor-pointer";

                                            return (
                                                <tr key={applicationstatus}>
                                                    <td className={classes} onClick={() => setOpen(true)}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"

                                                        >
                                                            {applicationstatus}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {patientname}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {doctorremark}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {specificdiagonsis}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {diseaseof}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {othercondition}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {gender}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {age}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {Phoneno}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {fileupload1}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {fileupload2}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {captureimage1}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {captureimage2}
                                                        </Typography>
                                                    </td>

                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {referral}
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
                                <p className='bg-gray-50 w-96 p-2'>Registration Datey</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Patient's Full Name</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Gender</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Date of Birth</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Disease of:</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Other Condition Details</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Application Status</p>
                                <p className='pr-2'></p>
                            </div>

                            <div className="flex border-2 justify-between items-center">
                                <p className='bg-gray-50 w-96 p-2'>Doctor's Remark</p>
                                <p className='pr-2'></p>
                            </div>
                            
                           
                        </section>

                    </Drawer>
                </div>
            </main>
        </>
    )
}

export default page