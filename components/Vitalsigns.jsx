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

const Vitalsigns = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])
    const [inputs, setInputs] = useState({})
    const [V, setvitalsigns] = useState([])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getvitalsigns = { ...inputs }
        setvitalsigns.push(getvitalsigns)

        addInputs({ target: { name: "vitalsigns", value: vitalsigns } })
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
                <Typography variant='h3' color='black'>Vital signs</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='dateofvisit' variant='outlined' label='Date of Visit' type='date' required onChange={handleSetInputs} />

                    <Select label='Reason For Visit' required onChange={(e) => handleSetInputs({ target: { name: "reasonforvisit", value: e } })} >
                        <Option>Follow-Up Care</Option>
                        <Option>New Case</Option>
                        <Option>Other</Option>
                    </Select>

                    <Input name='temperature (c)' variant='outlined' label='Temperature (c)' onChange={handleSetInputs} />

                    <Input name='Blood Pressure (mmHg)' variant='outlined' label='Blood Pressure (mmHg)' onChange={handleSetInputs} />

                    <Input name='Weight (Kg)' variant='outlined' label='Weight (Kg)' onChange={handleSetInputs} />

                    <Input name='pulse Rate (beats/min)' variant='outlined' label='pulse Rate (beats/min)' onChange={handleSetInputs} />

                    <Input name='HB' variant='outlined' label='HB' onChange={handleSetInputs} />

                    <div className='col-span-2'>
                        <Textarea name='General Comment' variant='outlined' label='General Comment' onChange={handleSetInputs} ></Textarea>
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

export default Vitalsigns