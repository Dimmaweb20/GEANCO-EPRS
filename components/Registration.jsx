'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardBody,
  Textarea,
  Typography,
  Input,
  Select,
  Option,
  Button
} from "@material-tailwind/react";
import { useCountries } from 'use-react-countries';
import { IoCalendarOutline } from 'react-icons/io5'
import BillsAndPayment from '@/components/BillsAndPayment'

const page = () => {
  const { countries } = useCountries();
  return (
    <>
      <main className='w-full h-screen flex items-start'>
        <Sidebar />
        <div className='w-full lg:pl-80'>
          <AdminNavbar />

          {/* Content goes here */}
          <div className='px-2 lg:px-5'>
            <Card className='mt-10 flex flex-wrap'>
              <CardHeader className='p-4'>
                <Typography variant='h5'>Sign Up</Typography>
                <Typography variant='paragraph'>Please fill in the clinic basic data accurately.</Typography>
              </CardHeader>
              <CardBody className='mt-1 flex flex-wrap'>

                
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div>
                  <Image src={'/signin.png'} width={5000} height={1000} alt='Register' />
                  </div>
                </div>

                {/* Profile */}
                <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                  <Typography variant='h3' color='black' className='mb-3'>Register Here</Typography>
                  <form className="flex flex-col w-full p-4'">

                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="name" id="name" placeholder='Full Name' />

                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="job" id="Job" placeholder='Job Title' />


                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="clinicname" id="clinic  name" placeholder='Clinic Name' />


                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="email" name="email" id="email" placeholder='Email Address' />

                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="number" name="phonenumber" id="phonenumber" placeholder='Phone Number' />

                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="address" name="address" id="address" placeholder='Clinic Address' />

                    <Button variant='gradient' type='submit' className='mt-5' color='blue'>Sign Up</Button>

                  </form>
                </div>

                
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
