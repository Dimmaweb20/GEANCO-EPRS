'use client'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import {
    Card,
    CardHeader,
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

                    <div className='lg:grid lg:grid-cols-4 gap-4 px-5'>
                        {/* Content goes here */}
                        <Card className="w-full mt-10">
                            <CardHeader
                                variant="gradient"
                                color="red"
                                className="mb-4 grid h-16 place-items-center"
                            >
                                <Typography variant="h3" color="white">
                                    Antenatal Patients
                                </Typography>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant='h1' className='text-center'>3098</Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Typography variant='small'>Antenatal Patients</Typography>
                            </CardFooter>
                        </Card>

                        <Card className="w-full mt-10">
                            <CardHeader
                                variant="gradient"
                                color="purple"
                                className="mb-4 grid h-16 place-items-center"
                            >
                                <Typography variant="h3" color="white">
                                    GOPD
                                </Typography>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant='h1' className='text-center'>3847</Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Typography variant='small'>GOPD</Typography>
                            </CardFooter>
                        </Card>

                        <Card className="w-full mt-10">
                            <CardHeader
                                variant="gradient"
                                color="green"
                                className="mb-4 grid h-16 place-items-center"
                            >
                                <Typography variant="h3" color="white">
                                Laparoscopic
                                </Typography>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant='h1' className='text-center'>2</Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Typography variant='small'>Laparoscopic</Typography>
                            </CardFooter>
                        </Card>

                        <Card className="w-full mt-10">
                            <CardHeader
                                variant="gradient"
                                color="orange"
                                className="mb-4 grid h-16 place-items-center"
                            >
                                <Typography variant="h3" color="white">
                                Orthopedic
                                </Typography>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant='h1' className='text-center'>0</Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Typography variant='small'>Orthopedic</Typography>
                            </CardFooter>
                        </Card>
                        
                        <Card className="w-full mt-10 col-span-4">
                            <CardHeader
                                variant="gradient"
                                color="gray"
                                className="mb-4 grid h-16 place-items-center"
                            >
                                <Typography variant="h3" color="white">
                                Others
                                </Typography>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-4">
                                <Typography variant='h1' className='text-center'>0</Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Typography variant='small'>Others</Typography>
                            </CardFooter>
                        </Card>

                    </div>
                </div>
            </main>
        </>
    )
}

export default page