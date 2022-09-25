import {useState} from 'react'
import { Typography, Modal , Grid,Box,TextField, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Ret from '../../../assets/ret1.png';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{display : 'flex',justifyContent : 'space-between'}}>
      <Box sx={{display : 'flex',alignItems : 'center'}}>
        <Grid item sx={{mr: 2}}>
          <Typography variant="h3" component="h3" gutterBottom sx={{color : 'white'}}>
              Today 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={{color : 'white'}}>
             Mon 22, 2021 | 10:00 AM
          </Typography>
        </Grid>
      </Box>
      
      <Box 
        sx={{background: '#3E3E3E',color :'white', border : '2px solid trasnparent',borderRadius : '20px',width : '250px'}}
        >
          <Box onClick={handleOpen} sx={{display : 'flex',alignItems : 'center',justifyContent : 'space-around',cursor : 'pointer'}}>
            <Box>
              <p>Add New Device</p>
            </Box>
              <img style={{width : '25px',height : '25px', borderRadius : '20%'}} src={Ret}/>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{display: 'flex',justifyContent : 'space-between'}}>
                <Typography id="modal-modal-title" variant="h2"  component="h2">
                    Add New Device
                </Typography>
                <IconButton sx={{color : 'white'}} onClick={() => handleClose()}>
                    <CloseIcon/>
                </IconButton>
              </Box>
              <Box sx={{display : 'flex',flexWrap:'nowrap',mt:5}}>
                <Box sx={{px : 2}}>
                  <label>Device Name</label><br/>
                  <input
                    style={{background : 'none',border : '2px solid white',padding : '10px',borderRadius : '10px',color : 'white'}}
                    placeholder='Device Name'
                  />
                </Box>
                <Box sx={{px : 2}}>
                  <label>Device Name</label><br/>
                  <input
                    style={{background : 'none',border : '2px solid white',padding : '10px',borderRadius : '10px',color : 'white'}}
                    placeholder='Device Name'
                  />
                </Box>
                <Box sx={{px : 2}}>
                  <label>Device Name</label><br/>
                  <input
                    style={{background : 'none',border : '2px solid white',padding : '10px',borderRadius : '10px',color : 'white'}}
                    placeholder='Device Name'
                  />
                </Box>
              </Box>
              <button  style={{marginTop:"20px",background : '#E44B23',color : 'white',paddingTop : '10px',paddingBottom : '10px',paddingLeft : '25px',paddingRight : '25px',borderRadius : '10px'}}>Add Device</button>
            </Box>
          </Modal>
      </Box>
      
      
    </Box >
  );
}

export default PageHeader;
