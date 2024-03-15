'use client'

import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  ListItemSuffix,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

const page = () => {
  return (
    <>
      <main className='w-full h-screen flex items-start'>
        <Sidebar />
        <div className='w-full'>
          <AdminNavbar />

          {/* CONtent goes here */}
          <Card className='mt-10'>
            <CardHeader className='p-2'>
              <Typography>Patient Registration</Typography>
            </CardHeader>
            <CardBody>

            </CardBody>
          </Card>
        </div>
      </main>
    </>
  )
}

export default page