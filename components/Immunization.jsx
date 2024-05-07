import React, { useState } from 'react'
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

const Immunization = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])
    const [inputs, setInputs] = useState({})
    const [bills, setBills] = useState([])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const bill = { ...inputs }
        bills.push(bill)

        addInputs({ target: { name: "immunizationprofile", value: bills } })
    }

    const handleRemoveData = () => {
        const existingData = [...dataNum]
        existingData.pop()

        setDataNum(existingData)
    }

    const handleSetInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs({ ...inputs, [name]: value })
    }
    return (
        <>
            <div className='mb-3 mt-3 col-span-2 border-b-2'>
                <Typography variant='h3' color='black'>IMMUNIZATION - Profile, Vaccine & Drug Notes</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Full Name' required />

                    
                  <Select label='Gender' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                    <Input name='dateofvisit' variant='outlined' label='Date of Visit' type='date' required onChange={handleSetInputs} />

                    <Input name='timeofvisit' variant='outlined' label='Time of Visit' type='time' required onChange={handleSetInputs} />

                    <Input name='weight' variant='outlined' label='Weight (kg)' required onChange={handleSetInputs} />

                    <Input name='height' variant='outlined' label='Height' onChange={handleSetInputs} />

                    <Input name='temperature' variant='outlined' label='Tempreature' onChange={handleSetInputs} />

                    <div className='col-span-2'>
                        <Textarea name='vaccine' variant='outlined' label='Vaccine' onChange={handleSetInputs}></Textarea>
                        <Textarea name='remark' variant='outlined' label='Remark/Comment' onChange={handleSetInputs}></Textarea>
                    </div>
                </>
            ))}

            <div className='w-full col-span-2 flex gap-2 justify-end'>
                <Button onClick={handleAddData} className='w-10 flex justify-center rounded-full -mt-3 float-right' color='blue'>+</Button>
                <Button onClick={handleRemoveData} className='w-10 flex justify-center rounded-full -mt-3 float-right' color='red'>
                    -
                </Button>
            </div>
        </>
    )
}

export default Immunization