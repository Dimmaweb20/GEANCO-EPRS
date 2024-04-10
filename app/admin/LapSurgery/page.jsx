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
  Option
} from "@material-tailwind/react";
import { useCountries } from 'use-react-countries';
import { IoCalendarOutline } from 'react-icons/io5'
import BillsAndPayment from '@/components/BillsAndPayment'
import Vaccine from '@/components/Vaccine'
import Vitalsigns from '@/components/Vitalsigns'
import PostOperationsCare from '@/components/PostOperationsCare'
import PostVitalSigns from '@/components/PostVitalSgns'

const page = () => {
  const { countries } = useCountries();
  return (
    <>
      <main className='w-full h-screen flex items-start'>
        <Sidebar />
        <div className='w-full lg:pl-80'>
          <AdminNavbar />

          {/* CONtent goes here */}
          <div className='px-2 lg:px-5'>
            <Card className='mt-10'>
              <CardHeader className='p-4'>
                <Typography variant='h5'>New Lap. Surgery</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Select label='Select Applicant'>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">

                  <Vitalsigns/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Operation</Typography>
                

                  <Input variant='outlined' label='Date' type='date' />

                  <Select label='Surgery Outcome'>
                    <Option value='Successful'>Successful</Option>
                    <Option value='Complications'>Complications Present</Option>
                    <Option value='Unsuccessful'>Unsuccessful</Option>
                  </Select>

                  <Textarea variant='outlined' label='Surgical Team'></Textarea>

                  <Textarea variant='outlined' label='Remark / Comments'></Textarea>

                  <PostOperationsCare/>

                  <PostVitalSigns/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Discharge</Typography>
                 

                  <Input variant='outlined' label='Date' type='date'/>

                  <Textarea variant='outlined' label='Discharge Note'></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Testmonial</Typography>

                  <Input variant='outlined' label='Picture 1' type='file'/>

                  <Input variant='outlined' label='Picture 2' type='file'/>

                  <Input variant='outlined' label='File Upload' type='file'/>

                  <Input variant='outlined' label='Add Video' type='file'/>

                  <Textarea variant='outlined' label='Message/text'></Textarea>


                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

export default page