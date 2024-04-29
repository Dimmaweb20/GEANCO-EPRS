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
import { createFamilyplanning } from '@/controllers'



const page = () => {
  const [inputs, setInputs] = useState({})

  const handleCreateFamilyplanning = async (e) => {
    e.preventDefault();

    const data = { ...inputs }
    const res = await createFamilyplanning(data)

    console.log(res.message);

    if (res.ok) {
      alert("Clinic created successfully")
    } else {
      alert(res.data)
    }
  }

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
                  <Input name='date' variant='outlined' label='Date' type='date' onChange={handleSetInputs}/>

                  <Select name='pregnancytest' label='Pregnancy Test Result' onChange={(e) => handleSetInputs({target: {name: "pregnancytest", value: e}})}>
                    <Option>Negative</Option>
                    <Option>Positive</Option>
                  </Select>

                  <Select name='' label='Patient Details' onChange={(e) => handleSetInputs({target: {name: "mensesnoofdays", value: e}})}>
                    <Option value='Antenatal'>Antenatal</Option>
                    <Option value='General Outpatient Department'>General Outpatient Department</Option>
                    <Option value='Laparoscopic Surgery'>Laparoscopic Surgery</Option>
                    <Option value='Orthopaedic Surgery'>Orthopaedic Surgery</Option>
                    <Option value='Z-100 Clinic Centre'>Z-100 Clinic Centre</Option>
                  </Select>

                  <Select name='sourceofinformation' label='Source of information About the Clinic Family Planning Service' onChange={(e) => handleSetInputs({target: {name: "sourceofinformation", value: e}})}>
                    <Option value='Family'>Family</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Other Clinics'>Other Clinics</Option>
                    <Option value='Print Media'>Print Media</Option>
                    <Option value='Satisfied Client'>Satisfied Client</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  <Select name='' label='Do You Have Allegies or Hypersensitivity' onChange={(e) => handleSetInputs({target: {name: "mensesnoofdays", value: e}})}>
                    <Option value='No'>No</Option>
                    <Option value='Yes'>Yes</Option>
                  </Select>

                  <Select name='followupcall' label='Approval on Follow-up Call' onChange={(e) => handleSetInputs({target: {name: "followupcall", value: e}})}>
                    <Option value='No'>No</Option>
                    <Option value='Yes'>Yes</Option>
                  </Select>

                  <Input name='' variant='outlined' label='If Yes Specify' onChange={handleSetInputs} />
                 
                  {/* Medical and Surgical */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Client's Medical History</Typography>
                  <Select name='breastcancer' label='Personal History of Breast Cancer' onChange={(e) => handleSetInputs({target: {name: "breastcancer", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='livercirrhosis' label='Liver cirrhosis' onChange={(e) => handleSetInputs({target: {name: "livercirrhosis", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name=' pelvicinlammatorydisease' label='Pelvic Inflammatory Disease' onChange={(e) => handleSetInputs({target: {name: "pelvicinlammatorydisease", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='livertumor' label='Liver Tumor' onChange={(e) => handleSetInputs({target: {name: "livertumor", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='systemiclupuserythematous' label='Systemic Lupus Erythematous' onChange={(e) => handleSetInputs({target: {name: "systemiclupuserythematous", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='irregularvaginableeding' label='Irregular Vagina Bleeding' onChange={(e) => handleSetInputs({target: {name: "irregularvaginableeding", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='strokehistory' label='History of Stroke' onChange={(e) => handleSetInputs({target: {name: "strokehistory", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='ischemicheartdisease' label='Ischemic Heart Disease' onChange={(e) => handleSetInputs({target: {name: "ischemicheartdisease", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='' label='Active Thrombosis'onChange={(e) => handleSetInputs({target: {name: "mensesnoofdays", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='endometrialcancer' label='Endometrical Cancer' onChange={(e) => handleSetInputs({target: {name: "endometrialcancer", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select namr='hypertension' label='Hypertension' onChange={(e) => handleSetInputs({target: {name: "hypertension", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Textarea name='' variant='outlined' label='Others'onChange={handleSetInputs}></Textarea>
                  <Textarea name='' variant='outlined' label='Previous Surgery? (Please Specify)'onChange={handleSetInputs}></Textarea>
                  <Textarea name='' variant='outlined' label='General Notes'onChange={handleSetInputs}></Textarea>
                  <Textarea name='' variant='outlined' label='Drug History'onChange={handleSetInputs}></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Previous History of Used Contraceptives</Typography>
                  <Select name='contraceptivemethod' label='What contraceptive method have you been using?' onChange={(e) => handleSetInputs({target: {name: "contraceptivemethod", value: e}})}>
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

                  <Textarea name='contraceptiveduration' variant='outlined' label='How long have you been using this concraceptive (Please Specify)' onChange={handleSetInputs}></Textarea>

                  <Select name='contraceptivecurrent' label='Are you currently using the contraceptive' onChange={(e) => handleSetInputs({target: {name: "contraceptivecurrent", value: e}})}>
                    <Option value='Yes'>Yes</Option>
                    <Option value='No'>No</Option>
                  </Select>

                  <Textarea name='contraceptivereason' variant='outlined' label='If No, any reason for discontinuation'onChange={handleSetInputs}></Textarea>

                  <SurgicalHistory/>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2' onChange={handleSetInputs}>Physical Examination (Vital Signs)</Typography>
                  <Input name='temperature' variant='outlined' label='Temperature (c)' onChange={handleSetInputs}/>
                  <Input name='pulserate' variant='outlined' label='Pulse Rate (b/m)' onChange={handleSetInputs} />
                  <Input name='respirationrate' variant='outlined' label='Respiration Rate' onChange={handleSetInputs} />
                  <Input name='bloodpressure' variant='outlined' label='Blood Pressure' onChange={handleSetInputs}/>
                  <Input name='weight' variant='outlined' label='Weight (Kg)' onChange={handleSetInputs}/>
                  <Input name='hblevel' variant='outlined' label='Hb Level' onChange={handleSetInputs}/>
                  
                  <Select name='conjunctiva' label='Conjunctiva' onChange={(e) => handleSetInputs({target: {name: "mensesnoofdays", value: e}})}>
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

                  <Input name='actualamountpaid' variant='outlined' label='Total Amount Billed' min={0} type='number' icon={'₦'} required onChange={handleSetInputs}/>

                  <Input name='' variant='outlined' label='Total Amount Paid' min={0} type='number' icon={'₦'} required onChange={handleSetInputs}/>

                  <Input name='' variant='outlined' label='Balance Amount to Pay' min={0} type='number' disabled onChange={handleSetInputs} />

                  <Input name='' variant='outlined' label='Record Entry Date & Time' min={0} type='date' onChange={handleSetInputs} />

                  <Input name='' variant='outlined' label='Verification Code' min={0} required onChange={handleSetInputs}/>

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

}

export default page