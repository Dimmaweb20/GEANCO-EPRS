'use client'
import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useState, useEffect } from 'react'
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
import { IoPersonAdd } from 'react-icons/io5';
import { getAntenatalData, getGopdData, getLaparoscopicData, getSurgeryData } from '@/controllers';
import Skeleton from '@/components/skeleton';
import { ClinicProtectedRoutes } from '@/utils/validation';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter();
    const [totalNumber, setTotalNumber] = useState()
    const [loading, setLoading] = useState(true)

    const getTotals = async () => {
        const totalAntenatal = await getAntenatalData()
        console.log(totalAntenatal)
        const totalGopd = await getGopdData()
        const totalLaparoscopic = await getLaparoscopicData()
        const totalOrthopaedic = await getSurgeryData()
        

        setTotalNumber({
            "antenatal": totalAntenatal.data.length,
            "gopd": totalGopd.data.length,
            "laparoscopic": totalLaparoscopic.data.length,
            "orthopaedic": totalOrthopaedic.data.length
        })
        setLoading(false)
    }

    useEffect(() => {
        {ClinicProtectedRoutes() ? getTotals() : router.push('/')}
    }, [])
    return (
        <>
            <main className='w-full h-screen flex items-start test'>
                <Sidebar />
                <div className='w-full lg:pl-80'>
                    <AdminNavbar />

                    <div className='grid lg:grid-cols-5 gap-3 mt-6 px-5'>
                        {/* Content goes here */}
                        <Card className="h-36 w-full flex-col justify-center items-center bg-red-500 rounded-md">
                            <CardBody>
                                {loading ?
                                    <Skeleton width={'w-64'} height={'h-10'} color={'red'} /> :
                                    <Typography variant="h1" color="blue-gray" className="7xl font-medium text-4xl text-white justify-center text-center">
                                        {totalNumber?.antenatal}
                                    </Typography>
                                }
                            </CardBody>
                            <div className='bg-red-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                    Antenatal Patients
                                </Typography>
                            </div>
                        </Card>

                        <Card className="h-36 w-full flex-col justify-center items-center bg-purple-400  rounded-md">
                            <CardBody>
                                {loading ?
                                    <Skeleton width={'w-64'} height={'h-10'} color={'purple'} /> :
                                    <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white ">
                                        {totalNumber?.gopd}
                                    </Typography>
                                }
                            </CardBody>
                            <div className='bg-purple-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                    GOPD
                                </Typography>
                            </div>
                        </Card>

                        <Card className="h-36 w-full flex-col justify-center items-center bg-green-400 rounded-md">
                            <CardBody>
                                {loading ?
                                    <Skeleton width={'w-64'} height={'h-10'} color={'green'} /> :
                                    <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white ">
                                        {totalNumber?.laparoscopic}
                                    </Typography>
                                }

                            </CardBody>
                            <div className='bg-green-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                    Laparoscopic
                                </Typography>
                            </div>
                        </Card>

                        <Card className="h-36 w-full flex-col justify-center items-center bg-orange-400 rounded-md">
                            <CardBody>
                                {loading ?
                                    <Skeleton width={'w-64'} height={'h-10'} color={'orange'} /> :
                                    <Typography variant="h1" color="blue-gray" className="font-medium text-4xl text-white ">
                                        {totalNumber?.orthopaedic}
                                    </Typography>
                                }
                            </CardBody>
                            <div className='bg-orange-600 w-full py-4'>
                                <Typography className='justify-center text-center text-lg text-white'>
                                    Orthopaedic
                                </Typography>
                            </div>
                        </Card>

                        <Card className="h-36 w-full flex-col justify-center items-center bg-gray-400 rounded-md">
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

                    <div className="grid h-96 w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                        <img
                            className="object-cover object-center w-full rounded-lg h-96"
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