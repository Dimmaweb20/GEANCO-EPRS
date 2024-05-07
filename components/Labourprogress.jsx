import React, { useEffect, useState } from 'react'
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

const Labourprogress = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])
    const [inputs, setInputs] = useState({})
    const [bills, setBills] = useState([])

    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const bill = { ...inputs }
        bills.push(bill)

        addInputs({ target: { name: "labourproggress", value: bills } })
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
                <Typography variant='h3' color='black'>Progress Record - Routine Examination</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='timeofve' variant='outlined' label='Time of VE' type='Time' required onChange={handleSetInputs}/>

                    <Input name='dilationcm' variant='outlined' label='Dilation (cm)' required onChange={handleSetInputs}/>

                    <Input name='foetalheartb' variant='outlined' label='Foetal Heartb Rate' required onChange={handleSetInputs}/>

                    <Input name='fluidintake' variant='outlined' label='Fluid Intake eNote' required onChange={handleSetInputs}/>

                    <Input name="durationoflabour" variant='outlined' label='Duration of Labour' required onChange={handleSetInputs}/>
                 

                    <div className='col-span-2'>
                        <Textarea name='labournotes' variant='outlined' label='Labour Notes' onChange={handleSetInputs}></Textarea>
                        <Textarea name='dugsadministered' variant='outlined' label='Drugs Administered' onChange={handleSetInputs}></Textarea>
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

export default Labourprogress