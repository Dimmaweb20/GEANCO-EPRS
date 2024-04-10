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
                <Typography variant='h5'>Online Application</Typography>
                <Typography variant='paragraph'>Surgical Mission</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Patients Personal Data</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Input variant='outlined' label='Registration Date' type='date' required />

                  <Select label='Title' required>
                    <Option value='Mr.'>Mr.</Option>
                    <Option value='Mrs.'>Mrs.</Option>
                    <Option value='Ms.'>Ms.</Option>
                    <Option value='Dr.'>Dr.</Option>
                    <Option value='Prof.'>Prof.</Option>
                    <Option value='Engr.'>Engr.</Option>
                  </Select>

                  <Input variant='outlined' label='First Name' required />

                  <Input variant='outlined' label='Last Name' required />

                  <Input variant='outlined' label='Middle Name' required />

                  <Input variant='outlined' label='Date of birth' type='date' required />

                  <Input variant='outlined' label='Age' disabled />

                  <Input variant='outlined' label='Occupation' required />

                  
                  <Select label='Nationality' required>
                    <Option value='Nigeria'>Nigeria</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  <Input variant='outlined' label='Nationality' required />

                  

                  <Select
                    size="lg"
                    label="Select Country"
                    selected={(element) =>
                      element &&
                      React.cloneElement(element, {
                        disabled: true,
                        className:
                          "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                      })
                    }
                  >
                    {countries.map(({ name, flags }) => (
                      <Option key={name} value={name} className="flex items-center gap-2">
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-5 w-5 rounded-full object-cover"
                        />
                        {name}
                      </Option>
                    ))}
                  </Select>


                  <Select label='Gender' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input variant='outlined' label='Phone number' required />

                  <div className='col-span-2'>
                    <Input variant='outlined' label='Email' type='email' />
                  </div>

                  <Input variant='outlined' label='Place of Origin Address' required />
                  <Input variant='outlined' label='Place of Origin (Town)' required />
                  <Input variant='outlined' label='Place of Origin (Postal Code)'/>

                  {/* Medical Conditions */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Medical Conditions </Typography>

                  <Select label='Disease of' required>
                    <Option value='Appendix'>Appendix</Option>
                    <Option value='Gallbladder'>Gallbladder</Option>
                    <Option value='Ovary'>Ovary</Option>
                    <Option value='Hernia Repair'>Hernia Repair</Option>
                    <Option value='Pediatric Surgery'>Pediatric Surgery</Option>
                    <Option value='Others'>Others (Please Specify)</Option>
                  </Select>
                 
                  <Textarea variant='outlined' label='Specific Diagonsis'></Textarea>

                  <Textarea variant='outlined' label='Other Condition Details'></Textarea>

                  <Typography variant='h5' color='black' className='mt-3 border-b-2 col-span-2'>Medical Documents (X-Rays, CT Scans, UltraSounds, Doctors Report e.t.c)</Typography>

                  <Input variant='outlined' label='File Upload 1' type='file'/>

                  <Input variant='outlined' label='File Upload 2' type='file'/>

                  <Input variant='outlined' label='File Upload 3' type='file'/>

                  <Input variant='outlined' label='Capture/Image 1' type='file'/>

                  <Input variant='outlined' label='Capture/Image 2' type='file'/>

                  <Input variant='outlined' label='Capture/Image 3' type='file'/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Alternative Contact Person </Typography>

                   <Input variant='outlined' label='First Name' required />

                  <Input variant='outlined' label='Last Name' required />

                  <Select label='Relationship with NOK' required>
                    <Option value='Spouse'>Spouse</Option>
                    <Option value='Partner'>Partner</Option>
                    <Option value='Parent'>Parent</Option>
                    <Option value='Sibling'>Sibling</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Neighbour'>Neighbour</Option>

                  </Select>

                  <Input variant='outlined' label='Phone number' required />

                  <div className='col-span-2'>
                    <Textarea variant='outlined' label='Address'></Textarea>
                  </div>

                  <Image src={'/captcha.png'} width={100} height={100} alt='vc' />

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