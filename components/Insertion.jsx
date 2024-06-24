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

const Insertion = ({ addInputs }) => {

    const [dataNum, setDataNum] = useState([''])

    const [inputs, setInputs] = useState({})
    const [insertion, setInsertion] = useState([])


    const handleAddData = () => {
        const newData = [...dataNum, 'new']
        setDataNum(newData)

        //................................................................
        const getInsertion = { ...inputs }
        setInsertion.push(getInsertion)

        addInputs({ target: { name: "insertiondetails", value: insertion } })
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
                <Typography variant='h3' color='black'>Details of the insertion</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='date' variant='outlined' label='Date' type='date' onChange={handleSetInputs} />

                    <Input name='clientpreferredmethod' variant='outlined' label='Client Preferred Method' onChange={handleSetInputs} />

                    <Input name='midwiftconsellingonpreferredmethod' variant='outlined' label='Midwife couselling on Preferred Method' onChange={handleSetInputs} />

                    <Input name='midwiftselectedmethod' variant='outlined' label='Midwife Selected Method' onChange={handleSetInputs} />
                 

                    <div className='col-span-2'>
                        <Textarea name='NotesonClientPreference' variant='outlined' label='Notes on Client Preference' onChange={handleSetInputs}></Textarea>
                        <Textarea name='NoteonMidwifeSelectedMethod' variant='outlined' label='Note on Midwife Selected Method' onChange={handleSetInputs}></Textarea>
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

export default Insertion