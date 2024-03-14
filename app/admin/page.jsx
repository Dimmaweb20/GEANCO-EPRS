'use client'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const page = () => {
    return (
        <>
            <main className='w-full h-screen flex items-start'>
                <Sidebar />
                <div className='w-full'>
                    <AdminNavbar />

                    <div className='flex flex-row grid-cols-5 gap-4'>
                        {/* Content goes here */}
                        <Card className="mt-6 ml-6 h-40 w-52 flex-col justify-center items-center bg-red-500">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 7xl font-extrabold text-lg text-white">
                                3000
                                </Typography>
                                <Typography className='justify-center items-center text-white'>
                                Antenatal Patients
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-52 flex-col justify-center items-center bg-purple-500">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 px-11 font-extrabold text-lg text-white ">
                                3847
                                </Typography>
                                <Typography className=' text-white px-16'>
                                GOPD
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-52 flex-col justify-center items-center bg-green-500">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-extrabold text-lg text-white">
                                2
                                </Typography>
                                <Typography className='justify-center items-center text-white'>
                                Laparoscopic  

                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-52 flex-col justify-center items-center bg-orange-500">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-extrabold text-lg text-white">
                                0
                                </Typography>
                                <Typography className='justify-center items-center text-white'>
                                Orthopedic
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-60 flex-col justify-center items-center bg-gray-500">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-extrabold text-lg text-white">
                                0
                                </Typography>
                                <Typography className='justify-center items-center text-white'>
                               Others
                                </Typography>
                            </CardBody>
                            </Card>

                    
                     
                    </div>
                </div>
            </main>
        </>
    )
}

export default page