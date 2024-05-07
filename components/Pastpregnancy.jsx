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

const Pastpregnancy = ({ addInputs }) => {

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
                <Typography variant='h3' color='black'>Past Pregnancy Data</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='deliverydate' variant='outlined' label='Delivery of Date' type='date' required onChange={handleSetInputs}/>

                    <Input name='issues' variant='outlined' label='Issues During Pregnancy' required onChange={handleSetInputs}/>

                    <Input name='modeofdelivery' variant='outlined' label='Mode Of Delivery' required onChange={handleSetInputs}/>

                    <Input name='placeofdelivery' variant='outlined' label='Place of Delivery' required onChange={handleSetInputs}/>

                    <Input name='deliverynotes' variant='outlined' label='Delivery Notes' required onChange={handleSetInputs}/>

                    <Select name='deliveryoutcome' label='Delivery Outcome' required onChange={(e) => handleSetInputs({ target: { name: "deliveryoutcome", value: e } })}>
                    <Option value='Alive'>Alive</Option>
                    <Option value='Miscarried'>Miscarried</Option>
                    <Option value='Still Birth'>Still Birth</Option>
                  </Select>

                  <Select name='sexofbaby' label='Sex of Baby' required onChange={(e) => handleSetInputs({ target: { name: "sexofbaby", value: e } })}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Input name='weightofbirth' variant='outlined' label='Weight of Birth (kg)' onChange={handleSetInputs}/>

                  <Input name='labourcomplications' variant='outlined' label='Labour/Postpartum Complications' onChange={handleSetInputs}/>

                    <div className='col-span-2'>
                        <Textarea name='remark' variant='outlined' label='Remark / Comments' onChange={handleSetInputs}></Textarea>
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

export default Pastpregnancy