import {Box, Container, Typography} from '@mui/material'

const GwDinning = () => {
  return (
    <Box sx={{display:'flex', mt:4, mb:5}}>
    <Container maxWidth='md'>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <Box sx={{ }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/04/greenwood-bar-1024x789.png' />
            </Box>

            <Typography variant='h5' sx={{fontWeight:'bold'}}>Dinning And Bar</Typography>

            <Typography sx={{ mt:2}}>Treat yourself to global culinary creations, refined cocktail concoctions, and groovy music at our chain of cafes, restaurants and bar spaces. Flavours, both sweet and savoury, tastefully-crafted beverages and a gratifying indulgence to your senses– all inviting you to an ambiance brimming with a world of warmth at The Greenwood Hotels & Resorts.

            </Typography>

                   
        </Box>
    </Container>
</Box>
  )
}

export default GwDinning