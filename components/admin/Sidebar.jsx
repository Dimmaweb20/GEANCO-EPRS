'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react';
import { IoAddOutline, IoAppsOutline, IoArrowDown, IoBandage, IoBriefcase, IoCalendarOutline, IoCart, IoCashOutline, IoDocumentTextOutline, IoGlobe, IoHome, IoHomeOutline, IoMedkit, IoMedkitOutline, IoPeople, IoPersonAddOutline, IoRefreshOutline, IoRepeatOutline, IoServerOutline, IoThermometer } from 'react-icons/io5';

const Sidebar = ({ state = 'hidden' }) => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        setOpen(1)
    }, [])
    return (
        <>
            <aside className={`w-full lg:w-96 bg-base-100 shadow-lg h-screen lg:block ${state} overflow-hidden lg:fixed`}>
                <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <Image src={'/logo.png'} width={200} height={100} alt='Geanco Logo' className='ml-10 -mt-2' />
                    <hr />
                    <List>
                        {/* First menu */}
                        <Accordion open={open === 1} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />} >

                            <ListItem className="p-0" selected={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoHome size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Home
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>

                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <Link href={'/admin'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoHomeOutline />
                                            </ListItemPrefix>
                                            Home
                                        </ListItem>
                                    </Link>

                                    <Link href={'/admin/patientReg'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoPersonAddOutline />
                                            </ListItemPrefix>
                                            Patient Registration
                                        </ListItem>
                                    </Link>

                                    <Link href={'/admin/patientDataUpdate'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoCalendarOutline />
                                            </ListItemPrefix>
                                            Patient Data & update
                                        </ListItem>
                                    </Link>

                                    <Link href={'/admin/registrationbyclinic'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoMedkitOutline />
                                            </ListItemPrefix>
                                            Registration by clinic
                                        </ListItem>
                                    </Link>

                                    <Link href={'/admin/patient-payment-report'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoCashOutline />
                                            </ListItemPrefix>
                                            Patient Payment Report
                                        </ListItem>
                                    </Link>

                                    {/* <ListItem>
                                        <ListItemPrefix>
                                            <IoRefreshOutline />
                                        </ListItemPrefix>
                                        Reusable RPT
                                    </ListItem> */}

                                    <Link href={'/admin/swift-board'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoAppsOutline />
                                            </ListItemPrefix>
                                            Switch Board
                                        </ListItem>
                                    </Link>

                                    <Link href={'/admin/reimbursement-report'}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <IoRepeatOutline />
                                            </ListItemPrefix>
                                            Reimbursement Report
                                        </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Second menu */}
                        <Accordion open={open === 2} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoBriefcase size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Antenatal
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                
                                <Link href={'/admin/AntenatalReg'}>
                                <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        New Antenatal
                                    </ListItem>
                                </Link>

                                <Link href={'/admin/AntenatalDatasheet'}>
                                <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Antenatal Datasheet
                                    </ListItem>
                                </Link>

                                <Link href={'/admin/PatientDelivery'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Patient Delivery Report
                                    </ListItem>
                                    </Link>

                                    <Link href={'/admin/Referralreport'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Referral Report (Antenatal)
                                    </ListItem>
                                    </Link>

                                    <Link href={'/admin/Maternalmortality'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Maternal Mortality Report
                                    </ListItem>
                                    </Link>
                                    <Link href={'/admin/Neonatalmortality'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Neonatal Mortality Report
                                    </ListItem>
                                    </Link>
                                    <Link href={'/admin/AntenatalPaymentReport'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Antenatal Payments Report
                                    </ListItem>
                                    </Link>
                                    <Link href={'/admin/OutboundDeliveryReport'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Outbound Delivery Report
                                    </ListItem>
                                    </Link>

                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Third menu */}
                        <Accordion open={open === 3} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 3}>
                                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoMedkit size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        General Ops.
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/GOPD'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        Add New - GOPD
                                    </ListItem>
                                    </Link>

                                    <Link href={'/admin/GOPDRecords'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        GOPD Records
                                    </ListItem>
                                    </Link>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Referral Report [GOPD]
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Outstanding Payment Report
                                    </ListItem>

                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Fourth menu */}
                        <Accordion open={open === 4} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 4}>
                                <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoThermometer size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Child Immunization
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/ChildImmunization'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Immunization
                                    </ListItem>
                                    </Link>
                                    <Link href={'/admin/Immunization-Records'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Immunization Records
                                    </ListItem>
                                    </Link>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Fifth menu */}
                        <Accordion open={open === 5} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 5 ? "rotate-180" : ""}`} />} >
                        <Link href={'/admin/Familyplanning'}>
                            <ListItem className="p-0" selected={open === 5}>
                                <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoPeople size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Family Planning
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            </Link>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Family Planning
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Family Planning Records
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Sixth menu */}
                        <Accordion open={open === 6} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 6 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 6}>
                                <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoBandage size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Laproscopic Surgery
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/LapSurgery'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Lap. Surgery
                                    </ListItem>
                                </Link>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Records
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Seventh menu */}
                        <Accordion open={open === 7} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 7 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 7}>
                                <AccordionHeader onClick={() => handleOpen(7)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoBandage size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Orthopaedic Surgery
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/OrthopaedicSurgery'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Orth. Surgery
                                    </ListItem>
                                </Link>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Records
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Eight menu */}
                        <Accordion open={open === 8} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 8 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 8}>
                                <AccordionHeader onClick={() => handleOpen(8)} className="border-b-0 p-3">
                                     <ListItemPrefix>
                                        <IoGlobe size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        Online Applications
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/OnlineApplications'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        Online Form
                                    </ListItem>
                                </Link>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Applicants
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Rec for Scheduling
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Rec for Gynaecologic Evaluation
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Rec for Physical Examination
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Rejected - Unable to Give Care
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Pending
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                         {/* Nine menu */}       
                        <Accordion open={open === 9} icon={<IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 9 ? "rotate-180" : ""}`} />} >
                            <ListItem className="p-0" selected={open === 9}>
                                <AccordionHeader onClick={() => handleOpen(9)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <IoBandage size={20} />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-medium">
                                        LTPA - Young Doctors
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                <Link href={'/admin/LTPA-YoungDoctors'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Doctors
                                    </ListItem>
                                </Link>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Records
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                    </List>
                </Card>


            </aside>
        </>
    )
}

export default Sidebar