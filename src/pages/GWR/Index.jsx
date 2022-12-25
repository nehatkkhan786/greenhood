import { Box, Container, Typography, Tabs, Tab } from '@mui/material'
import React, {useState} from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Nav2 from '../../components/Nav2/Nav2'
import Header from '../../components/header/Header'
import HomeFamily from '../../components/HomeFamily/HomeFamily'
import Properties from '../../components/properties/Properties'


import {BiHome, BiBed} from 'react-icons/bi'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import GwrAbout from '../../components/GWRPagesComp/GwrAbout'
import GwrStay from '../../components/GWRPagesComp/GwrStay'
import GwrDinnings from '../../components/GWRPagesComp/GwrDinnings'

const Index = () => {

    const [tabIndex, setTabIndex] = useState(0)
        
    const handleChange = (event, newValue)=>{
      setTabIndex(newValue)
    }
    
       
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <Nav2/>
        <Tabs value= {tabIndex} onChange={handleChange} variant='scrollable' allowScrollButtonsMobile  indicatorColor="primary">
            <Tab label='Home' icon={<BiHome size={20}/>}></Tab>
            <Tab label='Stay' icon={<BiBed size={20}/>}></Tab>
            <Tab label='F & B' icon={<GiForkKnifeSpoon size={20}/>}></Tab>
            <Tab label='Events' icon={<CgProfile size={20}/>}></Tab>
            <Tab label='Spa' icon={<CgProfile size={20}/>}></Tab>
        </Tabs>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            
            <Container maxWidth='md'>
            {tabIndex === 0 && (
                <GwrAbout/>
            )}
            {tabIndex === 1 && (
                <GwrStay/>
            )}

            {tabIndex === 2 && (
               <GwrDinnings/>
            )}
            </Container>
        </Box>
  </Box>
  )
}

export default Index