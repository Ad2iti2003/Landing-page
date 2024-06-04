import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import logo from '../images/LOGO12.png'
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
      
   <Box sx={{
   flexGrow: 1,
   position: 'sticky',
   zIndex: 10,
   top: 0,
      
      
      
  }} component={'nav'}>
     <AppBar position="sticky">
     <Toolbar className=' text-white bg-black'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <img src={logo} className='w-20 lg:w-40' />
          </Typography>
         <Box sx={{display:{xs:'none',sm:'block'}}} className='lg:my-5'>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl' to='/'>Home</Link></Button>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>About us</Link></Button>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>Services</Link></Button>
        <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>Solution</Link></Button>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>Careers</Link></Button>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>Insights</Link></Button>
         <Button color="inherit"><Link className='hover:underline hover:underline-offset-8 hover:decoration-red-500 hover:decoration-2 lg:text-xl'>Contact us</Link></Button>

        </Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
           sx={{ mr: 2 }}
          >
          <MenuIcon sx={{display:{xs:'block',sm:'none'}}} onClick={toggleDrawer(true)} />
           <Drawer open={open} onClose={toggleDrawer(false)}>
           {DrawerList}
           </Drawer>
         </IconButton>
       </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
