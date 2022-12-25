import { Box, Container, Typography } from '@mui/material'

const GwrAbout = () => {
  return (
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
  )
}

export default GwrAbout