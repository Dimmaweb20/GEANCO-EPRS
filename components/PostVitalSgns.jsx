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

const PostVitalSigns = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [postVitalSigns, setPostVitalSigns] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getPostVitalSigns = { ...inputs }
        setPostVitalSigns.push(getPostVitalSigns)

        addInputs({ target: { name: "postvitalsigns", value: postVitalSigns } })
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
                <Typography variant='h3' color='black'>Post Vital signs</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='date' variant='outlined' label='Date of Visit' type='date' required onChange={handleSetInputs} />

                    <Input name='tempreature(c)' variant='outlined' label='Tempreature (c)' onChange={handleSetInputs} />

                    <Input name='bloodPressure(mmHg)' variant='outlined' label='Blood Pressure (mmHg)' onChange={handleSetInputs} />

                    <Input name='weight(kg)' variant='outlined' label='Weight (Kg)' onChange={handleSetInputs} />

                    <Input name='pulseRate(beats/min)' variant='outlined' label='pulse Rate (beats/min)' onChange={handleSetInputs} />

                    <Input name='hb' variant='outlined' label='HB' onChange={handleSetInputs} />

                    <div className='col-span-2'>
                        <Textarea name='generalcomment' variant='outlined' label='General Comment' onChange={handleSetInputs} ></Textarea>
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

export default PostVitalSigns
