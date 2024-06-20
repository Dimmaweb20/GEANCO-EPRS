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

const Vaccine = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [vaccine, setVaccine] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getVaccine = { ...inputs }
        setVaccine.push(getVaccine)

        addInputs({ target: { name: "vaccine", value: vaccine } })
    }

    const handleRemoveData = () => {
        const existingData = [...dataNum]
        existingData.pop()

        setDataNum(existingData)
    }

    const handleSetInputs = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs({ ...inputs, [name]: value })
    }
    return (
        <>
            <div className='mb-3 mt-3 col-span-2 border-b-2'>
                <Typography variant='h3' color='black'>Vaccine & Drug Notes</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='Date of Visit' variant='outlined' label='Date of Visit' type='date' onChange={handleSetInputs} />

                    <Input name='Health Institution' variant='outlined' label='Health Institution' onChange={handleSetInputs} />


                    <Select name='vaccine' label='Vaccine' required onChange={(e) => handleSetInputs({ target: { name: "vaccine", value: e } })} >
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

                    <Select name='intervals' label='Intervals' onChange={(e) => handleSetInputs({ target: { name: "intervals", value: e } })}>
                        <Option value='10 Weeks'>10 Weeks</Option>
                        <Option value='12 Months'>12 Months</Option>
                        <Option value='14 Weeks'>14 Weeks</Option>
                        <Option value='15 Months'>15 Months</Option>
                        <Option value='6 Months'>6 Months</Option>
                        <Option value='6 Weeks'>6 Weeks</Option>
                        <Option value='9 Months'>9 Months</Option>
                        <Option value='At Birth'>At Birth</Option>
                    </Select>

                    <Input name='Dosage' variant='outlined' label='Dosage' onChange={handleSetInputs} />

                    <Input name='Weight (kg)' variant='outlined' label='Weight (kg)' onChange={handleSetInputs} />

                    <Textarea name='Reaction from Vaccine (if any)' variant='outlined' label='Reaction from Vaccine (if any)' onChange={handleSetInputs}></Textarea>

                    <Input name='Caregiver' variant='Caregiver' label='Caregiver' onChange={handleSetInputs} />

                    <Input name='Next Visit Date' variant='outlined' label='Next Visit Date' type='date' onChange={handleSetInputs} />

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