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
                <Typography variant='h5'>New Antenatal</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5">
                  <Select label='Select Patients' required>
                    <Option>Patient 1</Option>
                    <Option>Patient 2</Option>
                    <Option>Patient 3</Option>
                  </Select>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Antenatal Updates</Typography>
                  <Select label='Cycle Length' required>
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

                  <Input variant='outlined' label='Gravida (N0. Of Pregnancies)' required />

                  <Select label='Menses No of days' required>
                    <Option>2 Days</Option>
                    <Option>3 Days</Option>
                    <Option>4 Days</Option>
                    <Option>5 Days</Option>
                    <Option>6 Days</Option>
                    <Option>7 Days</Option>
                  </Select>

                  <Input variant='outlined' label='Para' required />

                  <Select label='Gestational Age of Booking' required>
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

                  <Input variant='outlined' label='Spontanous Abortion' required />

                  <Input variant='outlined' label='LNMP' type='date' required />

                  <Input variant='outlined' label='Induced Abortion' required />

                  <Input variant='outlined' label='EDD' type='date' required />

                  <Input variant='outlined' label='Others' />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>First Visit - Antenatal Checks</Typography>
                  <Input variant='outlined' label='Weight (kg)' />
                  <Input variant='outlined' label='Abdominal Examination' />
                  <Input variant='outlined' label='Height (cm)' />
                  <Input variant='outlined' label='Pelvic Examination' />
                  <Input variant='outlined' label='Blood Pressure (mmHg)' />

                  <Select label='HIV Status' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Input variant='outlined' label='Tempreture (c)' />

                  <Select label='Hepatitis B' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Input variant='outlined' label='Pulse Rate (beats/min)' />

                  <Select label='Hepatitis C' required>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Pastpregnancy/>

                  <Progressrecord/>

                  <Progressrec/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Labour</Typography>
                  <Input variant='outlined' label='Date' type='date' />
                  <Input variant='outlined' label='AWeight (Kg)' />
                  <Input variant='outlined' label='Temperature (c)' />
                  <Input variant='outlined' label='Pulse Rate (Beats/min)' />
                  <Input variant='outlined' label='Blood Pressure (mmHg)' />
                  <Input variant='outlined' label='HB' />

                  <Labourprogress/>
                  <Delivery/>
                  <Apgar/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Post Delivery</Typography>
                  <Input variant='outlined' label='Temperature (c)' />
                  <Textarea variant='outlined' label='Drug Notes'></Textarea>
                  <Input variant='outlined' label='Blood Pressure (mmHg)' />
                  <Input variant='outlined' label='Weight (kg)' />
                  <Select label='Delivery Outcome (maternal)' required>
                    <Option value='Alive'>Alive</Option>
                    <Option value='Dead'>Dead</Option>
                  </Select>
                  <Input variant='outlined' label='Pulse Rate (Beats/min)' />
                  <Textarea variant='outlined' label='General Remark'></Textarea>
                  <Input variant='outlined' label='HB' />

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Discharge</Typography>
                  <Input variant='outlined' label='Date' type='date' />
                  <Textarea variant='outlined' label='Notes About Neonate'></Textarea>
                  <Textarea variant='outlined' label='Notes About Patient'></Textarea>
                  <Input variant='outlined' label='Name of Midwife' />

                  <Immunization/>
                  <Referral/>
                  <Payment/>

                  <Typography variant='h3' color='black' className='mt-3 mb-3 border-b-2 col-span-2'>Payment Summary</Typography>
                  <Input variant='outlined' label='Total Billed' />
                  <Input variant='outlined' label='Total Paid' />
                  <Input variant='outlined' label='Outstanding Balance' />

                  
                <div className='w-full col-span-2 flex gap-2 justify-Center mt-5 mb-5'>
                  <Button onClick={handleAddData} className='w-20 flex justify-center rounded-full -mt-3' color='black'>SUBMIT</Button>
                  <Button onClick={handleRemoveData}  variant='outlined' className='w-20 flex justify-center rounded-full -mt-3' color='black'>
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