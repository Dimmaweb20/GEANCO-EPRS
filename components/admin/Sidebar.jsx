'use client'

import React from 'react'
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
import {IoAddOutline, IoAppsOutline, IoArrowDown, IoBriefcase, IoCalendarOutline, IoCart, IoCashOutline, IoDocumentTextOutline, IoHome, IoMedkit, IoMedkitOutline, IoPersonAddOutline, IoRefreshOutline, IoRepeatOutline, IoServerOutline, IoThermometer } from 'react-icons/io5';

const Sidebar = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <>
            <aside className='w-96 bg-base-100 shadow-lg h-screen'>
                <Image src={'/logo.png'} width={200} height={100} alt='Geanco Logo' className='ml-10' />
                <hr />

                <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                    <List>
                        {/* First menu */}
                        <Accordion open={open === 1} icon={ <IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />} >

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
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoPersonAddOutline />
                                        </ListItemPrefix>
                                        Patient Registration
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoCalendarOutline />
                                        </ListItemPrefix>
                                        Patient Data & update
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoMedkitOutline />
                                        </ListItemPrefix>
                                        Registration by clinic
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoCashOutline />
                                        </ListItemPrefix>
                                        Patient Payment Report
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoRefreshOutline />
                                        </ListItemPrefix>
                                        Reusable RPT
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAppsOutline />
                                        </ListItemPrefix>
                                        Switch Board
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoRepeatOutline />
                                        </ListItemPrefix>
                                        Reimbursement Report
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Second menu */}
                        <Accordion open={open === 2} icon={ <IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />} >  
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
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Antenatal
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Antenatal Datasheet
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Patient Delivery Report
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Referral Report (Antenatal)
                                    </ListItem>

                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Maternal Mortality Report
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Neonatal Mortality Report
                                    </ListItem>
                                    
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Antenatal Payments Report
                                    </ListItem>
                                   
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoDocumentTextOutline />
                                        </ListItemPrefix>
                                        Outbound Delivery Report
                                    </ListItem>

                                </List>
                            </AccordionBody>
                        </Accordion>

                        {/* Third menu */}
                        <Accordion open={open === 3} icon={ <IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`} />} >  
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
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        Add New - GOPD
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        GOPD Records
                                    </ListItem>
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
                        <Accordion open={open === 4} icon={ <IoArrowDown className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`} />} >  
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
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoAddOutline />
                                        </ListItemPrefix>
                                        New Immunization
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <IoServerOutline />
                                        </ListItemPrefix>
                                        Immunization Records
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