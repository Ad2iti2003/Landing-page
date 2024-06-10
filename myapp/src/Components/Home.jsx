import React from 'react'
import {Carousel} from 'react-responsive-carousel'


import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../images/img1.png'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import aws from '../images/aws.png'
import nxp from '../images/nxp.png'
import quectel from '../images/quectel.png'
import arrow from '../images/arrowelectronics.png'
import TI from '../images/TI.png'



const Home = () => {
  return (
    <div className=' bg-inherit'>
    <Carousel  showThumbs={false} showIndicators={false} showStatus={false}>
        <div className=' pb-16'>
          <div className='bg-black'>
            <img src={img1} className='max-h-screen opacity-50  ' />
            </div>
            <Box component={'figcaption'} className='sm:-translate-y-56 -translate-y-36 lg:-translate-y-96 bg-slate-700 m-auto bg-opacity-5' sx={{width:{sx:'full',sm:'770px'}}}>
            <h1 className='mb-4 font-semibold lg:text-5xl sm:text-3xl text-xl text-white'>Bring Your Business With Us</h1>
            <p className='font-extralight lg:text-2xl sm:text-lg text-sm text-white'>Technology Meets Real-World</p>
            </Box>

        </div>
        
    </Carousel>

    



    <h1 className='text-center text-4xl font-bold -mt-24'>Who we are</h1>
    <p className='p-10 mb-4 text-xl'>At Greyspire Innovation, We Don t Just Embrace Creativity; We Make It Work Tirelessly For Your Brand. Our 
Team Is A Collective Of Visionaries, Constantly Immersed In The Creative Process, Generating Groundbreaking 
Ideas Around The Clock. At The Intersection Of Imagination And Innovation, We Redefine Possibilities. With A 
Fusion Of Diverse Skills, Our Ensemble At Greyspire Innovation Stands Ready To Address The Unique Needs Of 
Your Brand. We Specialize In Navigating The Cutting Edge Of Technology, Seamlessly Integrating The Latest 
Advancements Into Our Solutions. From Artificial Intelligence To Emerging Technologies, We Thrive On 
Transforming Concepts Into Reality</p>

<h1 className='text-center text-4xl font-bold mb-16'>Our Technology Stack</h1>
<div className='flex flex-wrap gap-x-6 justify-center'>
  <div className=' text-2xl w-96 '><h1 className='text-cyan-900 my-3 font-bold'>Hardware</h1>
  <img src={img2} className='h-96 w-11/12 rounded-3xl'/>
  </div>
  <div className=' text-2xl w-96'><h1 className='text-cyan-900 my-3 font-bold'>Software</h1>
  <img src={img3} className='h-96 w-11/12 rounded-3xl' />
  </div>
  <div className=' text-2xl w-96'><h1 className='text-cyan-900 my-3 font-bold'>Cloud </h1>
  <img src={img4} className='h-96 w-11/12 rounded-3xl' />
  </div>
</div>
<h1 className='text-center mt-20 mb-16 text-4xl font-bold'>Our Partners</h1>
<div className='flex justify-center gap-16 flex-wrap'>
  <div className='border-4 border-cyan-900 w-52 h-24 rounded-2xl'>
    <img src={nxp} className='w-44 ml-2 mt-1 h-20' />
  </div>
  <div className='border-4 border-cyan-900 w-52 h-24 rounded-2xl'>
    <img src={quectel} className='w-44 ml-2 mt-1 h-20' />
  </div>
  <div className='border-4 border-cyan-900 w-52 h-24 rounded-2xl'>
    <img src={aws} className='w-44 ml-2 mt-1 h-20' />
  </div>
  <div className='border-4 border-cyan-900 w-52 h-24 rounded-2xl'>
    <img src={arrow} className='w-44 ml-2 mt-1 h-20' />
  </div>
  <div className='border-4 border-cyan-900 w-52 h-24 rounded-2xl'>
    <img src={TI} className='w-44 ml-2 mt-1 h-20' />
  </div>
</div>


<h1 className='text-center mt-20 mb-16 text-4xl font-bold'>Our Services</h1>
<div className='flex flex-wrap justify-center mb-20 p-4 gap-2 lg:gap-x-12'>
  <div className='bg-cyan-900 text-white hover:text-black hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-200 hover:to-sky-300 my-2 p-4 text-center rounded-lg w-80 shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-6'>Embedded Engineering</h1>
  <p className='text-lg '>Our Comprehensive Hardware 
Development Services Span Both 
Design And Implementation. 
Whether It Involves Enhancing 
Existing Hardware Or Crafting 
Innovative Solutions For Enterprise 
Needs, Our Expert Engineers Are 
Ready To Tackle The Challenge</p>
  </div>
  <div className=' bg-cyan-900 text-white hover:text-black hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-200 hover:to-sky-300 my-2 p-4 w-80 text-center rounded-lg shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-6'>Automotive & EVs</h1>
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
  <div className=' bg-cyan-900 text-white hover:text-black hover:-translate-y-2 hover:bg-gradient-to-r hover:from-purple-200 hover:to-sky-300 my-2 p-4 w-80 text-center rounded-lg shadow-lg shadow-slate-600'>
    <h1 className='font-bold text-2xl mb-6'>IoT & AI</h1>
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
