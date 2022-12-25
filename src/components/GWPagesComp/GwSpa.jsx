import {Box, Container, Typography} from '@mui/material'

const GwSpa = () => {
  return (
    <Box sx={{display:'flex', mt:4}}>
    <Container maxWidth='md'>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/05/Kayan-bg1-01.jpg' />
            </Box>

            <Typography variant='h5' sx={{fontWeight:'bold'}}>SPA AND WELLNESS</Typography>

            <Typography sx={{ mt:2}} >Seasoned and trained experts, cosy and soothing settings and state-of-the-art amenities come together to pamper you during your time at The Greenwood Hotels & Resorts.</Typography>

                   
        </Box>
    </Container>
</Box>
  )
}

export default GwSpa