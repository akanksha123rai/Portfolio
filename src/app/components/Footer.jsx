import React from 'react'
import { assets } from '../../../assets/assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
       <div className='text-center'>
        {/* <Image src={assets.logo} alt="" className='w-36 mx-auto mb-2'/> */}

        <div>
         {/* <Image src={assets.mail_icon} alt='' className='w-6'/>
          akanksharai332@gmail.com */}
        </div>
       </div> 

       <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href='akanksha123rai'>GitHub</a></li>
            <li><a target='_blank' href='linkdin.com/in/akanksha rai'>LinkedIn</a></li>
        </ul>
       </div>
    </div>
  )
}

export default Footer