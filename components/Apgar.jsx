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

const Apgar = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])
    const [inputs, setInputs] = useState({})
    const [bills, setBills] = useState([])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const bill = { ...inputs }
        bills.push(bill)

        addInputs({ target: { name: "billsbalance", value: bills } })
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
                <Typography variant='h3' color='black'>APGAR Scores</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name="appearance" variant='outlined' label='Appearance' type='number' required onChange={handleSetInputs} />

                    <Input name="pulse" variant='outlined' label='Pulse' type='number' required onChange={handleSetInputs}/>

                    <Input name="grimmace" variant='outlined' label='Grimmace' type='number' required onChange={handleSetInputs}/>

                    <Input name="activity" variant='outlined' label='Activity' type='number' required onChange={handleSetInputs}/>

                    <Input name="respiratory" variant='outlined' label='Respiratory' type='number' required onChange={handleSetInputs}/>

                    <Input name="totalscore" variant='outlined' label='Total Score' type='number' required onChange={handleSetInputs} />

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

export default Apgar