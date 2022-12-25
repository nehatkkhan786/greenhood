import {Box, Typography, Container, Tabs, Tab} from '@mui/material'
import {useState} from 'react'
import { GiBoxingRing, GiBoxTrap } from 'react-icons/gi'


const GwrDinnings = () => {
    const [tabIndex, setTabIndex] = useState(0)
        
    const handleChange = (event, newValue)=>{
      setTabIndex(newValue)
    }
  return (

    <Box sx={{display:'flex', mt:4, mb:10}}>
    <Container maxWidth='md'>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>

            {tabIndex === 0 && (
                <Box sx={{mb:10}}>
                     <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_04.jpg' />
            </Box>

            <Typography sx={{}}>Settle in for a pleasant and joyful time at our bar, Mynah’s , a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.</Typography>
                </Box>
            )}

        {tabIndex === 1 && (
                <Box sx={{mb:10}}>
                     <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/09/bagan-2x.jpg' />
            </Box>

            <Typography sx={{}}>Settle in for a pleasant and joyful time at our bar, Mynah’s , a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.</Typography>
                </Box>
            )}

        {tabIndex === 2 && (
                <Box sx={{mb:10}}>
                     <Box sx={{}}>
                        <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_12.jpg' />
                     </Box>

                        <Typography sx={{}}>Settle in for a pleasant and joyful time at our bar, Mynah’s , a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.</Typography>
                </Box>
            )}
        
        {tabIndex === 3 && (
                <Box sx={{mb:10}}>
                     <Box sx={{}}>
                        <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/jolpan.jpg' />
                     </Box>

                        <Typography sx={{fontWeight:'bold', mt:2}}>Coming Soon...</Typography>
                </Box>
            )}

           

           <Box sx={{width:'100%', mt:4, position:'fixed', bottom:0, bgcolor:'#173632', color:'white'}}>

            <Tabs value= {tabIndex} onChange={handleChange} variant='scrollable' allowScrollButtonsMobile textColor="inherit" indicatorColor="inherit" >
                <Tab label='Bar & Bistro'/>
                <Tab label='Poolside Cafe'/>
                <Tab label='Modern Dinning'/>
                <Tab label='Ethnic Cuisine'/>
             </Tabs>     
        </Box>
           
                      
        </Box>
    </Container>
</Box>
  )
}

export default GwrDinnings