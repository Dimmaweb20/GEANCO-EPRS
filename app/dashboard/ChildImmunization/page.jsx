'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useEffect, useState } from 'react'
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
import { getStore } from '@/utils/storage'

const Page = () => {
  const [inputs, setInputs] = useState({})
  const { countries } = useCountries();
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore

  const handleCreateChildimmunization = async (e) => {
    e.preventDefault();

    const data = { ...inputs, clinicid: activeClinic?.id }
  
    const res = await createChildimmunization(data)

    console.log(res.message);

    if (res.ok) {
      alert("Immunization created successfully")
    } else {
      alert(res.data)
    }
  }

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  useEffect(() => {
    { ClinicProtectedRoutes() ? null : router.push('/') }
    handleGetPatients()
  }, [])
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
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleCreateChildimmunization}>
                
                <Input name='mothersname' variant='outlined' label='Mothers Name' onChange={handleSetInputs}/>

                <Input name='fathersname' variant='outlined' label='Fathers Name'  onChange={handleSetInputs}/>

                <Input name='phone' variant='outlined' label='Phone number'  onChange={handleSetInputs}/>

                <Input name='residentialaddress' variant='outlined' label='Residential Address' onChange={handleSetInputs}/>

                <Input name='hometown' variant='outlined' label='Home Town'  onChange={handleSetInputs}/>

                <Input name='localgovernement' variant='outlined' label='Local Government'  onChange={handleSetInputs}/>

                <Input name='origin' variant='outlined' label='state Of Origin'  onChange={handleSetInputs}/>

                <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Child Information</Typography>
                

                  <Input name='firstname' variant='outlined' label='First Name'  onChange={handleSetInputs} />

                  <Input name='lastname' variant='outlined' label='Last Name'  onChange={handleSetInputs} />

                  <Input name='' variant='outlined' label='Middle Name'  onChange={handleSetInputs} />

                  <Input name='dob ' variant='outlined' label='Date of birth' type='date'  onChange={handleSetInputs}/>

                  <Select name='gender' label='Gender' onChange={(e) => handleSetInputs({target: {name: "gender", value: e}})}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input name='weight' variant='outlined' label='Weight at Birth (kg)'  onChange={handleSetInputs}/>

                  <Input name='birthcertificatenumber' variant='outlined' label='Birth Cert. Number'  onChange={handleSetInputs}/>

                  <Vaccine addInputs={handleSetInputs} />

                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}
export default Page