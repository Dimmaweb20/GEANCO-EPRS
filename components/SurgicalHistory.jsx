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

const SurgicalHistory = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [surgical, setSurgical] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getSurgical = { ...inputs }
        setSurgical.push(getSurgical)

        addInputs({ target: { name: "surgicalhistory", value: surgical } })
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
                <Typography variant='h3' color='black'>Surgical History</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='date' variant='outlined' label='Date' type='Date' onChange={handleSetInputs} />

                    <Input name='nameofsurgery' variant='outlined' label='Name of Surgery' onChange={handleSetInputs}/>

                    <Input name='reasonforsurgery' variant='outlined' label='reason for Surgery' onChange={handleSetInputs} />
                
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

export default SurgicalHistory