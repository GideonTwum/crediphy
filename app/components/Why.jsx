import React from 'react'
import { FaShieldAlt, FaBolt, FaHandshake } from 'react-icons/fa'

const Why = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security protocols and compliance standards to protect sensitive financial data and transactions."
    },
    {
      icon: <FaBolt className="text-4xl text-white" />,
      title: "Seamless Integration",
      description: "Easy integration with your existing banking systems and workflows, minimizing disruption to operations."
    },
    {
      icon: <FaHandshake className="text-4xl text-white" />,
      title: "Scalable Solutions",
      description: "Flexible and scalable platform that grows with your institution's needs and customer base."
    }
  ]

  return (
    <div className='min-h-screen bg-white py-20' id='why'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Why Partner With Us?</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Empowering financial institutions with cutting-edge technology solutions to enhance their lending operations and customer service.
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