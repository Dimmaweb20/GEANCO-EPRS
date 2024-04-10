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

const PostOperation = () => {

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
                <Typography variant='h3' color='black'>Post Ops. Care</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date' type='date'/>

                    <Select label='Vital Signs'>
                        <Option value='Temperature'>Temperature</Option>
                        <Option value='Pulse Rate'>Pulse Rate</Option>
                        <Option value='Blood Pressure'>Blood Pressure</Option>
                        <Option value='Hb'>Hb</Option>
                  </Select>


                    <Textarea variant='outlined' label='Recommended Drugs/Activities/Lifestyle Change'></Textarea>

                    <Input variant='outlined' label='Discharge Date' type='date' />

                    <Textarea variant='outlined' label='General Notes'></Textarea>

    
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

export default PostOperation