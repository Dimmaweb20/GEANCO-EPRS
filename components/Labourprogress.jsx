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

const Labourprogress = () => {

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
                <Typography variant='h3' color='black'>Progress Record - Routine Examination</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Time of VE' type='Time' required />

                    <Input variant='outlined' label='Dilation (cm)' required />

                    <Input variant='outlined' label='Foetal Heartb Rate' required />

                    <Input variant='outlined' label='Fluid Intake eNote' required />

                    <Input variant='outlined' label='Duration of Labour' required />
                 

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Labour Notes'></Textarea>
                        <Textarea variant='outlined' label='Drugs Administered'></Textarea>
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

export default Labourprogress