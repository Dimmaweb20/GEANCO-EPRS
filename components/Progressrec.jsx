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

const Progressrec = () => {

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
                <Typography variant='h3' color='black'>Progress Record - Vaccination, Medical Tests & Treatments</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date of Visit' type='date' required />

                    <Input variant='outlined' label='Name of Vaccine' required />

                    <Input variant='outlined' label='Remark' />

                    <Input variant='outlined' label='Date of Test' type='date' required />

                    <Input variant='outlined' label='Description of Test' required />

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Text Resullt'></Textarea>
                        <Textarea variant='outlined' label='Treatment & Drug Note'></Textarea>
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