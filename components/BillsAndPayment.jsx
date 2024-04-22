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
import cuid from 'cuid';

const BillsAndPayment = ({ addInputs }) => {

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
        <main>
            <div className='mb-3 mt-3 col-span-2 border-b-2'>
                <Typography variant='h3' color='black'>Bills And Payments</Typography>
                <Typography variant='paragraph' color='black'>Payment History</Typography>
            </div>

            {dataNum.map((data, index) => (
                <div key={index}>
                    <Input name='dateofvisit' variant='outlined' label='Date of visit' type='date' onChange={handleSetInputs}  />

                    <Input name='servicecat' variant='outlined' label='Service category' onChange={handleSetInputs}  />

                    <Input name='servicedesc' variant='outlined' label='Service description' onChange={handleSetInputs}  />

                    <Input name='amountpaid' variant='outlined' label='Amount Paid' onChange={handleSetInputs}  />

                    <div className='col-span-2'>
                        <Textarea name='remark' variant='outlined' label='Remark / Comments' onChange={handleSetInputs}></Textarea>
                    </div>
                </div>
            ))}

            <div className='w-full col-span-2 flex gap-2 justify-end'>
                <Button onClick={handleAddData} className='w-10 flex justify-center rounded-full -mt-3 float-right' color='blue'>+</Button>
                <Button onClick={handleRemoveData} className='w-10 flex justify-center rounded-full -mt-3 float-right' color='red'>
                    -
                </Button>
            </div>
        </main>
    )
}

export default BillsAndPayment