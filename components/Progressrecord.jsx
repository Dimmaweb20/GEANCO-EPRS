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

const Progressrecord = ({ addInputs }) => {

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
                <Typography variant='h3' color='black'>Progress Record - Routine Examination</Typography>
            </div>

            {dataNum.map((data) => (
                <>
                    <Input name="date" variant='outlined' label='Date' type='date' required onChange={handleSetInputs} />

                    <Input name="heightoffundus" variant='outlined' label='Height of Fundus (cm)' required onChange={handleSetInputs} />

                    <Input name="foetalposition" variant='outlined' label='Foetal Presentation/Position' required onChange={handleSetInputs} />

                    <Input name="foetalheartbeat" variant='outlined' label='Foetal Heartbeat (Beats/min)' required onChange={handleSetInputs} />

                    <Select label='Protein in Urine' name='protein' required onChange={(e) => handleSetInputs({ target: { name: "protein", value: e } })}>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Low'>Low</Option>
                    <Option value='Medium'>Medium</Option>
                    <Option value='High'>High</Option>
                  </Select>

                  <Select label='Sugar in Urine' name='sugarinrine' required onChange={(e) => handleSetInputs({ target: { name: "sugarinrine", value: e } })}>
                    <Option value='Nil'>Nil</Option>
                    <Option value='Low'>Low</Option>
                    <Option value='Medium'>Medium</Option>
                    <Option value='High'>High</Option>
                  </Select>

                  <Input variant='outlined' label='Blood Pressure (mmHg)'  required onChange={handleSetInputs}/>

                  <Input name="weight" variant='outlined' label='Weight (Kg)' required onChange={handleSetInputs}/>
                  <Input name="hb" variant='outlined' label='HB' required onChange={handleSetInputs}/>
                  <Input name="temperature" variant='outlined' label='Temperature' required onChange={handleSetInputs}/>
                  <Input name="pr" variant='outlined' label='PR' required onChange={handleSetInputs}/>
                  <Input name="bmi" variant='outlined' label='BMI' required onChange={handleSetInputs}/>

                    <div className='col-span-2'>
                        <Textarea name="compliants" variant='outlined' label='Compliants' onChange={handleSetInputs}></Textarea>
                        <Textarea name="routine" variant='outlined' label='Routine Drug Note' onChange={handleSetInputs}></Textarea>
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

export default Progressrecord