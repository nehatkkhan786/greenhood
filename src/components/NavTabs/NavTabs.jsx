import { Box, Button, Stack, Tab, Tabs, Typography, } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel';

import {useState} from 'react'
import {BiHome, BiBed} from 'react-icons/bi'
import { BsFillBagCheckFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import AppContext from '../../context/GreenwoodAppContext'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import { TabContext, TabList } from '@mui/lab';



const TabsMenu = [
    { id:1, name:'Home', icon:<BiHome size={20} color='#173632' />},
    { id:2, name:'Stay', icon:<BiBed size={20} color='#173632' />},
    { id:3, name:'F & B', icon:<GiForkKnifeSpoon size={20} color='#173632' /> },
    { id:4, name:'Events', icon:<CgProfile size={20} color='#173632' /> },
    { id:5, name:'Spa', icon:<CgProfile size={20} color='#173632' /> },
    
]

const NavTabs = () => {

    const [value, setValue] = useState(1)

    const handleChange = (event, newValue)=>{
        setValue(newValue)
    }

  return (
    // <Box  sx={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#173632', position:'sticky',}}>
        <Stack sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <TabContext value={value} >
           <TabList  onChange={handleChange} variant='scrollable' allowScrollButtonsMobile  indicatorColor="primary" >
                {TabsMenu.map((item)=>{
                    return ( 
                            <Tab key={item.id} label={item.name} icon={item.icon} value={item.id} />
                    )
                })}
           </TabList>
            <TabPanel value='1' >
                    <Typography>Hello Word</Typography>
                </TabPanel>
           </TabContext>
       
        </Stack>
    // </Box>
  )
}

export default NavTabs