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
  handleAddData,
  handleRemoveData


} from "@material-tailwind/react";
import { useCountries } from 'use-react-countries';
import { IoCalendarOutline } from 'react-icons/io5'
import BillsAndPayment from '@/components/BillsAndPayment'
import Pastpregnancy from '@/components/Pastpregnancy'
import Progressrecord from '@/components/Progressrecord'
import Progressrec from '@/components/Progressrec'
import Labourprogress from '@/components/Labourprogress'
import Delivery from '@/components/Delivery'
import Apgar from '@/components/Apgar'
import Immunization from '@/components/Immunization'
import Referral from '@/components/Referral'
import Payment from '@/components/Payment'
import { Button } from "@material-tailwind/react";
import Vitalsigns from '@/components/Vitalsigns'
import PostOperation from '@/components/PostOperation'



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
                <Typography variant='h5'>Orthopaedic Surgery</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">

                <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Surgery Data</Typography>
                  <Select label='Select Patients' required>
                    <Option>Patient 1</Option>
                    <Option>Patient 2</Option>
                    <Option>Patient 3</Option>
                  </Select>

                  
                  <Select label='Application Status' type='radio'>
                    <Option>Recommended</Option>
                    <Option>Pending</Option>
                    <Option>Decline</Option>
                  </Select>

                  <Vitalsigns/>

                  <Textarea variant='outlined' label='Recommended Medical Test'></Textarea>

                  <Input variant='outlined' label='X-Ray/Test Upload 1' type='file' />

                  <Input variant='outlined' label='X-Ray/Test Upload 2' type='file' />

                  <Input variant='outlined' label='X-Ray/Test Upload 3' type='file' />

                  <Input variant='outlined' label='X-Ray/Test Upload 4' type='file' />

                  <Input variant='outlined' label='Diagnosis' />

                  <Textarea variant='outlined' label='Complexity'></Textarea>

                  <Textarea variant='outlined' label='Implants'></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Operations</Typography>

                  <Input variant='outlined' label='Date of Surgery' type='date' />

                  <Select label='Surgery Outcome'>
                    <Option>Successful</Option>
                    <Option>Complications Present</Option>
                    <Option>Unsuccessful</Option>
                  </Select>

                  <Textarea variant='outlined' label='Medications'></Textarea>

                  <Textarea variant='outlined' label='Surgical Team'></Textarea>


                  <Select label='Surgery Site'>
                    <Option value='Hip Left'>Hip Left</Option>
                    <Option value='Hip Right'>Hip Right</Option>
                    <Option value='Hip Both'>Hip Both</Option>
                    <Option value='Knee Left'>Knee Left</Option>
                    <Option value='Knee Right'>Knee Right</Option>
                    <Option value='Knee Both'>Knee Both</Option>
                  </Select>

                  <Input variant='outlined' label='Reactions' />

                  <Textarea variant='outlined' label='Surgical Note / Remark'></Textarea>

                  <PostOperation/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Testmonials</Typography>

                  <Textarea variant='outlined' label='Message'></Textarea>

                  <Input variant='outlined' label='Picture 1' type='file'/>

                  <Input variant='outlined' label='Picture 2' type='file'/>

                  <Input variant='outlined' label='Picture 3' type='file'/>

                  <Input variant='outlined' label='Picture 4' type='file'/>

                  <Input variant='outlined' label='Add Video' type='file'/>

                  <Input variant='outlined' label='Other File Upload' type='file'/>

                  
                <div className='w-full col-span-2 flex gap-2 justify-Center mt-5 mb-5'>
                  <Button onClick={handleAddData} className='w-20 flex justify-center rounded-full -mt-3' color='black'>SUBMIT</Button>
                  <Button onClick={handleRemoveData}  variant='outlined' className='w-20 flex justify-center rounded-full -mt-3' color='black'>
                    RESET
                  </Button>
                </div>
                  

            
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