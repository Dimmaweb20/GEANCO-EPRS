'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useEffect, useState } from 'react';
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
import { createAntenatal, getPatientDataByClinic } from "@/controllers"
import { ClinicProtectedRoutes } from '@/utils/validation';
import { getStore } from '@/utils/storage';
import { toast } from 'react-toastify';

const page = () => {
  const { countries } = useCountries();
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
  const [inputs, setInputs] = useState({})

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const handleCreateAntenatal = async (e) => {
    e.preventDefault()
    inputs.clinicid = activeClinic.id

    const data = { ...inputs }
    const res = await createAntenatal(data)

    if (res.ok) {
      toast.success("Antenatal registered successfully")
    } else {
      toast.error(res.data)
    }
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
                <Typography variant='h5'>New Antenatal</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleCreateAntenatal}>
                  <Select label='Select Patients' name='patientId' onChange={(e) => handleSetInputs({ target: { name: "patientId", value: e } })} required>

                    {!loading ? patients.map((user, index) => (
                      <Option value={user?.id} key={user?.id}>{`${user?.firstname} ${user?.lastname}`}</Option>
                    )) : <p className='text-blue-500'>Loading...</p>}

                  </Select>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Antenatal Updates</Typography>
                  <Select name='cyclelength' label='Cycle Length' required onChange={(e) => handleSetInputs({ target: { name: "cyclelength", value: e } })}>
                    <Option>20 Days</Option>
                    <Option>21 Days</Option>
                    <Option>22 Days</Option>
                    <Option>23 Days</Option>
                    <Option>24 Days</Option>
                    <Option>25 Days</Option>
                    <Option>26 Days</Option>
                    <Option>27 Days</Option>
                    <Option>28 Days</Option>
                    <Option>29 Days</Option>
                    <Option>30 Days</Option>
                    <Option>31 Days</Option>
                    <Option>32 Days</Option>
                    <Option>33 Days</Option>
                    <Option>34 Days</Option>
                    <Option>35 Days</Option>
                  </Select>

                  <Input name='' variant='outlined' label='Gravida (N0. Of Pregnancies)' required onChange={handleSetInputs} />

                  <Select name='mensesnoofdays' label='Menses No of days' required onChange={(e) => handleSetInputs({ target: { name: "mensesnoofdays", value: e } })}>
                    <Option>2 Days</Option>
                    <Option>3 Days</Option>
                    <Option>4 Days</Option>
                    <Option>5 Days</Option>
                    <Option>6 Days</Option>
                    <Option>7 Days</Option>
                  </Select>

                  <Input name='para' variant='outlined' label='Para' required onChange={handleSetInputs} />

                  <Select name='gestationalageatbooking' label='Gestational Age of Booking' required onChange={(e) => handleSetInputs({ target: { name: "gestationalageatbooking", value: e } })}>
                    <Option>1 Weeks</Option>
                    <Option>2 Weeks</Option>
                    <Option>3 Weeks</Option>
                    <Option>4 Weeks</Option>
                    <Option>5 Weeks</Option>
                    <Option>6 Weeks</Option>
                    <Option>7 Weeks</Option>
                    <Option>8 Weeks</Option>
                    <Option>9 Weeks</Option>
                    <Option>10 Weeks</Option>
                    <Option>11 Weeks</Option>
                    <Option>12 Weeks</Option>
                    <Option>13 Weeks</Option>
                    <Option>14 Weeks</Option>
                    <Option>15 Weeks</Option>
                    <Option>16 Weeks</Option>
                    <Option>17 Weeks</Option>
                    <Option>18 Weeks</Option>
                    <Option>19 Weeks</Option>
                    <Option>20 Weeks</Option>
                    <Option>21 Weeks</Option>
                    <Option>22 Weeks</Option>
                    <Option>23 Weeks</Option>
                    <Option>24 Weeks</Option>
                    <Option>25 Weeks</Option>
                    <Option>26 Weeks</Option>
                    <Option>27 Weeks</Option>
                    <Option>28 Weeks</Option>
                    <Option>29 Weeks</Option>
                    <Option>30 Weeks</Option>
                    <Option>31 Weeks</Option>
                    <Option>32 Weeks</Option>
                    <Option>33 Weeks</Option>
                    <Option>34 Weeks</Option>
                    <Option>35 Weeks</Option>
                    <Option>36 Weeks</Option>
                    <Option>37 Weeks</Option>
                    <Option>38 Weeks</Option>
                    <Option>39 Weeks</Option>
                    <Option>40 Weeks</Option>
                    <Option>41 Weeks</Option>
                    <Option>42 Weeks</Option>
                    <Option>43 Weeks</Option>
                    <Option>44 Weeks</Option>
                    <Option>45 Weeks</Option>
                  </Select>

                  <Input name='spontaneousabortion' variant='outlined' label='Spontanous Abortion' required onChange={handleSetInputs} />

                  <Input name='lnmp' variant='outlined' label='LNMP' type='date' required onChange={handleSetInputs} />

                  <Input name='inducedabortion' variant='outlined' label='Induced Abortion' required onChange={handleSetInputs} />

                  <Input name='edd' variant='outlined' label='EDD' type='date' required onChange={handleSetInputs} />

                  <Input name='othernotes' variant='outlined' label='Others' onChange={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>First Visit - Antenatal Checks</Typography>
                  <Input name='firstvisitweight' variant='outlined' label='Weight (kg)' onChange={handleSetInputs} />
                  <Input name='firstvisitabdominalexam' variant='outlined' label='Abdominal Examination' onChange={handleSetInputs} />
                  <Input name='firstvisitheight' variant='outlined' label='Height (cm)' onChange={handleSetInputs} />
                  <Input name='firstvisitpelvicexam ' variant='outlined' label='Pelvic Examination' onChange={handleSetInputs} />
                  <Input name='firstvisitbloodpressur' variant='outlined' label='Blood Pressure (mmHg)' onChange={handleSetInputs} />

                  <Select name="firstvisithivstatus" label='HIV Status' required onChange={(e) => handleSetInputs({ target: { name: "firstvisithivstatus", value: e } })}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Input name='firstvisittemperature' variant='outlined' label='Tempreture (c)' onChange={handleSetInputs} />

                  <Select name="firstvisithepatitisb" label='Hepatitis B' required onChange={(e) => handleSetInputs({ target: { name: "firstvisithepatitisb", value: e } })}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Input name='firstvisitpulserate' variant='outlined' label='Pulse Rate (beats/min)' onChange={handleSetInputs} />

                  <Select name='hepatitisc ' label='Hepatitis C' required onChange={(e) => handleSetInputs({ target: { name: "hepatitisc", value: e } })}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Pastpregnancy addInputs={handleSetInputs} />

                  <Progressrecord addInputs={handleSetInputs} />

                  <Progressrec addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Labour</Typography>
                  <Input name='' variant='outlined' label='Date' type='date' onChange={handleSetInputs} />
                  <Input name='' variant='outlined' label='Weight (Kg)' onChange={handleSetInputs} />
                  <Input name='' variant='outlined' label='Temperature (c)' onChange={handleSetInputs} />
                  <Input name='' variant='outlined' label='Pulse Rate (Beats/min)' onChange={handleSetInputs} />
                  <Input name='' variant='outlined' label='Blood Pressure (mmHg)' onChange={handleSetInputs} />
                  <Input name='' variant='outlined' label='HB' onChange={handleSetInputs} />

                  <Labourprogress addInputs={handleSetInputs} />
                  <Delivery addInputs={handleSetInputs} />
                  <Apgar addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Post Delivery</Typography>
                  <Input name='postdeliverytemperature' variant='outlined' label='Temperature (c)' onChange={handleSetInputs} />
                  <Textarea name='postdeliverydrugnotes' variant='outlined' label='Drug Notes' onChange={handleSetInputs}></Textarea>
                  <Input name='postdeliverybloodpressure' variant='outlined' label='Blood Pressure (mmHg)' onChange={handleSetInputs} />
                  <Input name='postdeliveryweight' variant='outlined' label='Weight (kg)' onChange={handleSetInputs} />
                  <Select name='deliveryoutcome' label='Delivery Outcome (maternal)' required onChange={(e) => handleSetInputs({ target: { name: "deliveryoutcome", value: e } })}>
                    <Option value='Alive'>Alive</Option>
                    <Option value='Dead'>Dead</Option>
                  </Select>
                  <Input name='' variant='outlined' label='Pulse Rate (Beats/min)' onChange={handleSetInputs} />
                  <Textarea variant='outlined' label='General Remark' onChange={handleSetInputs}></Textarea>
                  <Input name='' variant='outlined' label='HB' />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2' onChange={handleSetInputs}>Discharge</Typography>
                  <Input name='dischargedate' variant='outlined' label='Date' type='date' onChange={handleSetInputs} />
                  <Textarea name='noteaboutneonate' variant='outlined' label='Notes About Neonate' onChange={handleSetInputs}></Textarea>
                  <Textarea name='noteaboutpatient' variant='outlined' label='Notes About Patient' onChange={handleSetInputs}></Textarea>
                  <Input name='midwifename' variant='outlined' label='Name of Midwife' onChange={handleSetInputs} />

                  <Immunization addInputs={handleSetInputs} />
                  <Referral addInputs={handleSetInputs} />
                  <Payment addInputs={handleSetInputs} />

                  <Typography variant='h3' color='black' className='mt-3 mb-3 border-b-2 col-span-2'>Payment Summary</Typography>
                  <Input name='totalbilled' variant='outlined' label='Total Billed' onChange={handleSetInputs} />
                  <Input name='totalpaid' variant='outlined' label='Total Paid' onChange={handleSetInputs} />
                  <Input name='outstandingbalance' variant='outlined' label='Outstanding Balance' onChange={handleSetInputs} />


                  <div className='w-full col-span-2 flex gap-2 justify-Center mt-5 mb-5'>
                    <Button type={'submit'} onClick={handleAddData} className='w-20 flex justify-center rounded-full -mt-3' color='black'>SUBMIT</Button>
                    <Button onClick={handleRemoveData} variant='outlined' className='w-20 flex justify-center rounded-full -mt-3' color='black'>
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