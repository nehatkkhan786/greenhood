import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Nav2 from '../../components/Nav2/Nav2'
import Header from '../../components/header/Header'
import HomeFamily from '../../components/HomeFamily/HomeFamily'
import Properties from '../../components/properties/Properties'
import NavTabs from '../../components/NavTabs/NavTabs'
import {BiHome, BiBed} from 'react-icons/bi'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'

import { TabContext, TabList } from '@mui/lab'
import GwStay from '../../components/GWPagesComp/GwStay'
import GwDinning from '../../components/GWPagesComp/GwDinning'
import GwEvents from '../../components/GWPagesComp/GwEvents'
import GwSpa from '../../components/GWPagesComp/GwSpa'




const TabsMenu = [
  { id:0, name:'Home', icon:<BiHome size={20} color='#173632' />},
  { id:1, name:'Stay', icon:<BiBed size={20} color='#173632' />},
  { id:2, name:'F & B', icon:<GiForkKnifeSpoon size={20} color='#173632' /> },
  { id:3, name:'Events', icon:<CgProfile size={20} color='#173632' /> },
  { id:4, name:'Spa', icon:<CgProfile size={20} color='#173632' /> },
  
]

const Home = () => {
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
                 <About/>
               )}
               {tabIndex === 1 && (
                <GwStay/>
               )}

            {tabIndex === 2 && (
                 <GwDinning/>
               )}

            {tabIndex === 3 && (
                <GwEvents/>
               )}
            {tabIndex === 4 && (
                 <GwSpa/>
               )}
              </Container>
          </Box>
  </Box>
  )
}

export default Home