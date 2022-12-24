import { Box, Container } from '@mui/material'
import React from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Nav2 from '../../components/Nav2/Nav2'
import Header from '../../components/header/Header'
import HomeFamily from '../../components/HomeFamily/HomeFamily'
import Properties from '../../components/properties/Properties'
import NavTabs from '../../components/NavTabs/NavTabs'

const Home = () => {

  return (
  <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <Nav2/>
        <NavTabs/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
                   <About   /> 
            </Container>
        </Box>
        <Box>
        <CategoryTabs/>
            
        </Box>


  </Box>
  )
}

export default Home