'use client'
import { Navbar, Typography, IconButton, Drawer, Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";

import React from 'react'
import { IoMenu, IoNotificationsOutline } from 'react-icons/io5'
import Sidebar from "./Sidebar";
import { logoutSession } from "@/utils/validation";
import { useRouter } from "next/navigation";

const AdminNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openMobileNav, setOpenMobileNav] = React.useState(false);
    const router = useRouter()

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const openMobile = () => setOpenMobileNav(true);
    const closeMobile = () => setOpenMobileNav(false);

    const handleLogout = () => {
        logoutSession()
        router.push('/')
    }

    return (
        <>
            <div className="w-full">
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none" color="blue">
                    <div className="flex items-center justify-between lg:justify-end text-blue-gray-900">

                        <IoMenu onClick={openMobile} size={30} color='white' className="lg:hidden" />

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-5">
                                <IoNotificationsOutline onClick={openDrawer} className="cursor-pointer" size={25} color="white" />
                                <Drawer open={open} onClose={closeDrawer} className="p-4" placement="right">
                                    <div className="mb-6 flex items-center justify-between">
                                        <Typography variant="h5" color="blue-gray">
                                            Notifications
                                        </Typography>
                                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </IconButton>
                                    </div>
                                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                                        Transforming Lives In Africa — Learn more about The GEANCO Foundation & how we are saving lives in Africa. Empowered by you, we save & transform lives in Africa every day! You Can Save Lives.
                                    </Typography>
                                </Drawer>
                                <Menu>
                                    <MenuHandler>
                                        <Avatar variant="circular" className="cursor-pointer w-10 h-10" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" />
                                    </MenuHandler>
                                    <MenuList>
                                        <MenuItem>My account</MenuItem>
                                        <MenuItem onClick={handleLogout}>Signout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </Navbar>

                {/* Mobile */}
                <Drawer open={openMobileNav} onClose={closeMobile} placement="left">
                    <Sidebar state='block lg:hidden' />
                </Drawer>
            </div>
        </>
    )
}

export default AdminNavbar