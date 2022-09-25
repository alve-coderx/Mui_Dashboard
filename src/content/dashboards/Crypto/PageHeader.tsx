import {useState} from 'react'
import { Typography, Modal , Grid,Box,TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Ret from '../../../assets/ret1.png';


const style = {
  position: 'absolute' as 'absolute',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
          <Box onClick={handleOpen} sx={{display : 'flex',alignItems : 'center',justifyContent : 'space-around'}}>
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
              <Typography id="modal-modal-title" variant="h2"  component="h2">
                  Add New Device
              </Typography>
              <Box sx={{display : 'flex',flexWrap:'nowrap'}}>
                <input
                  placeholder="Device Name"
                  type="text"
                  style={{background : 'transparent',padding: '2px',borderRadius : '5px',border : '2px solid white', width: '100px',margin : '10px'}}
                />
                <input
                  placeholder="pairing code"
                  type="text"
                  style={{background : 'transparent',padding: '2px',borderRadius : '5px',border : '2px solid white', width: '100px',margin : '10px'}}
                />
                <input
                  placeholder="Serial number"
                  type="text"
                  style={{background : 'transparent',padding: '2px',borderRadius : '5px',border : '2px solid white', width: '100px',margin : '10px'}}
                />
              
              </Box>
            </Box>
          </Modal>
      </Box>
      
      
    </Box >
  );
}

export default PageHeader;
