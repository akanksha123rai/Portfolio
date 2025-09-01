import React from 'react'
import { motion } from "motion/react"
import { experience } from '../../../assets/assets'

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>Internship

            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                During my 6 month internship as a frontend developer at Staqo World pvt.ltd.
                I have successfully completed several tasks like:
            </motion.p>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-auto gap-6 my-10'>
                {experience.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 '
                        style={{ backgroundImage: `url(${project})` }}>

                        <div>

                            <div>
                                <h2>{project.title}</h2>
                                <p>{project.discription}</p>
                                <p><b>Technology Used:</b>{project.Technology}</p>
                            </div>

                            {/* <div>
                                            <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                        </div> */}

                        </div>

                    </motion.div>
                ))}
            

            </motion.div>

        </motion.div>
    )
}

export default Experience