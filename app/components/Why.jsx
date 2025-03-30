import React from 'react'
import { FaShieldAlt, FaBolt, FaHandshake } from 'react-icons/fa'

const Why = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Secure & Trusted",
      description: "Your financial security is our top priority. We use industry-standard encryption and security measures to protect your data."
    },
    {
      icon: <FaBolt className="text-4xl text-white" />,
      title: "Fast Processing",
      description: "Get your loan approved in minutes, not days. Our streamlined process ensures quick disbursement of funds."
    },
    {
      icon: <FaHandshake className="text-4xl text-white" />,
      title: "Flexible Terms",
      description: "We offer competitive rates and flexible repayment options tailored to your financial situation."
    }
  ]

  return (
    <div className='min-h-screen bg-white py-20' id='why'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Why Choose Us?</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            We provide the best loan experience with our customer-centric approach and innovative solutions.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='bg-[dodgerblue] rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg'
            >
              <div className='flex justify-center mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
              <p className='text-white/90'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why