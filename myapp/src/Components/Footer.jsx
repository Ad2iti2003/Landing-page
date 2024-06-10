
import React from 'react'

import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillLinkedin,AiFillYoutube,AiOutlineInstagram} from 'react-icons/ai'
import logo from '../images/LOGO15.png'

const Footer = () => {
  return (
    <>
    <div className='flex gap-x-24 py-9 justify-center flex-wrap  bg-neutral-200'>
        <div className=''>
            <p className='text-xl font-semibold mb-2'>GreySpire Innovation India Pvt Ltd </p>
            <div className='flex gap-x-3'>
                <Link>
                <AiFillFacebook className='text-2xl text-gray-500'/>
                </Link>
                <Link>
                <AiFillLinkedin className='text-2xl text-gray-500'/>
                </Link>
                <Link><AiFillYoutube className='text-2xl text-gray-500'/>
                    </Link>
                <Link><AiOutlineInstagram className='text-2xl text-gray-500'/></Link>
            </div>
            <p className='text-gray-500 text-sm my-4'>©2024 GreySpire Innovation India Pvt Ltd</p>
        </div>
        <div><img src={logo} className='w-20 h-20' /></div>
        
        <div className='text-gray-800 '>
            <h1 className='font-semibold text-black'>Contact Us</h1>
            <p>1/4, Gaondevi Darshan Ch, Kamani, Dombivali-E,</p>
            <p>Maharashtra-421201</p>
            <p>Email: <a href="">info@greyspireinnovation.com</a></p>
        </div>
    </div>
      
    </>
  )
}

export default Footer
