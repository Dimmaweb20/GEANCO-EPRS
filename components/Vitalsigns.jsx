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

const Vitalsigns = () => {

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
                <Typography variant='h3' color='black'>Vital signs</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date of Visit' type='date' required />

                    <Select label='Reason For Visit' required>
                    <Option>Follow-Up Care</Option>
                    <Option>New Case</Option>
                    <Option>Other</Option>
                  </Select>

                    <Input variant='outlined' label='Tempreature (c)' />

                    <Input variant='outlined' label='Blood Pressure (mmHg)' />

                    <Input variant='outlined' label='Weight (Kg)' />

                    <Input variant='outlined' label='pulse Rate (beats/min)' />

                    <Input variant='outlined' label='HB' />

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='General Comment'></Textarea>
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

export default Vitalsigns