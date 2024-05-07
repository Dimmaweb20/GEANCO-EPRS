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

const Delivery = ({ addInputs }) => {

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
                <Typography variant='h3' color='black'>Delivery</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                <Select name='deliverysite' label='Delivery Site' required onChange={(e) => handleSetInputs({ target: { name: "deliverysite", value: e } })}>
                    <Option value='Inbound (Internal)'>Inbound (Internal) </Option>
                    <Option value='Outbound (External)'>Outbound (External) </Option>
                </Select>

                    
                    <Input name='date' variant='outlined' label='Date' type='date' required onChange={handleSetInputs}/>

                    <Input name='time' variant='outlined' label='Time' type='time' required onChange={handleSetInputs}/>

                    <Select name='deliveryoutcome' label='Delivery Outcome (Neonatal)' required onChange={(e) => handleSetInputs({ target: { name: "deliveryoutcome", value: e } })}>
                    <Option value='Alive'>Alive (viable) </Option>
                    <Option value='Alive (Non-viable)'>Alive (Non-Viable) </Option>
                    <Option value='Dead'>Dead</Option>
                  </Select>

                  <Select name='sexofbaby' label='Sex of Baby' required onChange={(e) => handleSetInputs({ target: { name: "sexofbaby", value: e } })}>
                    <Option value='Male'>Male</Option>
                    <Option value='Female'>Female</Option>
                    <Option value='Others'>Others</Option>
                  </Select>

                  <Select name='modeofdelivery' label='Mode of Delivery' required onChange={(e) => handleSetInputs({ target: { name: "modeofdelivery", value: e } })}>
                    <Option value='Spontanous Vagina Delivery'>Spontanous Vagina Delivery</Option>
                    <Option value='Assisted'>Assisted</Option>
                    <Option value='ceaseran Section'>Ceaseran Section</Option>
                  </Select>

                    <Input name='babyname' variant='outlined' label='Baby Name' required onChange={handleSetInputs}/>

                    <Input name='weightofbirth' variant='outlined' label='Weight of Birth (kg)' required onChange={handleSetInputs}/>

                    <Input name='birthattendantname' variant='outlined' label='Birth Attendant Name' required onChange={handleSetInputs} />


                    <div className='col-span-2'>
                        <Textarea name='remark' variant='outlined' label='Remark / Comments' required onChange={handleSetInputs}></Textarea>
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

export default Delivery