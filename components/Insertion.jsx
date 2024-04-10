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

const Insertion = () => {

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
                <Typography variant='h3' color='black'>Details of the insertion</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date' type='date' />

                    <Input variant='outlined' label='Client Preferred Method'/>

                    <Input variant='outlined' label='Midwife couselling on Preferred Method' />

                    <Input variant='outlined' label='Midwife Selected Method' />
                 

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Notes on Client Preference'></Textarea>
                        <Textarea variant='outlined' label='Note on Midwife Selected Method'></Textarea>
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

export default Insertion