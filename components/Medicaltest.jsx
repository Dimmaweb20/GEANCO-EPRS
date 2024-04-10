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

const Medicaltest = () => {

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
                <Typography variant='h3' color='black'>Medical Test/Treatment Record</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Textarea variant='outlined' label='Recommended Medical Test'></Textarea>

                    <Input variant='outlined' label='Date of Test' type='date' />

                    <Input variant='outlined' label='Test Result Upload 1' type='file'/>

                    <Input variant='outlined' label='Test Result Upload 2' type='file'/>

                    <Input variant='outlined' label='Test Result Image 1' type='file'/>

                    <Input variant='outlined' label='Test Result Image 2' type='file'/>

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Resullt/Remark (Test)'></Textarea>
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

export default Medicaltest