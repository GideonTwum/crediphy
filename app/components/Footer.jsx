import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#1E1E1E] w-full py-8 mt-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center'>
              <h1 className='text-[dodgerblue] text-xl font-bold'>Credi</h1>
              <h1 className='text-white text-xl font-bold'>phy</h1>
            </div>
            <p className='text-gray-400 text-sm'>Your trusted partner in financial solutions</p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h2 className='text-white text-lg font-semibold'>Quick Links</h2>
            <ul className='space-y-2'>
              <li><a href="#" className='text-gray-400 hover:text-white text-sm'>Home</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white text-sm'>About Us</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white text-sm'>Services</a></li>
              <li><a href="#" className='text-gray-400 hover:text-white text-sm'>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-4'>
            <h2 className='text-white text-lg font-semibold'>Contact Us</h2>
            <ul className='space-y-2 text-gray-400 text-sm'>
              <li>Email: info@crediphy.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Finance Street</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400 text-sm'>© 2024 Crediphy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer