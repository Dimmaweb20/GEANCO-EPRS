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

const PostOperation = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [postOperation, setPostOperation] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getPostOperation = { ...inputs }
        setPostOperation.push(getPostOperation)

        addInputs({ target: { name: "postoperation", value: postOperation } })
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
                    <Input name='date' variant='outlined' label='Date' type='date' onChange={handleSetInputs}/>

                    <Select name='vitalsigns' label='Vital Signs' onChange={(e) => handleSetInputs({ target: { name: "vitalsigns", value: e } })}>
                        <Option value='Temperature'>Temperature</Option>
                        <Option value='Pulse Rate'>Pulse Rate</Option>
                        <Option value='Blood Pressure'>Blood Pressure</Option>
                        <Option value='Hb'>Hb</Option>
                  </Select>


                    <Textarea name='recommendeddrugs' variant='outlined' label='Recommended Drugs/Activities/Lifestyle Change' onChange={handleSetInputs}></Textarea>

                    <Input name='dischargedate' variant='outlined' label='Discharge Date' type='date' onChange={handleSetInputs}/>

                    <Textarea name='generalnotes' variant='outlined' label='General Notes' onChange={handleSetInputs}></Textarea>

    
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

export default PostOperation