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

const Immunization = () => {

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

                    <Input variant='outlined' label='Date of Visit' type='date' required />

                    <Input variant='outlined' label='Time of Visit' type='time' required />

                    <Input variant='outlined' label='Weight (kg)' required />

                    <Input variant='outlined' label='Height' />

                    <Input variant='outlined' label='Tempreature' />

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Vaccine'></Textarea>
                        <Textarea variant='outlined' label='Remark/Comment'></Textarea>
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