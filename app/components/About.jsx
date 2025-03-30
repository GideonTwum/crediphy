'use client'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center gap-20 justify-center p-8 md:p-30' id='about'>
        <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-[40vw] space-y-6'
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-4xl font-bold text-[dodgerblue]'
            >
                About Us
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='text-gray-700 leading-relaxed'
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
                debitis vel eveniet dicta at odio suscipit voluptas quo mollitia a, 
                harum illo eligendi tempora, excepturi ducimus totam libero facere 
                magni aliquid similique, minus accusamus? Reiciendis, mollitia? 
                Error impedit, eveniet eligendi distinctio cupiditate, facilis suscipit 
                alias nesciunt eius laboriosam, adipisci similique.
            </motion.p>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-[40vw]'
        >
            <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/images/woman.jpg" 
                alt="about" 
                className='rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300' 
            />
        </motion.div>
    </div>
  )
}

export default About