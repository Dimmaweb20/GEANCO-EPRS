'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React, { useEffect, useRef, useState } from 'react'
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
import { createDoctors } from '@/controllers'
import { ClinicProtectedRoutes } from '@/utils/validation'
import { useRouter } from 'next/navigation'
import { getStore } from '@/utils/storage'
import { toast } from 'react-toastify'

const Page = () => {
  const router = useRouter();
  const { countries } = useCountries();
  const [inputs, setInputs] = useState({})
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore
  const info = useRef()

  const handleCreateDoctors = async (e) => {
    e.preventDefault();
    info.current = toast.info("Please wait...", { autoClose: false })

    const data = { ...inputs, clinicid: activeClinic?.id }

    const res = await createDoctors(data)

    if (res) {
      toast.dismiss(info.current)
      toast.success("Record created successfully")
    } else {
      toast.dismiss(info.current)
      toast.error(res.data)
    }
  }

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const handlePOP = (e) => {
    const file = e.target.files[0];
    const name = e.target.name
    const value = e.target.value
    transformFile(file, name, value);
  };

  const transformFile = (file, name, value) => {
    const reader = new FileReader()
    
    if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            inputs[name] = value;
        };
    } else {
        inputs[name] = "";
    }
  };

  useEffect(() => {
    { ClinicProtectedRoutes() ? null : router.push('/') }
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
                <Typography variant='h5'>New Doctor</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Profile</Typography>
                <form className="flex flex-col gap-3 lg:gap-5" onSubmit={handleCreateDoctors}>

                  <Input name='email' variant='outlined' label='Email' type='email' required onChange={handleSetInputs} />

                  <Input name='surname' variant='outlined' label='Surname' required onChange={handleSetInputs} />

                  <Input name='firstname' variant='outlined' label='First Name' required onChange={handleSetInputs} />

                  <Input name='middlename' variant='outlined' label='Middle Name' required onChange={handleSetInputs} />

                  <Select name='gender' label='Gender' required onChange={(e) => handleSetInputs({ target: { name: "gender", value: e } })}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input name='specialty' variant='outlined' label='Area of Speciality' required onChange={handleSetInputs} />


                  <Select name='practicelevel' label='Level of Practice' required onChange={(e) => handleSetInputs({ target: { name: "practicelevel", value: e } })}>
                    <Option value='Consultant'>Consultant</Option>
                    <Option value='Resident Docotors'>Resident Docotors</Option>
                    <Option value='House Officer'>House Officer</Option>
                    <Option value='Medical Graduate'>Medical Graduate</Option>
                    <Option value='Peri. Operative Nurse'>Peri. Operative Nurse</Option>
                    <Option value='Instrument Technician'>Instrument Technician</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  {/* Medical Conditions */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Address and Contact </Typography>

                  <Input name='addressstreet' variant='outlined' label='Street' required onChange={handleSetInputs} />
                  <Input name='city' variant='outlined' label='City' required onChange={handleSetInputs} />
                  <Input name='state' variant='outlined' label='State / Province' required onChange={handleSetInputs} />
                  <Input name='phonenumber' variant='outlined' label='Phone Numbers' required onChange={handleSetInputs} />

                  <Select
                    size="lg"
                    label="Select Country"
                    name='country'
                    onChange={(e) => handleSetInputs({ target: { name: "country", value: e } })}
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

                  <Input name='passport' variant='outlined' label='Upload Passport' type='file' onChange={handlePOP} />
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

export default Page