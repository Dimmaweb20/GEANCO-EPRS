'use client'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    ListItemSuffix,
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody
  } from "@material-tailwind/react";
  import {IoAddOutline, IoAppsOutline, IoArrowDown, IoBandage, IoBriefcase, IoCalendarOutline, IoCart, IoCashOutline, IoDocumentTextOutline, IoHome, IoMedkit, IoMedkitOutline, IoPeople, IoPersonAdd, IoPersonAddOutline, IoRefreshOutline, IoRepeatOutline, IoServerOutline, IoThermometer } from 'react-icons/io5';


const page = () => {
    return (
        <>
            <main className='w-full h-screen flex items-start test'>
                <Sidebar />
                <div className='w-full'>
                    <AdminNavbar />

                    <div className='grid grid-cols-5 gap-3'>
                        {/* Content goes here */}
                        <Card className="mt-6 ml-6 h-36 w-56 flex-col justify-center items-center bg-red-500 rounded-md">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="7xl font-medium text-4xl text-white justify-center text-center">
                                3,000
                                </Typography>
                            </CardBody>
                            <div className='bg-red-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                Antenatal Patients
                                </Typography>
                            </div>
                            </Card>

                            <Card className="mt-6 h-36 w-56 flex-col justify-center items-center bg-purple-400  rounded-md">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white ">
                                3,847
                                </Typography>
                            </CardBody>
                            <div className='bg-purple-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                GOPD
                                </Typography>
                            </div>
                            </Card>

                            <Card className="mt-6 h-36 w-56 flex-col justify-center items-center bg-green-400 rounded-md">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white">
                                2
                                </Typography>
                            </CardBody>
                            <div className='bg-green-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                Laparoscopic
                                </Typography>
                            </div>
                            </Card>

                            <Card className="mt-6 h-36 w-56 flex-col justify-center items-center bg-orange-400 rounded-md">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white">
                                0
                                </Typography>
                            </CardBody>
                            <div className='bg-orange-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                Orthopaedic
                                </Typography>
                            </div>
                            </Card>

                            <Card className="mt-6 h-36 w-56 flex-col justify-center items-center bg-gray-400 rounded-md">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white justify-center text-center">
                                0
                                </Typography>
                            </CardBody>
                            <div className='bg-gray-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                Others
                                </Typography>
                            </div>
                        </Card>
                    </div>

                    <div className='grid grid-cols-5 gap-3'>
                        {/* Content goes here */}
                        <Card className="mt-6 ml-6 h-40 w-56 flex-col justify-center items-center bg-white">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 7xl font-bold text-4xl text-red-500 flex">
                                1,733
                                <ListItemSuffix>
                                   <IoPersonAdd size={40} />
                                </ListItemSuffix>
                                </Typography>
                                <Typography className='justify-center text-center text-sm text-black'>
                                Julia Burke Maternity Centre
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-56 flex-col justify-center items-center bg-white">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-bold text-4xl text-purple-500 flex">
                                1,653
                                <ListItemSuffix>
                                   <IoPersonAdd size={40} />
                                </ListItemSuffix>
                                </Typography>
                                <Typography className='justify-center text-center text-sm text-black'>
                                Godwin Onyema Maternity Centre
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-56 flex-col justify-center items-center bg-white">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-bold text-4xl text-red-700 flex">
                                 1,949
                                 <ListItemSuffix>
                                   <IoPersonAdd size={40} />
                                </ListItemSuffix>
                                </Typography>
                                <Typography className='justify-center text-center text-sm text-black'>
                                John & Terry Levin Family Centre
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-56 flex-col justify-center items-center bg-white">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-bold text-4xl text-green-500 flex">
                                471
                                <ListItemSuffix>
                                   <IoPersonAdd size={40} />
                                </ListItemSuffix>
                                </Typography>
                                <Typography className='justify-center text-center text-sm text-black'>
                                Zegar Jackson
                                </Typography>
                            </CardBody>
                            </Card>

                            <Card className="mt-6 h-40 w-56 flex-col justify-center items-center bg-white">
                            <CardBody>
                                <Typography variant="h1" color="blue-gray" className="mb-2 ml-6 font-bold text-4xl text-blue-900 flex">
                                1,578
                                <ListItemSuffix>
                                   <IoPersonAdd size={40} />
                                </ListItemSuffix>
                                </Typography>
                                <Typography className='justify-center text-center text-sm text-black'>
                                 Robin & Estelle & Clarke Family Centre
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>

                    <div className="grid h-96 w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                        <img
                                class="object-cover object-center w-full rounded-lg h-96"
                                src="https://trinityweb.net/wp-content/uploads/2023/04/geanco_app_landing.jpg"
                                alt="GEANCO"
                            />      
                    </div>
                </div>
            </main>
        </>
    )
}

export default page