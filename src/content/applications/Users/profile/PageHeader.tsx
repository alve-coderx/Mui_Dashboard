import { Typography, Avatar, Grid,Box,Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ring from '../../../../assets/ring.png'
import { useMode } from 'src/hook/useMode';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();
  const {darkMode} = useMode()
  return (
    <Box sx={{display : 'flex',justifyContent : 'space-between',border:darkMode ? '2px solid white' : 'none',p:4,borderRadius : '20px',flexWrap:'wrap'}}>
      <Box sx={{display : 'flex',alignItems : 'center',flexWrap : 'wrap'}}>
        <Grid item sx={{mr: 2,display : 'flex',alignItems : 'center'}} >
          <img src={ring}/>
          <Typography variant="h1" component="h1" gutterBottom sx={{color : !darkMode ? '#1E1E1E' : 'white'}}>
              Free 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={{color : darkMode ? 'white' : 'black',fontSize : '28px'}} style={{fontWeight : '400'}}>
              Currently Active Plan
          </Typography>
        </Grid>
      </Box>
      
      <Box sx={{display : 'flex',alignItems : 'center',flexWrap : 'wrap'}}>
          <Typography variant="subtitle2" sx={{color : darkMode ? 'white' : 'black',mr : 2}}>
                Will be expired on 15, September 2023
          </Typography>
          <Button
              sx={{background: '#E44B23',color :'white'}}
              size="small"
              variant="outlined"
            >
              Change Plan
          </Button>
      </Box>
      
       
    </Box >
  );
}

export default PageHeader;
