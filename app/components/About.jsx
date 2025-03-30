'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col md:flex-row items-center gap-8 md:gap-20 justify-center p-8 md:p-30' id='about'>
        <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full md:max-w-[40vw] space-y-6 text-center md:text-left'
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-3xl md:text-4xl font-bold text-[dodgerblue]'
            >
                About Crediphy
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-gray-700 leading-relaxed text-sm md:text-base'
            >
                Welcome to Crediphy, your trusted B2B partner in intelligent credit assessment and risk management. 
                We leverage advanced AI technology to help businesses make data-driven decisions when evaluating 
                potential borrowers. Our platform provides comprehensive creditworthiness analysis, risk scoring, 
                and predictive insights to ensure your business extends credit with confidence.
            </motion.p>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='text-gray-700 leading-relaxed text-sm md:text-base'
            >
                With Crediphy, you can streamline your credit assessment process, reduce default risks, 
                and optimize your lending decisions. Our sophisticated algorithms analyze multiple data points 
                to provide accurate creditworthiness evaluations, helping you identify reliable business partners 
                while protecting your company's financial interests.
            </motion.p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='w-full md:max-w-[40vw]'
        >
            <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/meetings.jpg" 
                alt="about" 
                className='w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300' 
            />
        </motion.div>
    </div>
  )
}

export default About