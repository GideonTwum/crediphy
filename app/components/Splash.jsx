'use client'
import React from 'react'

const Splash = () => {
    const toLogin = () => {
        window.location.href = '/login';
    }
  return (
    <div className='splash flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600'>
        <div className='text-center text-white px-4'>
            <p className='text-6xl md:text-8xl font-bold mb-4'>Your Credibility, <br /> Simplified...</p>
            <p className='text-xl md:text-2xl mb-8 text-gray-100'>Streamline your loan application process with confidence</p>
            <button onClick={() => toLogin()} className='bg-white text-blue-600 cursor-pointer px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Splash