import React from 'react'
import {Box, Container, Typography} from '@mui/material'


const GwrStay = () => {
  return (
    <Box sx={{display:'flex', mt:4}}>
    <Container maxWidth='md'>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/GWROOMS_050-1.jpg' />
            </Box>

            <Typography variant='h5' sx={{fontWeight:'bold'}}>Staying At Greenwood Resort</Typography>

            <Typography sx={{ mt:2}} >Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.</Typography>

                   
        </Box>
    </Container>
</Box>
  )
}

export default GwrStay