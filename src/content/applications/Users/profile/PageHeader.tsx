import { Typography, Avatar, Grid,Box,Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ring from '../../../../assets/ring.png'

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Box sx={{display : 'flex',justifyContent : 'space-between',border:'2px solid white',p:4,borderRadius : '20px'}}>
      <Box sx={{display : 'flex',alignItems : 'center'}}>
        <Grid item sx={{mr: 2,display : 'flex',alignItems : 'center'}} >
          <img src={ring}/>
          <Typography variant="h3" component="h3" gutterBottom sx={{ml: 1,color : 'white'}}>
              Free
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={{color : 'white'}}>
              Currently Active Plan
          </Typography>
        </Grid>
      </Box>
      
      <Box sx={{display : 'flex',alignItems : 'center'}}>
          <Typography variant="subtitle2" sx={{color : 'white',mr : 2}}>
                Will be expired on 15, September 2023
          </Typography>
          <Button
              sx={{background: '#E44B23',color :'white'}}
              size="small"
              variant="outlined"
              startIcon={<AddTwoToneIcon fontSize="small" />}
            >
              Change Plan
          </Button>
      </Box>
      
       
    </Box >
  );
}

export default PageHeader;
