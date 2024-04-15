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
import { createDoctors } from '@/apis'

const page = () => {
  const [inputs, setInputs] = useState({})

  const handleCreateDoctors = async (e) => {
    e.preventDefault();

    const data = { ...inputs }
    const res = await createDoctors(data)

    console.log(res.message);

    if (res.ok) {
      alert("Record created successfully")
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
                <Typography variant='h5'>New Doctor</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Profile</Typography>
                <form className="flex flex-col gap-3 lg:gap-5">
                  <Input variant='outlined' label='Registration Date' type='date' required />
                  

                  <Input variant='outlined' label='First Name' required />

                  <Input variant='outlined' label='Last Name' required />

                  <Select label='Gender' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input variant='outlined' label='Area of Speciality' required />


                  <Select label='Level of Practice' required>
                    <Option value='Consultant'>Consultant</Option>
                    <Option value='Resident Docotors'>Resident Docotors</Option>
                    <Option value='House Officer'>House Officer</Option>
                    <Option value='Medical Graduate'>Medical Graduate</Option>
                    <Option value='Peri. Operative Nurse'>Peri. Operative Nurse</Option>
                    <Option value='Instrument Technician'>Instrument Technician</Option>
                    <Option value='Other'>Other</Option>
                  </Select>


                  <Input variant='outlined' label='Place of Origin Address' required />
                  <Input variant='outlined' label='Place of Origin (Town)' required />
                  <Input variant='outlined' label='Place of Origin (Postal Code)' required />

                  <Input variant='outlined' label='Upload Passport' type='file' />

                
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