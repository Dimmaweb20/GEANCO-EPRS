'use client'
import { Navbar, MobileNav, Typography, Button, IconButton, Drawer, Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";

import React from 'react'
import { IoNotifications, IoNotificationsOutline, IoPersonCircle, IoTrash, IoTrashBin } from 'react-icons/io5'

const AdminNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <div className="w-full">
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none" color="blue">
                    <div className="flex items-center justify-end text-blue-gray-900">
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
                                        <MenuItem>Signout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <MobileNav open={openNav}>
                        <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="text" size="sm" className="">
                                <span>Log In</span>
                            </Button>
                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span>Sign in</span>
                            </Button>
                        </div>
                    </MobileNav>
                </Navbar>

            </div>
        </>
    )
}

export default AdminNavbar