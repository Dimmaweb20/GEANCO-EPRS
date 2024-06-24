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
  Button
} from "@material-tailwind/react";
import { useCountries } from 'use-react-countries';
import { IoCalendarOutline } from 'react-icons/io5'
import BillsAndPayment from '@/components/BillsAndPayment'
import { createOnlineapplication } from '@/controllers'
import { ClinicProtectedRoutes } from '@/utils/validation'
import { getStore } from '@/utils/storage'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();
  const { countries } = useCountries();
  const [inputs, setInputs] = useState({})
  const activeClinic = JSON.parse(getStore('activeclinic')) // import getStore

  const handleCreateOnlineapplications = async (e) => {
    e.preventDefault();

    const data = { ...inputs, clinicid: activeClinic?.id }
    const res = await createOnlineapplication(data)

    console.log(res.message);

    if (res.ok) {
      alert("Application created successfully")
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
                <Typography variant='h5'>Online Application</Typography>
                <Typography variant='paragraph'>Surgical Mission</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Patients Personal Data</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleCreateOnlineapplications}>

                  <Input name='' variant='outlined' label='Registration Date' type='date' required />

                  <Select name='title' label='Title' required onChange={(e) => handleSetInputs({ target: { name: "title", value: e } })}>
                    <Option value='Mr.'>Mr.</Option>
                    <Option value='Mrs.'>Mrs.</Option>
                    <Option value='Ms.'>Ms.</Option>
                    <Option value='Dr.'>Dr.</Option>
                    <Option value='Prof.'>Prof.</Option>
                    <Option value='Engr.'>Engr.</Option>
                  </Select>

                  <Input name='firstname' variant='outlined' label='First Name' required onChange={handleSetInputs} />

                  <Input name='lastname' variant='outlined' label='Last Name' required onChange={handleSetInputs} />

                  <Input name='middlename' variant='outlined' label='Middle Name' required onChange={handleSetInputs} />

                  <Input name='dob' variant='outlined' label='Date of birth' type='date' required onChange={handleSetInputs} />

                  <Input name='age' variant='outlined' label='Age' disabled onChange={handleSetInputs} />

                  {/* <Input name='' variant='outlined' label='Occupation' required  onChange={handleSetInputs}/> */}

                  {/*                   
                  <Select name='' label='Nationality' required onChange={(e) => handleSetInputs({ target: { name: "patientId", value: e } })}>
                    <Option value='Nigeria'>Nigeria</Option>
                    <Option value='Other'>Other</Option>
                  </Select> */}

                  {/* <Input name='' variant='outlined' label='Nationality' required  onChange={handleSetInputs}/> */}
                  {/* 
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
                  </Select> */}


                  <Select name='gender' label='Gender' required onChange={(e) => handleSetInputs({ target: { name: "gender", value: e } })}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input name='phone' variant='outlined' label='Phone number' required onChange={handleSetInputs} />

                  <Input name='backupphone' variant='outlined' label='Back Up Phone number' required onChange={handleSetInputs} />

                  <div className='col-span-2'>
                    <Input name='email' variant='outlined' label='Email' type='email' onChange={handleSetInputs} />
                  </div>

                  {/* Medical Conditions */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Address </Typography>

                  <Input name='addressname' variant='outlined' label='Street Name' required onChange={handleSetInputs} />
                  <Input name='city' variant='outlined' label='Town' required onChange={handleSetInputs} />
                  <Input name='state' variant='outlined' label='State' required onChange={handleSetInputs} />

                  {/* Medical Conditions */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Medical Conditions </Typography>

                  <Select name='disease' label='Disease of' required onChange={(e) => handleSetInputs({ target: { name: "disease", value: e } })}>
                    <Option value='Appendix'>Appendix</Option>
                    <Option value='Gallbladder'>Gallbladder</Option>
                    <Option value='Ovary'>Ovary</Option>
                    <Option value='Hernia Repair'>Hernia Repair</Option>
                    <Option value='Pediatric Surgery'>Pediatric Surgery</Option>
                    <Option value='Others'>Others (Please Specify)</Option>
                  </Select>

                  <Textarea name='specificdiagnosis' variant='outlined' label='Specific Diagonsis' required onChange={handleSetInputs}></Textarea>

                  <Textarea name='othercondition' variant='outlined' label='Other Condition Details' required onChange={handleSetInputs}></Textarea>

                  {/* Medical Documents (X-Rays, CT Scans, UltraSounds, Doctors Report e.t.c) */}
                  <Typography variant='h5' color='black' className='mt-3 border-b-2 col-span-2'>Medical Documents (X-Rays, CT Scans, UltraSounds, Doctors Report e.t.c)</Typography>

                  <Input name='fileuploadone' variant='outlined' label='File Upload 1' type='file' required onChange={handleSetInputs} />

                  <Input name='fileuploadtwo' variant='outlined' label='File Upload 2' type='file' required onChange={handleSetInputs} />

                  <Input name='fileuploadthree' variant='outlined' label='File Upload 3' type='file' required onChange={handleSetInputs} />

                  <Input name='imageone' variant='outlined' label='Capture/Image 1' type='file' required onChange={handleSetInputs} />

                  <Input name='imagetwo' variant='outlined' label='Capture/Image 2' type='file' required onChange={handleSetInputs} />

                  <Input name='imagethree' variant='outlined' label='Capture/Image 3' type='file' required onChange={handleSetInputs} />


                  {/* Alternative Contact Person */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Alternative Contact Person </Typography>

                  <Input name='alternativesurname' variant='outlined' label='Surname' required onChange={handleSetInputs} />

                  <Input name='alternativefirstname' variant='outlined' label='First Name' required onChange={handleSetInputs} />

                  {/* <Select label='Relationship with NOK' required>
                    <Option value='Spouse'>Spouse</Option>
                    <Option value='Partner'>Partner</Option>
                    <Option value='Parent'>Parent</Option>
                    <Option value='Sibling'>Sibling</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Neighbour'>Neighbour</Option>

                  </Select> */}

                  <Input name='alternativephone' variant='outlined' label='Primary Phone number' required onChange={handleSetInputs} />
                  <Input name='alternativebackupphone' variant='outlined' label='BackUp Phone number' required onChange={handleSetInputs} />

                  <Input name='alternativeemail' type='email' variant='outlined' label='Email' required onChange={handleSetInputs} />

                  <Input name='alternativereferralperson' type='text' variant='outlined' label='Referral Person/Clinic' required onChange={handleSetInputs} />

                  <div className='col-span-2'>
                    <Textarea name='alternativeaddress' variant='outlined' label='Address (Street, City, State)' required onChange={handleSetInputs}></Textarea>
                  </div>

                  {/* OFFICIAL AREA ::: DO NOT FILL */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>OFFICIAL AREA ::: DO NOT FILL </Typography>

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