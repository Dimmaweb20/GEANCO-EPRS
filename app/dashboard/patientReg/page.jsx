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
                <Typography variant='h5'>Patient Registration</Typography>
                <Typography variant='paragraph'>Please fill in patient's basic data accurately. Profile Data of all categories are captured here. You should navigate to the antenatal or general section to update detailed data of patient.</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Profile</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Input variant='outlined' label='Registration Date' type='date' required />
                  <Select label='Health Institution' required>
                    <Option>Hospital One</Option>
                    <Option>Hospital Two</Option>
                    <Option>Hospital Three</Option>
                    <Option>Hospital Four</Option>
                    <Option>Hospital Five</Option>
                  </Select>

                  <Input variant='outlined' label='Health Institution Initials' required />

                  <Input variant='outlined' label='Clinic ID' required />

                  <Select label='Patient Category' required>
                    <Option value='Antenatal'>Antenatal</Option>
                    <Option value='General Outpatient Department'>General Outpatient Department</Option>
                    <Option value='Laparoscopic Surgery'>Laparoscopic Surgery</Option>
                    <Option value='Orthopaedic Surgery'>Orthopaedic Surgery</Option>
                    <Option value='Z-100 Clinic Centre'>Z-100 Clinic Centre</Option>
                  </Select>

                  <Select label='Marital Status' required>
                    <Option value='Single'>Single</Option>
                    <Option value='Married'>Married</Option>
                    <Option value='Divorced'>Divorced</Option>
                    <Option value='Widow'>Widow</Option>
                    <Option value='Widower'>Widower</Option>
                    <Option value='I rather not say'>I rather not say</Option>
                  </Select>

                  <Select label='Title' required>
                    <Option value='Mr.'>Mr.</Option>
                    <Option value='Mrs.'>Mrs.</Option>
                    <Option value='Ms.'>Ms.</Option>
                    <Option value='Dr.'>Dr.</Option>
                    <Option value='Prof.'>Prof.</Option>
                    <Option value='Engr.'>Engr.</Option>
                  </Select>

                  <Input variant='outlined' label='First Name' required />

                  <Input variant='outlined' label='Last Name' required />

                  <Input variant='outlined' label='Middle Name' required />

                  <Input variant='outlined' label='Date of birth' type='date' required />

                  <Input variant='outlined' label='Age' disabled />

                  <Select label='Educational Level' required>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Elementary'>Elementary</Option>
                    <Option value='JSS'>JSS</Option>
                    <Option value='SSS'>SSS</Option>
                    <Option value='B.Sc'>B.Sc</Option>
                    <Option value='M.Sc'>M.Sc</Option>
                    <Option value='Phd'>Phd</Option>
                  </Select>

                  <Input variant='outlined' label='Occupation' required />

                  <Select label='Religion' required>
                    <Option value='Christianity'>Christianity</Option>
                    <Option value='Islam'>Islam</Option>
                    <Option value='Indigenious Belief'>Indigenious Belief</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Input variant='outlined' label='Denomination' required />

                  <Input variant='outlined' label='L.G.A' required />

                  <Input variant='outlined' label='Town' required />

                  <Input variant='outlined' label='Postal Code' required />

                  <Select label='Current State' required>
                    <Option value='Enugu'>Enugu</Option>
                    <Option value='Anambra'>Anambra</Option>
                    <Option value='Abia'>Abia</Option>
                    <Option value='Imo'>Imo</Option>
                    <Option value='Ebonyi'>Ebonyi</Option>
                    <Option value='Delta'>Delta</Option>
                    <Option value='Lagos'>Lagos</Option>
                  </Select>

                  <Select label='Nationality' required>
                    <Option value='Nigeria'>Nigeria</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  <Input variant='outlined' label='Nationality' required />

                  <Input variant='outlined' label='Place of Origin Address' required />
                  <Input variant='outlined' label='Place of Origin (Town)' required />
                  <Input variant='outlined' label='Place of Origin (Postal Code)' required />

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
                  </Select>

                  <Select label='State of Origin' required>
                    <Option value='Enugu'>Enugu</Option>
                    <Option value='Anambra'>Anambra</Option>
                    <Option value='Imo'>Imo</Option>
                    <Option value='Abia'>Abia</Option>
                    <Option value='Delta'>Other</Option>
                  </Select>

                  <Select label='Gender' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <div className='col-span-2'>
                    <Input variant='outlined' label='Email' type='email' required />
                  </div>

                  <Textarea variant='outlined' label='Residential Address'></Textarea>
                  <Textarea variant='outlined' label='Place of Origin Address'></Textarea>

                  {/* Next of kin */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Next of Kin</Typography>

                  <Input variant='outlined' label='First Name' required />

                  <Input variant='outlined' label='Last Name' required />

                  <Select label='Relationship with NOK' required>
                    <Option value='Spouse'>Spouse</Option>
                    <Option value='Partner'>Partner</Option>
                    <Option value='Parent'>Parent</Option>
                    <Option value='Sibling'>Sibling</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Neighbour'>Neighbour</Option>

                  </Select>

                  <Input variant='outlined' label='Phone number' required />

                  <div className='col-span-2'>
                    <Textarea variant='outlined' label='Address'></Textarea>
                  </div>

                  {/* Medical and Surgical */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Medical & Surgical</Typography>
                  <Select label='Hypertension' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Burning Sensation' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Heart Disease' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Swelling' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Sickle Cell Anaemia' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Chronic Lower Abominal Pain' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Diabetes' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Tuberculosis' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Genital Sores' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Asthma' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Genital Limps/Growth(Warts)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Epilepsy' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <div className='col-span-2'>
                    <Select label='Mental Disorder' required>
                      <Option value='Positive'>Positive</Option>
                      <Option value='Negative'>Negative</Option>
                    </Select>
                  </div>

                  <Textarea variant='outlined' label='Others'></Textarea>
                  <Textarea variant='outlined' label='Previous Surgery? (Please Specify)'></Textarea>
                  <Textarea variant='outlined' label='General Notes'></Textarea>
                  <Textarea variant='outlined' label='Drug History'></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Family History</Typography>
                  <Select label='Postpartum Haemorrhage (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Diabetes (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Hypertension (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Twin (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Sickle Cell Anaemia (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Birth Defects (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Asthma (f)' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Mental Disorder' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <div className='col-span-2'>
                    <Select label='Heart Disease (f)' required>
                      <Option value='Positive'>Positive</Option>
                      <Option value='Negative'>Negative</Option>
                    </Select>
                  </div>

                  <div className='col-span-2'>
                    <Textarea variant='outlined' label='Others'></Textarea>
                  </div>

                  <BillsAndPayment />

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

export default page