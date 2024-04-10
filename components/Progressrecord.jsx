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

const Progressrecord = () => {

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
                    <Input variant='outlined' label='Date' type='date' required />

                    <Input variant='outlined' label='Height of Fundus (cm)' required />

                    <Input variant='outlined' label='Foetal Presentation/Position' required />

                    <Input variant='outlined' label='Foetal Heartbeat (Beats/min)' required />

                    <Select label='Protein in Urine' required>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Low'>Low</Option>
                    <Option value='Medium'>Medium</Option>
                    <Option value='High'>High</Option>
                  </Select>

                  <Select label='Sugar in Urine' required>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Low'>Low</Option>
                    <Option value='Medium'>Medium</Option>
                    <Option value='High'>High</Option>
                  </Select>

                  <Input variant='outlined' label='Blood Pressure (mmHg)' />

                  <Input variant='outlined' label='Weight (Kg)' />
                  <Input variant='outlined' label='HB' />
                  <Input variant='outlined' label='Temperature' />
                  <Input variant='outlined' label='PR' />
                  <Input variant='outlined' label='BMI' />

                    <div className='col-span-2'>
                        <Textarea variant='outlined' label='Compliants'></Textarea>
                        <Textarea variant='outlined' label='Routine Drug Note'></Textarea>
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

export default Progressrecord