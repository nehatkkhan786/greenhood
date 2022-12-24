import {Box, Container, Typography} from '@mui/material'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Header from '../../components/header/Header'
import Nav2 from '../../components/Nav2/Nav2'
import NavTabs from '../../components/NavTabs/NavTabs'



const GWGINDEX = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
       <Header/>
       <Nav2/>
       <NavTabs/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
            <Box sx={{display:'flex', mt:2}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box sx={{ }}>
                    <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-Facade4-768x512.jpg' />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold'}}>ABOUT THE GREENWOOD Guwahati</Typography>

                <Typography sx={{mt:2}} >Framed by the alpine mountains of Meghalaya on one side and the charming city of Guwahati on the other, lies the newest luxury property of Greenwood Hotels and Resorts: an urban oasis to nurture unparalleled leisure. Experience this burgeoning city through a modern lens in the most luxurious accommodations this city can offer. </Typography>

                <Typography variant='subtitle' sx={{mt:1}}>Assameese Senjor Podosihna Greenwood Loi Swagatam.</Typography>

                <Typography variant='body1' sx={{mt:1}}>Top-rung facilities, elegant accommodations, impeccable dining and around-the-clock professional management awaits you at this home away from home. </Typography>

               
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

export default GWGINDEX