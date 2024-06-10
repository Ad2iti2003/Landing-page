import React from 'react'

import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import Drawer from '@mui/material/Drawer';

import logo2 from '../images/LOGO15.png'




const Header = () => {
    const [open, setOpen] = React.useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
        
          
            <Box className='flex mt-10 text-white' flexDirection={'column'}>

                <img src={logo2} className='w-20 m-auto pb-3'/>
                <Button className='block'><Link className='text-cyan-950 ' to='/'>Automotive</Link></Button>
                <Button className='block'><Link className='text-cyan-950 '>IoT</Link></Button>
                <Button className='block'><Link className='text-cyan-950 '>Services</Link></Button>
                <Button className='block'><Link className='text-cyan-950 '>About us</Link></Button>
                <Button className='block'><Link className='text-cyan-950 '>Contact us</Link></Button>

            </Box>
          
         
        
      </Box>
    );


  return (
      <Box className='bg-cyan-950 justify-between flex shadow-sm shadow-cyan-950 text-white' sx={{
        flexGrow: 1,
        position: 'sticky',
        zIndex: 10,
        top: 0,
        
      
           
           
           
       }} component={'nav'}>
        <Box className='flex lg:ml-10 ml-5'>
          <img src={logo2} className='lg:w-24 lg:h-24 w-16 h-16 mt-2 mb-1'/>
          <p className=' ml-3 mt-6 lg:mt-10 text-xl'>GreySpire Innoivation</p>
        </Box>
        <Box className='flex mt-6 lg:mt-10 lg:ml-28' sx={{display:{xs:'none',sm:'block'}}}>
          
            <Button><Link className='text-white  lg:text-base text-sm px-0 lg:px-1 '>Automotive</Link></Button>

         
          
            <Button><Link className='text-white  lg:text-base text-sm px-0 lg:px-1 '>IoT</Link></Button>

          
          
            <Button><Link className='text-white lg:text-base text-sm px-0 lg:px-2'>Services</Link></Button>

         
          
            <Button><Link className='text-white lg:text-base text-sm px-0 lg:px-2'>About us</Link></Button>

          
          
  <Button> <Link className='text-white lg:text-base text-sm px-0 lg:px-2'>
            Contact us
            </Link></Button>

          
          
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
           sx={{ mr: 2 }}
           
          >
          <MenuIcon sx={{display:{xs:'block',sm:'none'}}} onClick={toggleDrawer(true)} />
           <Drawer open={open} onClose={toggleDrawer(false)} className='text-white'>
           {DrawerList}
           </Drawer>
         </IconButton>
      </Box>
  )
}

export default Header
