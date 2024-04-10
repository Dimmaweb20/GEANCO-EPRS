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

const Pastpregnancy = () => {

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
                <Typography variant='h3' color='black'>Past Pregnancy Data</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Delivery of Date' type='date' required />

                    <Input variant='outlined' label='Issues During Pregnancy' required />

                    <Input variant='outlined' label='Mode Of Delivery' required />

                    <Input variant='outlined' label='Place of Delivery' required />

                    <Input variant='outlined' label='Delivery Notes' required />

                    <Select label='Delivery Outcome' required>
                    <Option value='Alive'>Alive</Option>
                    <Option value='Miscarried'>Miscarried</Option>
                    <Option value='Still Birth'>Still Birth</Option>
                  </Select>

                  <Select label='Sex of Baby' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Input variant='outlined' label='Weight of Birth (kg)' />

                  <Input variant='outlined' label='Labour/Postpartum Complications' />

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

export default Pastpregnancy