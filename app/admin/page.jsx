import AdminNavbar from '@/components/admin/AdminNavbar'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

const page = () => {
    return (
        <>
            <main className='w-full h-screen flex items-start'>
                <Sidebar />
                <div className='w-full'>
                    <AdminNavbar />
                </div>
            </main>
        </>
    )
}

export default page