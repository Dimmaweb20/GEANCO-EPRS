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

const Referral = ({ addInputs }) => {

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
                <Typography variant='h3' color='black'>Referral</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name='dateofcheckin' variant='outlined' label='Date of Checkin' type='date' required onChange={handleSetInputs}/>

                    <Input name='dateofref' variant='outlined' label='Date of Reference' type='date' required onChange={handleSetInputs}/>

                    <Input name='referredto' variant='outlined' label='Institution Referred To' required onChange={handleSetInputs}/>

                    <Textarea name='reasonofref' variant='outlined' label='Reason of Refernce' required onChange={handleSetInputs}></Textarea>

                    <Input name='nameofref' variant='outlined' label='Name of Referrer' required onChange={handleSetInputs} />

                    <div className='col-span-2'>
                        <Textarea name='previoustreatment' variant='outlined' label='Previous Treatment, Test or Procedure' required onChange={handleSetInputs}></Textarea>
                        <Textarea name='remark' variant='outlined' label='Remark/Comments' required onChange={handleSetInputs}></Textarea>
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

export default Referral