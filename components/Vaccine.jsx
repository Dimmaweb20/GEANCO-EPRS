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

const Vaccine = () => {

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
                <Typography variant='h3' color='black'>Vaccine & Drug Notes</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input variant='outlined' label='Date of Visit' type='date' />
                    
                    <Input variant='outlined' label='Health Institution' />

                    
                  <Select label='Vaccine' required>
                    <Option value='BCG'>BCG</Option>
                    <Option value='Hep B-O'>Hep B-O</Option>
                    <Option value='IPV'>IPV</Option>
                    <Option value='measles-1'>measles-1</Option>
                    <Option value='measles-2'>measles-2</Option>
                    <Option value='meningitis'>meningitis</Option>
                    <Option value='OPV - 0'>OPV - 0</Option>
                    <Option value='OPV - 1'>OPV - 1</Option>
                    <Option value='OPV - 2'>OPV - 2</Option>
                    <Option value='OPV - 3'>OPV - 3</Option>
                    <Option value='PCV - 1'>PCV - 1</Option>
                    <Option value='PCV - 2'>PCV - 2</Option>
                    <Option value='PCV - 3'>PCV - 3</Option>
                    <Option value='Penta - 2'>Penta - 2</Option>
                    <Option value='Penta - 3'>Penta - 3</Option>
                    <Option value='Rota - 1'>Rota - 1</Option>
                    <Option value='Rota - 2'>Rota - 2</Option>
                    <Option value='Vitamin A - 1'>Vitamin A - 1</Option>
                    <Option value='Vitamin A - 2'>Vitamin A - 2</Option>
                    <Option value='Yellow Fever'>Yellow Fever</Option>
                    
                  </Select>

                  <Select label='Intervals'>
                    <Option value='10 Weeks'>10 Weeks</Option>
                    <Option value='12 Months'>12 Months</Option>
                    <Option value='14 Weeks'>14 Weeks</Option>
                    <Option value='15 Months'>15 Months</Option>
                    <Option value='6 Months'>6 Months</Option>
                    <Option value='6 Weeks'>6 Weeks</Option>
                    <Option value='9 Months'>9 Months</Option>
                    <Option value='At Birth'>At Birth</Option>
                  </Select>

                    <Input variant='outlined' label='Dosage'/>

                    <Input variant='outlined' label='Weight (kg)' />

                    <Textarea variant='outlined' label='Reaction from Vaccine (if any)'></Textarea>

                    <Input variant='Caregiver' label='Caregiver' />

                    <Input variant='outlined' label='Next Visit Date' type='date' />

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

export default Vaccine