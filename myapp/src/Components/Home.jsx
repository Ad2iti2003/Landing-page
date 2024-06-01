import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../images/pexel2.webp'
import img2 from '../images/pexel4.jpeg'
import img3 from '../images/pexel9.jpeg'
import { Box, Container } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img4 from '../images/pexel6.webp'

const Home = () => {
  return (
    <div>
    <Carousel  showThumbs={false} showIndicators={false}>
        <div>
            <img src={img1} className='max-h-screen opacity-75' />
            <Box component={'figcaption'} className='md:-translate-y-72 -translate-y-40 lg:-translate-y-96 bg-neutral-200 m-auto bg-opacity-10' sx={{width:{sx:'full',sm:'770px'}}}>
            <h1 className='font-semibold lg:text-7xl md:text-6xl text-3xl'>Bring Your Business With Us</h1>
            <p className='font-semibold lg:text-5xl md:text-4xl text-xl'>Technology Meets Real-World</p>
            </Box>

        </div>
        <div>
            <img src={img2} className='max-h-screen opacity-85' />
            

        </div>
        <div>
            <img src={img3} className='max-h-screen opacity-85' />
            

        </div>
    </Carousel>

    <h1 className='lg:text-7xl md:text-6xl text-3xl text-center underline decoration-green-800 underline-offset-8 mb-20 font-bold'>About Us</h1>
    <Box className='flex sm:flex-row flex-col text-center justify-center'>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}}>
        <img src={img4} className='rounded-full w-3/4  m-auto shadow-2xl opacity-85 shadow-slate-800 hover:-translate-y-9 pb-2 pr-2 mb-9 ' />

      </Box>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}} className='p-5'>
        
        <h2 className='text-4xl'>We Make Creativity Work For Your Brand!</h2>
        <p>At Greyspire Innovation, We Don't Just Embrace Creativity; We Make It Work Tirelessly For Your Brand. Our Team Is A Collective Of Visionaries, Constantly Immersed In The Creative Process, Generating Groundbreaking Ideas Around The Clock. At The Intersection Of Imagination And Innovation, We Redefine Possibilities. With A Fusion Of Diverse Skills, Our Ensemble At Greyspire Innovation Stands Ready To Address The Unique Needs Of Your Brand. We Specialize In Navigating The Cutting Edge Of Technology, Seamlessly Integrating The Latest Advancements Into Our Solutions. From Artificial Intelligence To Emerging Technologies, We Thrive On Transforming Concepts Into Reality.</p>

      </Box>
    </Box>

    </div>
  )
}

export default Home
