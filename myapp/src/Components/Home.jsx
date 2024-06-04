import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../images/pexel2.webp'
import img2 from '../images/pexel4.jpeg'
import img3 from '../images/pexel9.jpeg'
import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img4 from '../images/pexel10.jpeg'
import { MdGroups } from "react-icons/md";
import {AccessTimeOutlined} from '@mui/icons-material';
import { FaGift } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import img5 from '../images/pexel12.jpeg';

const Home = () => {
  return (
    <div className='bg-black'>
    <Carousel  showThumbs={false} showIndicators={false}>
        <div>
            <img src={img1} className='max-h-screen opacity-40' />
            <Box component={'figcaption'} className='sm:-translate-y-72 -translate-y-40 lg:-translate-y-96 bg-black m-auto bg-opacity-10' sx={{width:{sx:'full',sm:'770px'}}}>
            <h1 className='font-semibold lg:text-7xl sm:text-5xl text-2xl text-white'>Bring Your Business With Us</h1>
            <p className='font-semibold lg:text-5xl sm:text-4xl text-xl text-white'>Technology Meets Real-World</p>
            </Box>

        </div>
        <div>
            <img src={img2} className='max-h-screen opacity-85' />
            

        </div>
        <div>
            <img src={img3} className='max-h-screen opacity-85' />
            

        </div>
    </Carousel>

    <h1 className='lg:text-7xl md:text-6xl text-3xl text-center mb-20 font-bold opacity-90 text-red-500'>About Us</h1>
    <Box className='flex sm:flex-row flex-col text-center justify-center p-10 border-2 border-opacity-60 border-red-500 rounded-2xl ml-10 mr-10 ' sx={{height:{sx:"full",sm:"120vh",lg:"80vh"}}}>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}} className='pb-6 '>

        <img src={img4} className='hover:-translate-y-2 rounded-2xl shadow-2xl shadow-zinc-50 border-white border-opacity-95 opacity-50 border-2 lg:h-5/6 h-11/12 w-11/12' />
        

      </Box>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}} className=' bg-black'>
        
        <h2 className='lg:text-3xl text-lg text-white font-extrabold'>We Make Creativity Work For Your Brand!</h2>
        <p className='text-white lg:text-xl text-sm lg:leading-normal '>At Greyspire Innovation, We Don't Just Embrace Creativity; We Make It Work Tirelessly For Your Brand. Our Team Is A Collective Of Visionaries, Constantly Immersed In The Creative Process, Generating Groundbreaking Ideas Around The Clock. At The Intersection Of Imagination And Innovation, We Redefine Possibilities. With A Fusion Of Diverse Skills, Our Ensemble At Greyspire Innovation Stands Ready To Address The Unique Needs Of Your Brand. We Specialize In Navigating The Cutting Edge Of Technology, Seamlessly Integrating The Latest Advancements Into Our Solutions. From Artificial Intelligence To Emerging Technologies, We Thrive On Transforming Concepts Into Reality.</p>

      </Box>
    </Box>

    <div className='mt-20 '>
      
      <div  className='w-11/12 border-red-500 border-2 lg:h-96 justify-center pt-14 flex-wrap h-full pb-16 gap-x-8 flex z-0 rounded-xl m-auto'>
        <div className=' text-white text-center bg-opacity-10 justify-center w-52 h-72 my-3 border-4 border-red-800 rounded-lg bg-neutral-950 shadow-lg shadow-red-200'>
        <AccessTimeOutlined className='text-white ' style={{ fontSize: 60 }}/>
        <h1>100</h1>
        <p>Working Hours</p>
        </div>
        <div className='text-white justify-center bg-opacity-10 bg-neutral-950 text-center w-52 h-72 my-3 border-4 border-red-800 rounded-lg shadow-lg shadow-red-200'>
          
        <FaGift className='text-white ' style={{ fontSize: 60 }}/>
        <h1>2</h1>
        <p>Completed Projects</p>
        </div>
        <div className='text-white justify-center bg-opacity-10 bg-neutral-950 text-center w-52 h-72 my-3 border-4 border-red-800 rounded-lg shadow-lg shadow-red-200'>
        <MdGroups className='text-white ' style={{ fontSize: 60 }}/>
        <h1>2</h1>
        <p>Happy Clients</p>
        </div>
        <div className='text-white justify-center bg-opacity-10 bg-neutral-950 text-center w-52 h-72 my-3 border-4 border-red-800 rounded-lg shadow-lg shadow-red-200'>
        <FaAward className='text-white ' style={{ fontSize: 60 }}/>
        <h1>1</h1>
        <p>Awards Received</p>

        </div>
      </div>


    </div>

    </div>
  )
}

export default Home
