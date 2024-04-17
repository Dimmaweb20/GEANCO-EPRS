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
import Vitalsigns from '@/components/Vitalsigns'
import Medicaltest from '@/components/Medicaltest'
import Immunization from '@/components/Immunization'
import Referral from '@/components/Referral'
import Payment from '@/components/Payment'
import { createGopd } from '@/controllers'

const page = () => {
  const [inputs, setInputs] = useState({})

  const handleCreateGopd = async (e) => {
    e.preventDefault();

    const data = { ...inputs }
    const res = await createGopd(data)

    console.log(res.message);

    if (res.ok) {
      alert("Clinic created successfully")
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
                <Typography variant='h5'>Add New - GOPD</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Select label='Select Patients' required>
                    <Option>Hospital One</Option>
                    <Option>Hospital Two</Option>
                    <Option>Hospital Three</Option>
                    <Option>Hospital Four</Option>
                    <Option>Hospital Five</Option>
                  </Select>


                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Vitalsigns/>
                  <Medicaltest/>
                  <Immunization/>
                  <Referral/>
                  <Payment/>
                 
                  <div className='mt-3 border-b-2 col-span-2'>
                    <Typography variant='h3' color='black'>Billing & Balance</Typography>
                    <Typography variant='paragraph' color='black'>Amount Deposited and Pending Balance of Patient</Typography>
                  </div>

                  <Input variant='outlined' label='Total Amount Billed' min={0} type='number' icon={'₦'} required />

                  <Input variant='outlined' label='Total Amount Paid' min={0} type='number' icon={'₦'} required />

                  <Input variant='outlined' label='Balance Amount to Pay' min={0} type='number' disabled />

                  <Input variant='outlined' label='Record Entry Date & Time' min={0} type='date' />

                  <Input variant='outlined' label='Verification Code' min={0} required />

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

}

export default page