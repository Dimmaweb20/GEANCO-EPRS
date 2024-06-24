'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useState, useEffect } from 'react'
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
import Vaccine from '@/components/Vaccine'
import Vitalsigns from '@/components/Vitalsigns'
import PostOperationsCare from '@/components/PostOperationsCare'
import PostVitalSigns from '@/components/PostVitalSgns'
import { createLaparoscopic, getPatientDataByClinic } from '@/controllers'
import { toast } from 'react-toastify';
import { ClinicProtectedRoutes } from '@/utils/validation'
import { useRouter } from 'next/navigation'
import { getStore } from '@/utils/storage'



const page = () => {
  const router = useRouter();
  const { countries } = useCountries();
  const [inputs, setInputs] = useState({})
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore

  const handleCreateSurgery = async (e) => {
    e.preventDefault();

    const data = { ...inputs }
    const res = await createLaparoscopic(data)

    console.log(res.message);

    if (res.ok) {
      alert("Surgery data created successfully")
    } else {
      alert(res.data)
    }
  }

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const handleGetPatients = async () => {
    const res = await getPatientDataByClinic(activeClinic?.id);
    setPatients(res.data)
    setLoading(false)
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
                <Typography variant='h5'>New Lap. Surgery</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Select label='Select Patients' name='patientId' onChange={(e) => handleSetInputs({ target: { name: "patientId", value: e } })} required>

                  {!loading ? patients.map((user, index) => (
                    <Option value={user?.id} key={user?.id}>{`${user?.firstname} ${user?.lastname}`}</Option>
                  )) : <p className='text-blue-500'>Loading...</p>}

                </Select>

                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleCreateSurgery}>

                  <Vitalsigns addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Operation</Typography>


                  <Input variant='outlined' label='Date' type='date' />

                  <Select label='Surgery Outcome'>
                    <Option value='Successful'>Successful</Option>
                    <Option value='Complications'>Complications Present</Option>
                    <Option value='Unsuccessful'>Unsuccessful</Option>
                  </Select>

                  <Textarea variant='outlined' label='Surgical Team'></Textarea>

                  <Textarea variant='outlined' label='Remark / Comments'></Textarea>

                  <PostOperationsCare addInputs={handleSetInputs} />

                  <PostVitalSigns addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Discharge</Typography>


                  <Input variant='outlined' label='Date' type='date' />

                  <Textarea variant='outlined' label='Discharge Note'></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Testmonial</Typography>

                  <Input variant='outlined' label='Picture 1' type='file' />

                  <Input variant='outlined' label='Picture 2' type='file' />

                  <Input variant='outlined' label='File Upload' type='file' />

                  <Input variant='outlined' label='Add Video' type='file' />

                  <Textarea variant='outlined' label='Message/text'></Textarea>

                  <Button color={'blue'} type={'submit'}>Submit</Button>

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