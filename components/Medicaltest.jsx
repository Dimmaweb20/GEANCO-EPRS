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

const Medicaltest = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])
    const [inputs, setInputs] = useState({})
    const [medical, setMedical] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getMedicals = { ...inputs }
        setMedical.push(getMedicals)

        addInputs({ target: { name: "medicaltest", value: medical } })
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
                <Typography variant='h3' color='black'>Medical Test/Treatment Record</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Textarea name='Recommended Medical Test' variant='outlined' label='Recommended Medical Test' onChange={handleSetInputs} ></Textarea>

                    <Input name='Date of Test' variant='outlined' label='Date of Test' type='date' onChange={handleSetInputs} />

                    <Input name='est Result Upload 1' variant='outlined' label='Test Result Upload 1' type='file' onChange={handleSetInputs} />

                    <Input name='Test Result Upload 2' variant='outlined' label='Test Result Upload 2' type='file' onChange={handleSetInputs} />

                    <Input name='Test Result Image 1' variant='outlined' label='Test Result Image 1' type='file' onChange={handleSetInputs} />

                    <Input name='Test Result Image 2' variant='outlined' label='Test Result Image 2' type='file' onChange={handleSetInputs} />

                    <div className='col-span-2'>
                        <Textarea name='Resullt/Remark (Test)' variant='outlined' label='Resullt/Remark (Test)' onChange={handleSetInputs}></Textarea>
                        <Textarea name='Treatment & Drug Note' variant='outlined' label='Treatment & Drug Note' onChange={handleSetInputs}></Textarea>
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

export default Medicaltest