'use client'

import React, { useState } from 'react'
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
import { createClinic } from '@/controllers';
import { getStore } from '@/utils/storage';

const Page = () => {
  const [inputs, setInputs] = useState({})
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore

  const handleCreateClinic = async (e) => {
    e.preventDefault();

    const data = { ...inputs, clinicid: activeClinic?.id }
    const res = await createClinic(data)

    console.log(res.message);

    if (res.ok) {
      alert("Clinic created successfully")
    } else {
      alert(res.data)
    }
  }

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
                  <form className="flex flex-col gap-3 w-full p-4'" onSubmit={handleCreateClinic}>

                    <Image src={'/logo.png'} width={150} height={100} alt='Geanco Logo' />

                    <div>
                      <h1 className='mt-4 font-bold text-lg'>Sign Up</h1>
                      <p className='font-semibold text-sm mb-4'>Please fill in the clinic basic data accurately.</p>
                    </div>

                    <Input name='clinicowner' variant='outlined' label='Full Name' type='text' onChange={(e) => inputs.clinicowner = e.target.value} required />

                    <Input name='jobtitle' variant='outlined' label='Job Title' type='text' onChange={(e) => inputs.jobtitle = e.target.value} required />

                    <Input name='clinicname' variant='outlined' label='Clinic Name' type='text' onChange={(e) => inputs.clinicname = e.target.value} required />

                    <Input name='clinicemail' variant='outlined' label='Email Address' type='email' onChange={(e) => inputs.clinicemail = e.target.value} required />

                    <Input name='clinicphone' variant='outlined' label='Phone Number' type='text' onChange={(e) => inputs.clinicphone = e.target.value} required />

                    <Input name='clinicpassword' variant='outlined' label='Enter password' min={6} type='password' onChange={(e) => inputs.clinicpassword = e.target.value} required />

                    <Textarea name='clinicaddress' variant='outlined' label='Clinic Address' onChange={(e) => inputs.clinicaddress = e.target.value}></Textarea>

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

export default Page
