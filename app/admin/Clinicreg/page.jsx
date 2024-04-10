'use client'



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
      <main className='w-full h-screen flex items-start justify-center'>
        <div className='w-full'>

          {/* Content goes here */}
          <div className='px-2 lg:px-60'>
            <Card className='mt-10 flex flex-wrap'>
              <CardBody className='mt-1 flex flex-wrap'>


                {/* Profile */}
                <div className="w-full lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                  <form className="flex flex-col w-full p-4'">

                  <Image src={'/logo.png'} width={150} height={100} alt='Geanco Logo' />

                    <h1 className='mt-4 font-bold text-lg'>Sign Up</h1>
                    <p className='font-semibold text-sm'>Please fill in the clinic basic data accurately.</p>

                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="name" id="name" placeholder='Full Name' />

                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="job" id="Job" placeholder='Job Title' />


                  <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' name="clinicname" id="clinic  name" placeholder='Clinic Name' />


                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="email" name="email" id="email" placeholder='Email Address' />

                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="number" name="phonenumber" id="phonenumber" placeholder='Phone Number' />

                    <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="address" name="address" id="address" placeholder='Clinic Address' />

                    <Button variant='gradient' type='submit' className='mt-5' color='blue'>Sign Up</Button>

                  </form>
                </div>

                
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div>
                  <Image src={'/Register.png'} width={5000} height={1000} alt='Register' />
                  </div>
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
