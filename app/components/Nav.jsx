'use client'
import React from 'react'

const Nav = () => {
  const toDashboard = () => {
    window.location.href = '/dashboard';
  }
  return (
    <div className='flex items-center justify-between p-6 bg-white shadow-md fixed w-full z-10'>
        <div className='flex items-center'>
            <img src="/images/crediphy.png" alt="logo" className='w-10 h-10 rounded-full' />
            <h1 className='font-bold text-[#818181] text-xl'>Credi</h1>
            <h1 className='text-blue-500 font-bold text-xl'>phy</h1>
        </div>
        <div className='flex items-center gap-16 '>
          <a className='hover:text-blue-500 text-sm' href="#">Home</a>
          <a className='hover:text-blue-500 text-sm' href="#about">About</a>
          <a className='hover:text-blue-500 text-sm' href="#services">Services</a>
          <a className='hover:text-blue-500 text-sm' href="#why">Why Us?</a>
          <a className='hover:text-blue-500 text-sm' href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => toDashboard()} className='bg-blue-500 hover:bg-blue-500/50 cursor-pointer text-white px-4 py-2 rounded-md'>Dashboard</button>
        </div>
    </div>
  )
}

export default Nav