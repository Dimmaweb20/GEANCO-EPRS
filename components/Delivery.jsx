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

const Delivery = () => {

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
                <Typography variant='h3' color='black'>Delivery</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                <Select label='Delivery Site' required>
                    <Option value='Inbound (Internal)'>Inbound (Internal) </Option>
                    <Option value='Outbound (External)'>Outbound (External) </Option>
                </Select>

                    
                    <Input variant='outlined' label='Date' type='date' required />

                    <Input variant='outlined' label='Time' type='time' required />

                    <Select label='Delivery Outcome (Neonatal)' required>
                    <Option value='Alive'>Alive (viable) </Option>
                    <Option value='Alive (Non-viable)'>Alive (Non-Viable) </Option>
                    <Option value='Dead'>Dead</Option>
                  </Select>

                  <Select label='Sex of Baby' required>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Select label='Mode of Delivery'>
                    <Option value='Spontanous Vagina Delivery'>Spontanous Vagina Delivery</Option>
                    <Option value='Assisted'>Assisted</Option>
                    <Option value='ceaseran Section'>Ceaseran Section</Option>
                  </Select>

                    <Input variant='outlined' label='Baby Name'/>

                    <Input variant='outlined' label='Weight of Birth (kg)' />

                    <Input variant='outlined' label='Birth Attendant Name' />


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

export default Delivery