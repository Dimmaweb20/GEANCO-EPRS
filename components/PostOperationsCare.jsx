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

const PostOperationsCare = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [postOperation, setPostOperation] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getPostOperation = { ...inputs }
        setPostOperation.push(getPostOperation)

        addInputs({ target: { name: "postopscare", value: postOperation } })
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
                <Typography variant='h3' color='black'>Post Ops. Care</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='date' variant='outlined' label='Date' type='date' onChange={handleSetInputs} />

                    <Textarea name='patientComplaint' variant='outlined' label='Patient Complaint' onChange={handleSetInputs}></Textarea>

                    <Textarea name='recommendedDrugs/Activities/LifestyleChange' variant='outlined' label='Recommended Drugs/Activities/Lifestyle Change' onChange={handleSetInputs}></Textarea>

                    <Textarea name='generalNotes' variant='outlined' label='General Notes' onChange={handleSetInputs}></Textarea>

                    <Input name='supportDocumentUpload' variant='outlined' label='Support Document Upload' type='file' onChange={handleSetInputs} />

    
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

export default PostOperationsCare