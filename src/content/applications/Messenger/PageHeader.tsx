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
    <Grid  container alignItems="center" spacing={3}>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom sx={{color : 'white'}}>
            Today
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2" sx={{color : 'white'}}>
            Mon 22, 2021 | 10:00 AM
        </Typography>
      </Grid>
      
      <Grid item>
        <Button
            sx={{background: '#3E3E3E',color :'white'}}
            size="small"
            variant="outlined"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Upload/Add Media
        </Button>
      </Grid>
      
       
    </Grid >
  );
}

export default PageHeader;
