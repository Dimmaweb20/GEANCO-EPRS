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

const InsertionDetails = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [insertionDetails, setInsertionDetails] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getInsertionDetails = { ...inputs }
        setInsertionDetails.push(getInsertionDetails)

        addInputs({ target: { name: "singleinsertiondetails", value: insertionDetails } })
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
                <Typography variant='h3' color='black'>Insertion Details</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='date' variant='outlined' label='Insertion Date' type='date' onChange={handleSetInputs} />

                    <Input name='insertiontime' variant='outlined' label='Insertion Time' type='time' onChange={handleSetInputs} />

                    <Input name='expecteddateofremoval' variant='outlined' label='Expected Date of Removal' type='date' onChange={handleSetInputs} />

                    <Input name='actualdateofremoval' variant='outlined' label='Actual Date of Removal' type='date' onChange={handleSetInputs} />
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

export default InsertionDetails