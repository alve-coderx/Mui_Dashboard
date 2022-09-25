import { Typography, Avatar, Grid,Box,Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';


function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Box sx={{display : 'flex',justifyContent : 'space-between'}}>
      <Box sx={{display : 'flex',alignItems : 'center'}}>
        <Grid item sx={{mr: 2}}>
          <Typography variant="h3" component="h3" gutterBottom sx={{color : 'white'}}>
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
              sx={{background: '#3E3E3E',color :'white'}}
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
