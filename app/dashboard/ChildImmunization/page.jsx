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
import { createChildimmunization } from '@/controllers'

const page = () => {
  const [inputs, setInputs] = useState({})

  const handleCreateChildimmunization = async (e) => {
    e.preventDefault();

    const data = { ...inputs }
    const res = await createChildimmunization(data)

    console.log(res.message);

    if (res.ok) {
      alert("Immunization created successfully")
    } else {
      alert(res.data)
    }
  }

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
                <Typography variant='h5'>New Immunization</Typography>
                <Typography variant='paragraph'>Child Immunization</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Patients Data</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                
                <Input variant='outlined' label='Mothers Name' />

                <Input variant='outlined' label='Fathers Name' />

                <Input variant='outlined' label='Phone number' />

                <Input variant='outlined' label='Residential Address' />

                <Input variant='outlined' label='Home Town' />

                <Input variant='outlined' label='Local Government'/>

                <Input variant='outlined' label='state Of Origin'/>

                <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Child Information</Typography>
                

                  <Input variant='outlined' label='First Name' />

                  <Input variant='outlined' label='Last Name'  />

                  <Input variant='outlined' label='Middle Name'  />

                  <Input variant='outlined' label='Date of birth' type='date' />

                  <Select label='Gender'>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input variant='outlined' label='Weight at Birth (kg)'/>

                  <Input variant='outlined' label='Birth Cert. Number'/>

                  <Vaccine/>

                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
}
export default page