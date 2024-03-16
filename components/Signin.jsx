'use client'

import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Signin = () => {
  const router = useRouter();

  // This function is used to submit the login form
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/admin')
  }

  return (
    <>
    <main className='w-full flex justify-center items-center h-screen'>
        <div className='w-[50rem] bg-white shadow-lg p-5 flex rounded h-[27rem] divide-x-2'>
            <form className='flex flex-col w-full p-4' onSubmit={handleSubmit}>
                <Image src={'/logo.png'} width={150} height={100} alt='Geanco Logo' />

                <h1 className='mt-4 font-bold text-lg'>Sign in</h1>
                <p className='font-semibold text-sm'>to access your account!</p>

                <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500 mb-4 mt-4' type="email" name="email" id="email" placeholder='Email Address' />
                <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 duration-700 transition outline-none focus:ring-2 focus:ring-blue-500' type="password" name="password" id="password" placeholder='Enter password' />

                <Link href={'#'} className='text-right text-sm text-blue-400 font-bold my-2'>Forgot Password?</Link>

                <Button variant='gradient' type='submit' className='mt-5' color='blue'>Sign in</Button>
            </form>

            <div className='action hidden w-full md:w-[30rem] p-4 text-center md:flex flex-col justify-center items-center'>
                <Image src={'/signin.png'} width={200} height={100} />
                <h2 className='text-xs font-extrabold'>Enhanced sign-in security</h2>
                <p className='text-xs mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum iusto possimus impedit et, corrupti libero adipisci tenetur blanditiis ducimus?</p>
            </div>
        </div>
    </main>
    </>
  )
}

export default Signin