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

const Payment = () => {

    const [dataNum, setDataNum] = useState([''])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)
    }

    const handleRemoveData = () => {
        const existingData = [...dataNum]
        existingData.pop()

        setDataNum(existingData)
    }
    return (
        <>
            <div className='mb-3 mt-3 col-span-2 border-b-2'>
                <Typography variant='h3' color='black'>Bills And Payments</Typography>
                <Typography variant='paragraph' color='black'>Payment History</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date Paid' type='date' />

                    <Input variant='outlined' label='Service category' />

                    <Input variant='outlined' label='Service description'/>

                    <Input variant='outlined' label='Amount Paid'/>

                    <Input variant='outlined' label='Amount Billed'/>

                    <Input variant='outlined' label='Amount to Balance'/>



                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Remark / Comments'></Textarea>
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

export default Payment