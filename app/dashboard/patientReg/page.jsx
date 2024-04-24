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
import { getStore } from '@/utils/storage'
import dobToAge from 'dob-to-age'
import { createPatient } from '@/controllers'
import { toast } from 'react-toastify'
import { ClinicProtectedRoutes } from '@/utils/validation'

const page = () => {
  const [activeClinic, setActiveClinic] = useState();
  const { countries } = useCountries();
  const [inputs, setInputs] = useState({})
  const [balanceAmount, setBalanceAmount] = useState(0)

  const handleSetInputs = (e, toInt = false) => {
    const name = e.target.name
    const value = toInt ? +e.target.value : e.target.value
    setInputs({...inputs, [name]: value})
  }

  const handleBalance = () => {
    const balance = inputs?.totalamountbilled - inputs?.totalamountpaid || 0
    setBalanceAmount(balance);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    inputs.clinicid = activeClinic.id
    inputs.balanceamount = balanceAmount
    inputs.age = +dobToAge(inputs?.dateofbirth) || 0
    
    const data = { ...inputs }
    const res = await createPatient(data)

    if (res.ok) {
      toast.success("Patient registered successfully")
    } else {
      toast.error(res.data)
    }
  }

  useEffect(() => {;
    setActiveClinic(JSON.parse(getStore('activeclinic')))
    {ClinicProtectedRoutes() ? null : router.push('/')}
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
                <Typography variant='h5'>Patient Registration</Typography>
                <Typography variant='paragraph'>Please fill in patient's basic data accurately. Profile Data of all categories are captured here. You should navigate to the antenatal or general section to update detailed data of patient.</Typography>
              </CardHeader>
              <CardBody className='mt-1'>

                {/* Profile */}
                <Typography variant='h3' color='black' className='mb-3'>Profile</Typography>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-5" onSubmit={handleSubmit}>
                  <Input name='registrationdate' variant='outlined' label='Registration Date' type='date' onChange={handleSetInputs} />
                  <Select name='healthinstitution' label='Health Institution' onChange={(e) => handleSetInputs({target: {name: "healthinstitution", value: e}})}>
                    <Option value='hospitalone'>Hospital One</Option>
                    <Option value='hospitaltwo'>Hospital Two</Option>
                    <Option value='hospitalthree'>Hospital Three</Option>
                    <Option value='hospitalfour'>Hospital Four</Option>
                    <Option value='hospitalfive'>Hospital Five</Option>
                  </Select>

                  <Input name='healthinstitutioninitials' variant='outlined' label='Health Institution Initials' onChange={handleSetInputs} />

                  <Input name="clinicid" value={activeClinic?.id} readOnly variant='outlined' label='Clinic ID' onChange={handleSetInputs} />

                  <Select name="patientcategory" label='Patient Category' onChange={(e) => handleSetInputs({target: {name: "patientcategory", value: e}})}>
                    <Option value='Antenatal'>Antenatal</Option>
                    <Option value='General Outpatient Department'>General Outpatient Department</Option>
                    <Option value='Laparoscopic Surgery'>Laparoscopic Surgery</Option>
                    <Option value='Orthopaedic Surgery'>Orthopaedic Surgery</Option>
                    <Option value='Z-100 Clinic Centre'>Z-100 Clinic Centre</Option>
                  </Select>

                  <Select name="maritalstatus" label='Marital Status' onChange={(e) => handleSetInputs({target: {name: "maritalstatus", value: e}})}>
                    <Option value='Single'>Single</Option>
                    <Option value='Married'>Married</Option>
                    <Option value='Divorced'>Divorced</Option>
                    <Option value='Widow'>Widow</Option>
                    <Option value='Widower'>Widower</Option>
                    <Option value='I rather not say'>I rather not say</Option>
                  </Select>

                  <Select name="title" label='Title' onChange={(e) => handleSetInputs({target: {name: "title", value: e}})}>
                    <Option value='Mr.'>Mr.</Option>
                    <Option value='Mrs.'>Mrs.</Option>
                    <Option value='Ms.'>Ms.</Option>
                    <Option value='Dr.'>Dr.</Option>
                    <Option value='Prof.'>Prof.</Option>
                    <Option value='Engr.'>Engr.</Option>
                  </Select>

                  <Input name="firstname" variant='outlined' label='First Name' onChange={handleSetInputs} />

                  <Input name='lastname' variant='outlined' label='Last Name' onChange={handleSetInputs} />

                  <Input name='middlename' variant='outlined' label='Middle Name' onChange={handleSetInputs} />

                  <Input name='dateofbirth' variant='outlined' label='Date of birth' type='date' onChange={handleSetInputs} />

                  <Input name='age' value={dobToAge(inputs?.dateofbirth) ? dobToAge(inputs?.dateofbirth) : 0} variant='outlined' label='Age' type={'text'} readOnly/>

                  <Select name='educationlevel' label='Educational Leve' onChange={(e) => handleSetInputs({target: {name: "educationlevel", value: e}})}>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Elementary'>Elementary</Option>
                    <Option value='JSS'>JSS</Option>
                    <Option value='SSS'>SSS</Option>
                    <Option value='B.Sc'>B.Sc</Option>
                    <Option value='M.Sc'>M.Sc</Option>
                    <Option value='Phd'>Phd</Option>
                  </Select>

                  <Input name='occupation' variant='outlined' label='Occupation' onChange={handleSetInputs} />

                  <Select name='religion' label='Religion' onChange={(e) => handleSetInputs({target: {name: "religion", value: e}})}>
                    <Option value='Christianity'>Christianity</Option>
                    <Option value='Islam'>Islam</Option>
                    <Option value='Indigenious Belief'>Indigenious Belief</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Input name='denomination' variant='outlined' label='Denomination' onChange={handleSetInputs}  />

                  <Input name='lga' variant='outlined' label='L.G.A' onChange={handleSetInputs} />

                  <Input name='town' variant='outlined' label='Town' onChange={handleSetInputs} />

                  <Input name='postalcode' variant='outlined' label='Postal Code' onChange={handleSetInputs} />

                  <Select name='currentstate' label='Current State' onChange={(e) => handleSetInputs({target: {name: "currentstate", value: e}})}>
                    <Option value='Enugu'>Enugu</Option>
                    <Option value='Anambra'>Anambra</Option>
                    <Option value='Abia'>Abia</Option>
                    <Option value='Imo'>Imo</Option>
                    <Option value='Ebonyi'>Ebonyi</Option>
                    <Option value='Delta'>Delta</Option>
                    <Option value='Lagos'>Lagos</Option>
                  </Select>

                  <Select name='nationality' label='Nationality' onChange={(e) => handleSetInputs({target: {name: "nationality", value: e}})}>
                    <Option value='Nigeria'>Nigeria</Option>
                    <Option value='Other'>Other</Option>
                  </Select>

                  {/* <Input name='' variant='outlined' label='Nationality' /> */}

                  <Input name='residentialaddress' variant='outlined' label='Place of Origin Address' onChange={handleSetInputs} />
                  <Input variant='outlined' label='Place of Origin (Town)' />
                  <Input variant='outlined' label='Place of Origin (Postal Code)' />

                  <Select
                    size="lg"
                    label="Select Country"
                    name='country'
                    onChange={(e) => handleSetInputs({target: {name: "country", value: e}})}
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

                  <Select name='stateoforigin' label='State of Origin' onChange={(e) => handleSetInputs({target: {name: "stateoforigin", value: e}})}>
                    <Option value='Enugu'>Enugu</Option>
                    <Option value='Anambra'>Anambra</Option>
                    <Option value='Imo'>Imo</Option>
                    <Option value='Abia'>Abia</Option>
                    <Option value='Delta'>Other</Option>
                  </Select>

                  <Select name='gender' label='Gender' onChange={(e) => handleSetInputs({target: {name: "gender", value: e}})}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                  </Select>

                  <Input name='mobile' variant='outlined' label='Mobile' type='text' onChange={handleSetInputs} />
                  
                  <div className='col-span-2'>
                    <Input name='email' variant='outlined' label='Email' type='email' onChange={handleSetInputs} />
                  </div>

                  <Textarea name='residentialaddress' variant='outlined' label='Residential Address' onChange={handleSetInputs}></Textarea>
                  <Textarea name='addressline2' variant='outlined' label='Place of Origin Address' onChange={handleSetInputs}></Textarea>

                  {/* Next of kin */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Next of Kin</Typography>

                  <Input name='nokfirstname' variant='outlined' label='First Name' onChange={handleSetInputs} />

                  <Input name='noklastname' variant='outlined' label='Last Name' onChange={handleSetInputs} />

                  <Select name='nokrelationship' label='Relationship with NOK' onChange={(e) => handleSetInputs({target: {name: "nokrelationship", value: e}})}>
                    <Option value='Spouse'>Spouse</Option>
                    <Option value='Partner'>Partner</Option>
                    <Option value='Parent'>Parent</Option>
                    <Option value='Sibling'>Sibling</Option>
                    <Option value='Friend'>Friend</Option>
                    <Option value='Neighbour'>Neighbour</Option>

                  </Select>

                  <Input name='nokphone' variant='outlined' label='Phone number' onChange={handleSetInputs} />

                  <div className='col-span-2'>
                    <Textarea name='nokaddress' variant='outlined' label='Address' onChange={handleSetInputs}></Textarea>
                  </div>

                  {/* Medical and Surgical */}
                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Medical & Surgical</Typography>
                  <Select name='hypertension' label='Hypertension' onChange={(e) => handleSetInputs({target: {name: "hypertension", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='burningsensation' label='Burning Sensation' onChange={(e) => handleSetInputs({target: {name: "burningsensation", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='heartdisease' label='Heart Disease' onChange={(e) => handleSetInputs({target: {name: "heartdisease", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='swelling' label='Swelling' onChange={(e) => handleSetInputs({target: {name: "swelling", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='sicklecellanaemia' label='Sickle Cell Anaemia' onChange={(e) => handleSetInputs({target: {name: "sicklecellanaemia", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='chroniclowerabdominalpain' label='Chronic Lower Abominal Pain' onChange={(e) => handleSetInputs({target: {name: "chroniclowerabdominalpain", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='diabetes' label='Diabetes' onChange={(e) => handleSetInputs({target: {name: "diabetes", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>
                  
                  <Select name='painfulurination' label='Painful Urination' onChange={(e) => handleSetInputs({target: {name: "painfulurination", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='tuberculosis' label='Tuberculosis' onChange={(e) => handleSetInputs({target: {name: "tuberculosis", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='genitalsores' label='Genital Sores' onChange={(e) => handleSetInputs({target: {name: "genitalsores", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='asthma' label='Asthma' onChange={(e) => handleSetInputs({target: {name: "asthma", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='genitalgrowth' label='Genital Limps/Growth(Warts)' onChange={(e) => handleSetInputs({target: {name: "genitalgrowth", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='epilepsy' label='Epilepsy' onChange={(e) => handleSetInputs({target: {name: "epilepsy", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                    <Select name='mentaldisorder' label='Mental Disorder' onChange={(e) => handleSetInputs({target: {name: "mentaldisorder", value: e}})}>
                      <Option value='Positive'>Positive</Option>
                      <Option value='Negative'>Negative</Option>
                    </Select>
                  
                  <Textarea name='others' variant='outlined' label='Others' onChange={handleSetInputs}></Textarea>
                  <Textarea name='previoussurgery' variant='outlined' label='Previous Surgery? (Please Specify)' onChange={handleSetInputs}></Textarea>
                  <Textarea name='generalnotes' variant='outlined' label='General Notes' onChange={handleSetInputs}></Textarea>
                  <Textarea name='drughistory' variant='outlined' label='Drug History' onChange={handleSetInputs}></Textarea>

                  <Typography variant='h3' color='black' className='mt-3 border-b-2 col-span-2'>Family History</Typography>
                  <Select name='postpartum' label='Postpartum Haemorrhage (f)' onChange={(e) => handleSetInputs({target: {name: "postpartum", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='diabetesf' label='Diabetes (f)' onChange={(e) => handleSetInputs({target: {name: "diabetesf", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='hypertensionf' label='Hypertension (f)' onChange={(e) => handleSetInputs({target: {name: "hypertensionf", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='twinf' label='Twin (f)' onChange={(e) => handleSetInputs({target: {name: "twinf", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='sicklecellanaemiaf' label='Sickle Cell Anaemia (f)' onChange={(e) => handleSetInputs({target: {name: "sicklecellanaemiaf", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='birthdefects' label='Birth Defects (f)' onChange={(e) => handleSetInputs({target: {name: "birthdefects", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='asthmaf' label='Asthma (f)' onChange={(e) => handleSetInputs({target: {name: "asthmaf", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <Select name='mentaldisorderfh' label='Mental Disorder' onChange={(e) => handleSetInputs({target: {name: "mentaldisorderfh", value: e}})}>
                    <Option value='Positive'>Positive</Option>
                    <Option value='Negative'>Negative</Option>
                  </Select>

                  <div className='col-span-2'>
                    <Select name='heartdiseasef' label='Heart Disease (f)' onChange={(e) => handleSetInputs({target: {name: "heartdiseasef", value: e}})}>
                      <Option value='Positive'>Positive</Option>
                      <Option value='Negative'>Negative</Option>
                    </Select>
                  </div>

                  <div className='col-span-2'>
                    <Textarea name='othersfh' variant='outlined' label='Others' onChange={handleSetInputs}></Textarea>
                  </div>

                  {/* Bills balnce */}
                  <BillsAndPayment addInputs={handleSetInputs} />

                  <div className='mt-3 border-b-2 col-span-2'>
                    <Typography variant='h3' color='black'>Billing & Balance</Typography>
                    <Typography variant='paragraph' color='black'>Amount Deposited and Pending Balance of Patient</Typography>
                  </div>

                  <Input name='totalamountbilled' variant='outlined' label='Total Amount Billed' min={0} type='number' icon={'₦'} onChange={(e) => handleSetInputs(e, true)} onBlur={handleBalance} />

                  <Input name='totalamountpaid' variant='outlined' label='Total Amount Paid' min={0} type='number' icon={'₦'} onChange={(e) => handleSetInputs(e, true)} onBlur={handleBalance} />

                  <Input name='balanceamount' defaultValue={Intl.NumberFormat().format(balanceAmount)} variant='outlined' label='Balance Amount to Pay' min={0} type='text' readOnly onChange={(e) => handleSetInputs(e, true)} />

                  <Input name='recordentrydate' variant='outlined' label='Record Entry Date & Time' min={0} type='datetime-local' onChange={handleSetInputs} />

                  <Input variant='outlined' label='Verification Code' min={0} />

                  <Image src={'/captcha.png'} width={100} height={100} alt='vc' />

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