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
import SurgicalHistory from '@/components/SurgicalHistory'
import Insertion from '@/components/Insertion'
import SelectedMethod from '@/components/SelectedMethod'
import InsertionDetails from '@/components/InsertionDetails'

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
                <Typography variant='h5'>Family Planning</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Client Details (Biographic Data)</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Input variant='outlined' label='Date' type='date' />

                  <Select label='Pregnancy Test Result'>
                    <Option>Negative</Option>
                    <Option>Positive</Option>
                  </Select>

                  <Select label='Patient Details'>
                    <Option value='Antenatal'>Antenatal</Option>
                    <Option value='General Outpatient Department'>General Outpatient Department</Option>
                    <Option value='Laparoscopic Surgery'>Laparoscopic Surgery</Option>
                    <Option value='Orthopaedic Surgery'>Orthopaedic Surgery</Option>
                    <Option value='Z-100 Clinic Centre'>Z-100 Clinic Centre</Option>
                  </Select>

                  <Select label='Source of information About the Clinic Family Planning Service'>
                    <Option value='Family'>Family</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Other Clinics'>Other Clinics</Option>
                    <Option value='Print Media'>Print Media</Option>
                    <Option value='Satisfied Client'>Satisfied Client</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  <Select label='Do You Have Allegies or Hypersensitivity'>
                    <Option value='No'>No</Option>
                    <Option value='Yes'>Yes</Option>
                  </Select>

                  <Select label='Approval on Follow-up Call'>
                    <Option value='No'>No</Option>
                    <Option value='Yes'>Yes</Option>
                  </Select>

                  <Input variant='outlined' label='If Yes Specify' />
                 
                  {/* Medical and Surgical */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Client's Medical History</Typography>
                  <Select label='Personal History of Breast Cancer'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Liver cirrhosis'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Pelvic Inflammatory Disease'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Liver Tumor'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Systemic Lupus Erythematous'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Irregular Vagina Bleeding'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='History of Stroke'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Ischemic Heart Disease'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Active Thrombosis'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Endometrical Cancer'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select label='Hypertension'>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Textarea variant='outlined' label='Others'></Textarea>
                  <Textarea variant='outlined' label='Previous Surgery? (Please Specify)'></Textarea>
                  <Textarea variant='outlined' label='General Notes'></Textarea>
                  <Textarea variant='outlined' label='Drug History'></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Previous History of Used Contraceptives</Typography>
                  <Select label='What contraceptive method have you been using?'>
                    <Option value='Positive'>None</Option>
                    <Option value='Negative'>Emergency Contraceptive</Option>
                    <Option value='Negative'>Oral Pills</Option>
                    <Option value='Negative'>Male Condom</Option>
                    <Option value='Negative'>Female Condom</Option>
                    <Option value='Negative'>injectable</Option>
                    <Option value='Negative'>Implant</Option>
                    <Option value='Negative'>IUD</Option>
                    <Option value='Negative'>Diaphragm</Option>
                    <Option value='Negative'>FSpermicide Foam/Jelly</Option>
                    <Option value='Negative'>LAM</Option>
                    <Option value='Negative'>Natural Method</Option>
                    <Option value='Negative'>Other</Option>
                  </Select>

                  <Textarea variant='outlined' label='How long have you been using this concraceptive (Please Specify)'></Textarea>

                  <Select label='Are you currently using the contraceptive'>
                    <Option value='Yes'>Yes</Option>
                    <Option value='No'>No</Option>
                  </Select>

                  <Textarea variant='outlined' label='If No, any reason for discontinuation'></Textarea>

                  <SurgicalHistory/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Physical Examination (Vital Signs)</Typography>
                  <Input variant='outlined' label='Temperature (c)' />
                  <Input variant='outlined' label='Pulse Rate (b/m)' />
                  <Input variant='outlined' label='Respiration Rate' />
                  <Input variant='outlined' label='Blood Pressure' />
                  <Input variant='outlined' label='Weight (Kg)' />
                  <Input variant='outlined' label='Hb Level' />
                  
                  <Select label='Conjunctiva'>
                    <Option value='Pale'>Pale</Option>
                    <Option value='Normal'>Normal</Option>
                  </Select>

                  <Insertion/>

                  <SelectedMethod/>

                  <InsertionDetails/>

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