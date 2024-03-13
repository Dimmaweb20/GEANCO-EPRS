import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Signin = () => {
  return (
    <>
    <main className='w-full flex justify-center items-center h-screen'>
        <div className='w-[50rem] bg-white shadow-lg p-5 flex rounded h-[27rem] divide-x-2'>
            <form className='flex flex-col w-full p-4'>
                <Image src={'/logo.png'} width={150} height={100} alt='Geanco Logo' />

                <h1 className='mt-4 font-bold text-lg'>Sign in</h1>
                <p className='font-semibold text-sm'>to access your account!</p>

                <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100 mb-4 mt-4' type="email" name="email" id="email" placeholder='Email Address' />
                <input className='p-3 ring-1 ring-gray-400 w-full rounded bg-gray-100' type="password" name="password" id="password" placeholder='Enter password' />

                <Link href={'#'} className='text-right text-sm text-blue-400 font-bold my-2'>Forgot Password?</Link>

                <button type="submit" className='w-full p-3 rounded text-sm text-white font-bold bg-sky-400 mt-5'>Sign in</button>
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