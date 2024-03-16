import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Textarea,
    Typography,
    Input,
    Select,
    Option
} from "@material-tailwind/react";

const BillsAndPayment = () => {
    return (
        <>
            <div className='mb-3 mt-3 col-span-2 border-b-2'>
                <Typography variant='h3' color='black'>Bills And Payments</Typography>
                <Typography variant='paragraph' color='black'>Payment History</Typography>
            </div>

            <Input variant='outlined' label='Date of visit' type='date' required />

            <Input variant='outlined' label='Service category' required />

            <Input variant='outlined' label='Service description' required />

            <Input variant='outlined' label='Amount Paid' required />

            <div className='col-span-2'>
                <Textarea variant='outlined' label='Remark / Comments'></Textarea>
            </div>
        </>
    )
}

export default BillsAndPayment