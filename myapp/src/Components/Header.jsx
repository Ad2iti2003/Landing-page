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
        
          
            <Box className='flex mt-6 text-white' flexDirection={'column'}>

                <img src={logo2} className='w-20 m-auto pb-3'/>
                <Button className='block'><Link className='text-black ' to='/'>Home</Link></Button>
                <Button className='block'><Link className='text-black '>About us</Link></Button>
                <Button className='block'><Link className='text-black '>Services</Link></Button>
                <Button className='block'><Link className='text-black '>Solutions</Link></Button>
                <Button className='block'><Link className='text-black '>Careers</Link></Button>
                <Button className='block'><Link className='text-black '>Insights</Link></Button>
                <Button className='block'><Link className='text-black '>Contact us</Link></Button>

            </Box>
          
         
        
      </Box>
    );


  return (
      <Box className='flex h-16 bg-black text-white justify-between' sx={{
        flexGrow: 1,
        position: 'sticky',
        zIndex: 10,
        top: 0,
      
           
           
           
       }} component={'nav'}>
        <Box className='flex'>
          <img src={logo2} className='w-12 h-12 mt-2 ml-3'/>
          <p className='p-4'>GreySpire Innoivation </p>
        </Box>
        <Box className='flex pl-4 pb-4 pt-4 float-end' sx={{display:{xs:'none',sm:'block'}}}>
          <Button color='inherit'>
            <Link className='text-white'>Automotive</Link>

          </Button>
          <Button color='inherit'>
            <Link className='text-white'>IoT</Link>

          </Button>
          <Button color='inherit'>
            <Link className='text-white'>Services</Link>

          </Button>
          <Button color='inherit'>
            <Link className='text-white'>About us</Link>

          </Button>
          <Button color='inherit'>
            <Link className='text-white'>
            Contact Us
            </Link>

          </Button>
          
        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
           sx={{ mr: 2 }}
          >
          <MenuIcon sx={{display:{xs:'block',sm:'none'}}} onClick={toggleDrawer(true)} />
           <Drawer open={open} onClose={toggleDrawer(false)} className='twxt-white'>
           {DrawerList}
           </Drawer>
         </IconButton>
      </Box>
  )
}

export default Header
