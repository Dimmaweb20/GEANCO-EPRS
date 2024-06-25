'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {Card,CardHeader,CardBody,Textarea,Typography,Input,Select,Option} from "@material-tailwind/react";
import { useCountries } from 'use-react-countries';
import { IoCalendarOutline } from 'react-icons/io5'
import BillsAndPayment from '@/components/BillsAndPayment'
import Vitalsigns from '@/components/Vitalsigns'
import Medicaltest from '@/components/Medicaltest'
import Immunization from '@/components/Immunization'
import Referral from '@/components/Referral'
import Payment from '@/components/Payment'
import { createGopd, getPatientDataByClinic } from '@/controllers'
import { ClinicProtectedRoutes } from '@/utils/validation'
import { getStore } from '@/utils/storage'
import { formatNum } from '@/utils/format'

const Page = () => {
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputs, setInputs] = useState({})
  const { countries } = useCountries();
  const [balanceAmount, setBalanceAmount] = useState(0)

  const handleCreateGopd = async (e) => {
    e.preventDefault();

    const data = { ...inputs, clinicid: activeClinic?.id }
    console.log(data)
    return
    const res = await createGopd(data)

    console.log(res.message);

    if (res.ok) {
      alert("GOPD created successfully")
    } else {
      alert(res.data)
    }
  }

  const handleGetPatients = async () => {
    const res = await getPatientDataByClinic(activeClinic?.id);
    setPatients(res.data)
    setLoading(false)
  }

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const handleBalance = () => {
    const balance = inputs?.totalbilled - inputs?.totalpaid || 0
    setBalanceAmount(balance);
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
                <Typography variant='h5'>Add New - GOPD</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Select label='Select Patients' name='patientId' onChange={(e) => handleSetInputs({ target: { name: "patientId", value: e } })} required>

                    {!loading ? patients.map((user, index) => (
                      <Option value={user?.id} key={user?.id}>{`${user?.firstname} ${user?.lastname}`}</Option>
                    )) : <p className='text-blue-500'>Loading...</p>}

                  </Select>


                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Vitalsigns addInputs={handleSetInputs} />
                  <Medicaltest addInputs={handleSetInputs} />
                  <Immunization addInputs={handleSetInputs} />
                  <Referral addInputs={handleSetInputs} />
                  <Payment addInputs={handleSetInputs} />
                 
                  <div className='mt-3 border-b-2 col-span-2'>
                    <Typography variant='h3' color='black'>Billing & Balance</Typography>
                    <Typography variant='paragraph' color='black'>Amount Deposited and Pending Balance of Patient</Typography>
                  </div>

                  <Input name='totalbilled' variant='outlined' label='Total Amount Billed' min={0} type='number' icon={'₦'} required onChange={handleSetInputs} onBlur={handleBalance} />

                  <Input name='totalpaid' variant='outlined' label='Total Amount Paid' min={0} type='number' icon={'₦'} required onChange={handleSetInputs} onBlur={handleBalance} />

                  <Input name='outstandingbalance' defaultValue={formatNum(balanceAmount)} variant='outlined' label='Balance Amount to Pay' min={0} type='number' disabled  />

                  <Input name='verificationcode' variant='outlined' label='Verification Code' min={0} required />

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

export default Page