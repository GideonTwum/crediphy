'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Starter Package',
      price: 499,
      description: 'Perfect for small financial institutions',
      features: [
        'Up to 100 assessments/month',
        'Basic API integration',
        'Standard credit evaluation',
        'Email support',
        'Basic analytics dashboard',
        'Standard SLA'
      ]
    },
    {
      name: 'Professional Package',
      price: 1499,
      description: 'Ideal for growing banks',
      features: [
        'Up to 500 assessments/month',
        'Advanced API integration',
        'Custom credit scoring models',
        'Priority support with dedicated manager',
        'Advanced analytics & reporting',
        'Enhanced SLA',
        'Custom workflow integration',
        'Training sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      description: 'Tailored for large financial institutions',
      features: [
        'Unlimited assessments',
        'Full API customization',
        'AI-powered credit analysis',
        '24/7 dedicated support team',
        'Custom analytics & BI integration',
        'Premium SLA with guaranteed uptime',
        'White-label options',
        'On-site training & consultation',
        'Custom development support'
      ]
    }
  ]

  return (
    <div id='pricing' className='w-full min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Enterprise-Grade Loan Assessment Solutions</h2>
          <p className='text-xl text-gray-600'>Streamline your loan processing with our AI-powered assessment platform</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-2xl shadow-xl p-8 ${
                tier.popular ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
              }`}
            >
              {tier.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className='mb-8'>
                <h3 className='text-2xl font-bold mb-2'>{tier.name}</h3>
                <p className={`text-lg ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <div className='mt-4'>
                  <span className='text-4xl font-bold'>
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  <span className={`text-lg ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {typeof tier.price === 'number' ? '/month' : ''}
                  </span>
                </div>
              </div>

              <ul className='space-y-4 mb-8'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <CheckIcon className={`h-5 w-5 mr-3 ${tier.popular ? 'text-blue-200' : 'text-blue-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  tier.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors duration-200`}
              >
                Schedule Demo
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16 text-center'
        >
          <p className='text-gray-600'>
            Need a custom enterprise solution? <a href='#contact' className='text-blue-600 font-semibold hover:text-blue-700'>Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing