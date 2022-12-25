import {Box, Container, Typography} from '@mui/material'

const GwEvents = () => {
  return (
    <Box sx={{display:'flex', mt:4, mb:5}}>
    <Container maxWidth='md'>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/gw-events.jpg' />
            </Box>

            <Typography variant='h5' sx={{fontWeight:'bold'}}>Events And Bookings</Typography>

            <Typography sx={{ mt:2}} > Choose from an unparalleled selection of banquet halls, lush lawns and conferencing facilities across all of The Greenwood properties. Ideal for hosting gatherings, both intimate and large, our variety of event spaces are accompanied with polite staff, personalised facilities and a seamless overall experience.</Typography>

                   
        </Box>
    </Container>
</Box>
  )
}

export default GwEvents