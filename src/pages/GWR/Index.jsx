import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Nav2 from '../../components/Nav2/Nav2'
import Header from '../../components/header/Header'
import HomeFamily from '../../components/HomeFamily/HomeFamily'
import Properties from '../../components/properties/Properties'

const Index = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <Nav2/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
            <Box sx={{display:'flex', mt:2}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box sx={{ }}>
                    <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Reception3.png' />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold'}}>ABOUT THE GREENWOOD RESORT</Typography>

                <Typography sx={{mt:2, textAlign:'center'}} > Propped against the lush hills of Guwahati, Assam—The Gateway to Northeast India—The Greenwood Resort welcomes you to a luxurious stay just a stone’s throw from the busy cityscape. Located down the hill in Khanapara, just a few meters off National Highway 37, The Greenwood perfectly marries the splendour of a rich, modern-day resort with the serenity of a natural retreat.
A pathway flanked by palms, teaks, and other trees ushers you into an authentic Assamese experience that will stay with you forever. On entering the space, you get a close peek into the northeastern state’s cultural and geographical diversity and richness that have historically and rightfully set a distinct mark on the world</Typography>

                
                
            </Box>
        </Container>
   </Box>

                  
            </Container>
        </Box>
        <Box>
        <CategoryTabs/>
            
        </Box>


  </Box>
  )
}

export default Index