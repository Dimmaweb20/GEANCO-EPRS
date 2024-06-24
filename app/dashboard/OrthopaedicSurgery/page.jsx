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
import { useRouter } from 'next/navigation'
import { getStore } from '@/utils/storage'
import { createSurgery, getPatientDataByClinic } from '@/controllers'
import { ClinicProtectedRoutes } from '@/utils/validation'



const page = () => {
  const router = useRouter();
  const { countries } = useCountries();
  const [inputs, setInputs] = useState({})
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore

  const handleCreateSurgery = async (e) => {
    e.preventDefault();

    const data = { ...inputs, clinicid: activeClinic?.id }
    const res = await createSurgery(data)

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
                <Typography variant='h5'>Orthopaedic Surgery</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleCreateSurgery}>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Surgery Data</Typography>
                  <Select label='Select Patients' name='patientId' onChange={(e) => handleSetInputs({ target: { name: "patientId", value: e } })} required>

                    {!loading ? patients.map((user, index) => (
                      <Option value={user?.id} key={user?.id}>{`${user?.firstname} ${user?.lastname}`}</Option>
                    )) : <p className='text-blue-500'>Loading...</p>}

                  </Select>


                  <Select name="applicationstatus" label='Application Status' type='radio' onChange={(e) => handleSetInputs({ target: { name: "applicationstatus", value: e } })}>
                    <Option value='recommended'>Recommended</Option>
                    <Option value='pending'>Pending</Option>
                    <Option value='decline'>Decline</Option>
                  </Select>

                  <Vitalsigns addInputs={handleSetInputs} />

                  <Textarea name='medicaltest' variant='outlined' label='Recommended Medical Test' onChange={handleSetInputs}></Textarea>

                  <Input name='xraytextuploadone' variant='outlined' label='X-Ray/Test Upload 1' type='file' onChange={handleSetInputs} />

                  <Input name='xraytextuploadtwo' variant='outlined' label='X-Ray/Test Upload 2' type='file' onChange={handleSetInputs} />

                  <Input name='xraytextuploadthree' variant='outlined' label='X-Ray/Test Upload 3' type='file' onChange={handleSetInputs} />

                  <Input name='xraytextuploadfour' variant='outlined' label='X-Ray/Test Upload 4' type='file' onChange={handleSetInputs} />

                  <Input name='diagnosis' variant='outlined' label='Diagnosis' onChange={handleSetInputs} />

                  <Textarea name='complexity' variant='outlined' label='Complexity' onChange={handleSetInputs}></Textarea>

                  <Textarea name='implants' variant='outlined' label='Implants' onChange={handleSetInputs}></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Operations</Typography>

                  <Input name='surgerytime' variant='outlined' label='Date of Surgery' type='datetime-local' onChange={handleSetInputs} />

                  <Select name='surgeryoutcome' label='Surgery Outcome' onChange={(e) => handleSetInputs({ target: { name: "surgeryoutcome", value: e } })}>
                    <Option>Successful</Option>
                    <Option>Complications Present</Option>
                    <Option>Unsuccessful</Option>
                  </Select>

                  <Textarea name='medications' variant='outlined' label='Medications' onChange={handleSetInputs} ></Textarea>

                  <Textarea name='surgeryteam' variant='outlined' label='Surgical Team' onChange={handleSetInputs} ></Textarea>


                  <Select name='surgerysite' label='Surgery Site' onChange={(e) => handleSetInputs({ target: { name: "surgerysite", value: e } })}>
                    <Option value='Hip Left'>Hip Left</Option>
                    <Option value='Hip Right'>Hip Right</Option>
                    <Option value='Hip Both'>Hip Both</Option>
                    <Option value='Knee Left'>Knee Left</Option>
                    <Option value='Knee Right'>Knee Right</Option>
                    <Option value='Knee Both'>Knee Both</Option>
                  </Select>

                  <Input name='reactions' variant='outlined' label='Reactions' onChange={handleSetInputs} />

                  <Textarea name='surgeryremark' variant='outlined' label='Surgical Note / Remark' onChange={handleSetInputs}></Textarea>

                  <PostOperation addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Testmonials</Typography>

                  <Textarea name='testimonial' variant='outlined' label='Message' onChange={handleSetInputs}></Textarea>

                  <Input name='pictureone' variant='outlined' label='Picture 1' type='file' onChange={handleSetInputs} />

                  <Input name='picturetwo' variant='outlined' label='Picture 2' type='file' onChange={handleSetInputs} />

                  <Input name='picturethree' variant='outlined' label='Picture 3' type='file' onChange={handleSetInputs} />

                  <Input name='picturefour' variant='outlined' label='Picture 4' type='file' onChange={handleSetInputs} />

                  <Input name='operationvideo' variant='outlined' label='Add Video' type='file' onChange={handleSetInputs} />

                  <Input name='otherfileupload' variant='outlined' label='Other File Upload' type='file' onChange={handleSetInputs} />


                  <div className='w-full col-span-2 flex gap-2 justify-Center mt-5 mb-5'>
                    <Button type={'submits'} className='w-20 flex justify-center rounded-full -mt-3' color='black'>SUBMIT</Button>
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