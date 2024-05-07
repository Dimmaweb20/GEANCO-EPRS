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

const Progressrec = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [bills, setBills] = useState([])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const bill = { ...inputs }
        bills.push(bill)

        addInputs({ target: { name: "billsbalance", value: bills } })
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
                <Typography variant='h3' color='black'>Progress Record - Vaccination, Medical Tests & Treatments</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name="dateofvisit" variant='outlined' label='Date of Visit' type='date' required onChange={handleSetInputs}/>

                    <Input name="nameofvaccine" variant='outlined' label='Name of Vaccine' required onChange={handleSetInputs}/>

                    <Input name="remark" variant='outlined' label='Remark' onChange={handleSetInputs}/>

                    <Input name='dateoftest' variant='outlined' label='Date of Test' type='date' required onChange={handleSetInputs}/>

                    <Input name='descriptionoftest' variant='outlined' label='Description of Test' required onChange={handleSetInputs}/>

                    <div className='col-span-2'>
                        <Textarea name='textresult' variant='outlined' label='Text Resullt' onChange={handleSetInputs}></Textarea>
                        <Textarea name='drugnote' variant='outlined' label='Treatment & Drug Note' onChange={handleSetInputs}></Textarea>
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

export default Progressrec