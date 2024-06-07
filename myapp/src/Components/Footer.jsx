import { Divider } from '@mui/material'
import React from 'react'
import img from '../images/LOGO15.png'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillLinkedin,AiFillYoutube,AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <Divider/>
    <div className='flex justify-between my-9'>
        <div className=''>
            <p>GreySpire Innovation India Pvt Ltd </p>
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
        </div>
        
        <div className=''>
            <h1 className='font-semibold'>Contact Us</h1>
            <p>1/4, Gaondevi Darshan Ch, Kamani</p>
            <p>Dombivali-E,</p>
            <p>Maharashtra-421201</p>
            <p>Email: <a href="">info@greyspireinnovation.com</a></p>
        </div>
    </div>
      
    </>
  )
}

export default Footer
