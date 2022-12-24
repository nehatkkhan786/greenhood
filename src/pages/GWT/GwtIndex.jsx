import {Box, Container, Typography} from '@mui/material'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Nav2 from '../../components/Nav2/Nav2'
import Header from '../../components/header/Header'

const GwtIndex = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <Nav2/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
            <Box sx={{display:'flex', mt:2}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box sx={{ }}>
                    <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur2-smaller.jpg' />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold'}}>ABOUT THE GREENWOOD TEZPUR</Typography>

                <Typography variant='subtitle' sx={{mt:2}} >Standing as one of the most prominent luxury escapes in the town of Tezpur, the ‘Cultural Capital’ of Assam, The Greenwood, Tezpur entices anyone who wishes to absorb naturesque, vibrant and fun-filled moments, just close to the bustling urban landscape of the historic town.</Typography>

                <Typography variant='subtitle' sx={{mt:2}}>Enjoying close proximity to renowned World Heritage Sites and nature reserves less than 50 kms, such as Kaziranga National Park and Nameri National Park, as well as some of the most spectacular cultural and historical hotspots in the state.</Typography>

                <Typography variant='subtitle' sx={{mt:2}}>This property is a quintessential replica of a retreat surrounded by beautiful hills, deep valleys and lush greenery adding an ancient touch to take you back to an era you would have only read about, you need to visit Tezpur in Assam.</Typography>

               
                
            </Box>
        </Container>
   </Box>
            </Container>
        </Box>
        <Box>
        <CategoryTabs/>
            
        </Box>


  </Box>
  )
}

export default GwtIndex