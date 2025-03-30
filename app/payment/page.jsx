'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'

const PricingPage = () => {
  const router = useRouter()

  const handleButtonClick = (tier) => {
    if (tier.name === 'Free') {
      router.push('/dashboard')
    } else if (tier.name === 'Subscription') {
      router.push('/dashboard')
    } else if (tier.name === 'Premium') {
      router.push('/dashboard')
    }
  }

  const tiers = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        'Basic loan calculations',
        'Standard support',
        'Limited loan types',
        'Basic analytics'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Subscription',
      price: 29,
      description: 'Best for regular users',
      features: [
        'Advanced loan calculations',
        'Priority support',
        'All loan types',
        'Advanced analytics',
        'Custom reports',
        'API access'
      ],
      buttonText: 'Subscribe Now',
      popular: true
    },
    {
      name: 'Premium',
      price: 99,
      description: 'For power users',
      features: [
        'Everything in Subscription',
        'Dedicated support',
        'Custom integrations',
        'White-label options',
        'Advanced API access',
        'Training sessions'
      ],
      buttonText: 'Go Premium',
      popular: false
    }
  ]

  return (
    <div className='w-full min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>Simple, transparent pricing</h2>
          <p className='text-xl text-gray-600'>Choose the plan that's right for you</p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {tiers.map((tier, index) => (
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
                    ${tier.price}
                  </span>
                  <span className={`text-lg ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    /month
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
                onClick={() => handleButtonClick(tier)}
                className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  tier.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors duration-200`}
              >
                {tier.buttonText}
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
            Need a custom solution? <a href='#contact' className='text-blue-600 font-semibold hover:text-blue-700'>Contact our team</a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default PricingPage