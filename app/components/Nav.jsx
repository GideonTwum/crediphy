'use client'
import React from 'react'

const Nav = () => {
  const toLogin = () => {
    window.location.href = '/login';
  }
  const toDevelopers = () => {
    window.location.href = '/developers';
  }
  return (
    <div className='flex items-center justify-between p-6 bg-white shadow-md fixed w-full z-10'>
        <div className='flex items-center'>
            <img src="/images/crediphy.png" alt="logo" className='w-10 h-10 rounded-full' />
            <h1 className='font-bold text-[#818181] text-xl'>Credi</h1>
            <h1 className='text-blue-500 font-bold text-xl'>phy</h1>
        </div>
        <div className='flex items-center gap-8'>
          <a className='hover:text-blue-500 text-sm transition-colors' href="#">Home</a>
          <a className='hover:text-blue-500 text-sm transition-colors' href="#about">About</a>
          <a className='hover:text-blue-500 text-sm transition-colors' href="#services">Services</a>
          <a className='hover:text-blue-500 text-sm transition-colors' href="#why">Why Us?</a>
          <a className='hover:text-blue-500 text-sm transition-colors' href="#pricing">Pricing</a>
          <a onClick={() => toDevelopers()} className='hover:text-blue-500 text-sm transition-colors cursor-pointer' href="#developers">Developers</a>
        </div>
        <div className="flex items-center">
          <button onClick={() => toLogin()} className='bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer text-white px-6 py-2 rounded-md'>Join Us</button>
        </div>
    </div>
  )
}

export default Nav