import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../images/pexel2.webp'
import img2 from '../images/pexel4.jpeg'
import img3 from '../images/pexel9.jpeg'
import { Box } from '@mui/material'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img4 from '../images/pexel10.jpeg'

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

    <h1 className='lg:text-7xl md:text-6xl text-3xl text-center mb-20 font-bold opacity-90 text-white underline decoration-green-800 underline-offset-8'>About Us</h1>
    <Box className='flex sm:flex-row flex-col text-center justify-center p-10 border-2 border-opacity-60 border-slate-300 rounded-2xl pb-10 ml-10 mr-10' sx={{height:{sx:"full",sm:"110vh"}}}>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}} className='pb-6 '>

        <img src={img4} className='hover:-translate-y-2 rounded-2xl shadow-2xl shadow-zinc-50 border-white border-opacity-95 opacity-50 border-2 lg:h-4/6 h-96 w-11/12' />
        

      </Box>
      <Box component={'div'} sx={{width:{sx:'full',sm:'50%'}}} className='lg:p-5 bg-black'>
        
        <h2 className='lg:text-3xl text-lg text-white font-extrabold'>We Make Creativity Work For Your Brand!</h2>
        <p className='text-white lg:text-xl text-sm lg:leading-relaxed '>At Greyspire Innovation, We Don't Just Embrace Creativity; We Make It Work Tirelessly For Your Brand. Our Team Is A Collective Of Visionaries, Constantly Immersed In The Creative Process, Generating Groundbreaking Ideas Around The Clock. At The Intersection Of Imagination And Innovation, We Redefine Possibilities. With A Fusion Of Diverse Skills, Our Ensemble At Greyspire Innovation Stands Ready To Address The Unique Needs Of Your Brand. We Specialize In Navigating The Cutting Edge Of Technology, Seamlessly Integrating The Latest Advancements Into Our Solutions. From Artificial Intelligence To Emerging Technologies, We Thrive On Transforming Concepts Into Reality.</p>

      </Box>
    </Box>

    </div>
  )
}

export default Home
