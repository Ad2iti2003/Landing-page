import React from 'react'
import {Carousel} from 'react-responsive-carousel'


import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../images/pexel4.jpeg'



const Home = () => {
  return (
    <div className=' bg-inherit'>
    <Carousel  showThumbs={false} showIndicators={false}>
        <div className=' pb-16'>
          <div className='bg-black'>
            <img src={img1} className='max-h-screen opacity-40 ' />
            </div>
            <Box component={'figcaption'} className='sm:-translate-y-56 -translate-y-40 lg:-translate-y-96 bg-slate-700 m-auto bg-opacity-10' sx={{width:{sx:'full',sm:'770px'}}}>
            <h1 className='mb-4 font-semibold lg:text-5xl sm:text-3xl text-xl text-white'>Bring Your Business With Us</h1>
            <p className='font-extralight lg:text-3xl sm:text-xl text-md text-white'>Technology Meets Real-World</p>
            </Box>

        </div>
        
    </Carousel>

    <h1 className='text-center text-3xl font-bold'>Who we are</h1>
    <p className='p-10 mb-4'>At Greyspire Innovation, We Don t Just Embrace Creativity; We Make It Work Tirelessly For Your Brand. Our 
Team Is A Collective Of Visionaries, Constantly Immersed In The Creative Process, Generating Groundbreaking 
Ideas Around The Clock. At The Intersection Of Imagination And Innovation, We Redefine Possibilities. With A 
Fusion Of Diverse Skills, Our Ensemble At Greyspire Innovation Stands Ready To Address The Unique Needs Of 
Your Brand. We Specialize In Navigating The Cutting Edge Of Technology, Seamlessly Integrating The Latest 
Advancements Into Our Solutions. From Artificial Intelligence To Emerging Technologies, We Thrive On 
Transforming Concepts Into Reality</p>

<h1 className='text-center text-3xl font-bold'>Our Services</h1>
<div className='flex flex-wrap justify-center p-4 gap-2 lg:gap-x-12'>
  <div className='bg-sky-500 my-2 p-4 text-center rounded-lg w-80 shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-2'>Embedded Engineering</h1>
  <p className='text-lg '>Our Comprehensive Hardware 
Development Services Span Both 
Design And Implementation. 
Whether It Involves Enhancing 
Existing Hardware Or Crafting 
Innovative Solutions For Enterprise 
Needs, Our Expert Engineers Are 
Ready To Tackle The Challenge</p>
  </div>
  <div className='bg-sky-500 my-2 p-4 w-80 text-center rounded-lg shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-2'>Automotive & EVs</h1>
    <p className='text-lg '>Our Embedded Automotive 
Development Services Encompass 
A Spectrum Of Expertise, Spanning 
From System Architecture To 
Software Integration. Whether It's 
Elevating An Existing System Or 
Crafting Next-Gen Automotive 
Solutions, Our Engineers Thrive On 
The Challenge</p>
    </div>
  <div className='bg-sky-500 my-2 p-4 w-80 text-center rounded-lg shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-2'>IoT & AI</h1>
    <p className='text-lg'>Our AI And Machine Learning 
Development Services Encompass 
A Wide Array Of Capabilities, 
Ranging From Model Training To 
Deployment. Whether It's Elevating 
An Existing AI/ML System Or 
Architecting Next-Level Solutions, 
Our Team Of Experts Excels In 
Meeting The Challenges Of The AI 
And Machine Learning Landscape</p>
    </div>
</div>

    </div>
  )
}

export default Home
