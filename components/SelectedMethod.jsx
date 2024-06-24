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

const SelectedMethod = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [selectedMethod, setSelectedMethod] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getSelectedMethod = { ...inputs }
        setSelectedMethod.push(getSelectedMethod)

        addInputs({ target: { name: "selectedmethoddetails", value: selectedMethod } })
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
                <Typography variant='h3' color='black'>Details of Selected Method</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='Name/Type of Family Planning' variant='outlined' label='Name/Type of Family Planning' onChange={handleSetInputs} />

                    <Input name='Duration' variant='outlined' label='Duration' onChange={handleSetInputs} />

                    <Input name='Expiration Date' variant='outlined' label='Expiration Date' onChange={handleSetInputs} />
                 
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

export default SelectedMethod