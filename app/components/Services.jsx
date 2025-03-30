'use client'
import React from 'react'
import { FaChartLine, FaFileAlt, FaUserShield, FaRobot, FaHandshake } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaChartLine className="text-4xl text-[dodgerblue]" />,
      title: "Loan Assessment Automation",
      description: "Streamline your loan processing with our advanced assessment system that provides quick, accurate, and consistent evaluations."
    },
    {
      icon: <FaFileAlt className="text-4xl text-[dodgerblue]" />,
      title: "Document Analysis",
      description: "AI-powered document verification and analysis to reduce manual processing time and minimize errors."
    },
    {
      icon: <FaUserShield className="text-4xl text-[dodgerblue]" />,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation using advanced algorithms to make informed lending decisions."
    },
    {
      icon: <FaRobot className="text-4xl text-[dodgerblue]" />,
      title: "AI-Powered Insights",
      description: "Get detailed analytics and predictive insights to optimize your lending portfolio and reduce default rates."
    },
    {
      icon: <FaHandshake className="text-4xl text-[dodgerblue]" />,
      title: "Customer Experience",
      description: "Seamless integration with your existing systems to provide a smooth experience for both lenders and borrowers."
    }
  ]

  return (
    <div className='min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4' id='services'>
        <h1 className='text-4xl font-bold text-[dodgerblue] mb-12'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {services.map((service, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100'>
              <div className='flex flex-col items-center text-center'>
                {service.icon}
                <h3 className='text-xl font-semibold mt-4 mb-2 text-gray-800'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services