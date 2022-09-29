import {useState} from 'react'
import { Typography, Modal , Grid,Box,TextField, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Ret from '../../../assets/ret1.png';
import CloseIcon from '@mui/icons-material/Close';
import { useMode } from 'src/hook/useMode';



function PageHeader() {
  const [name,setName] = useState("");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {darkMode} = useMode()
  const style = {
    position: 'absolute' as 'absolute',
    color: darkMode ? 'white' : 'black',
    bgcolor: darkMode ? 'black' : 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      "ownerId": "Fc64280c1ef74f9c9c8adb1906704362",
      "name": name,
      "isActive" : true
    }
    fetch("https://kitecast-dev-api.azurewebsites.net/api/v1/customers/playlists", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPlaylist),
  })
      .then(() => handleClose())
  }

  
  return (
    <Box sx={{display : 'flex',justifyContent : 'space-between',py:4}}>
      <Box sx={{display : 'flex',alignItems : 'center'}}>
        <Grid item sx={{mr: 2}}>
          <Typography variant="h1" component="h1" gutterBottom sx={{color : !darkMode ? '#1E1E1E' : 'white'}}>
              Today 
          </Typography>
        </Grid>
        <Grid item>
        <Typography variant="subtitle2" sx={{ color: !darkMode ? 'black' : 'white', fontWeight: 'bolder' }}>
          {new Date().getDate()}, {new Date().getFullYear()} | {new Date().toLocaleTimeString()}

          </Typography>
        </Grid>
      </Box>
      
      <Box 
        sx={{background: !darkMode ? 'white' : '#3E3E3E',color : !darkMode ? '#1E1E1E' : 'white', border : '2px solid trasnparent',borderRadius : '20px',width : '250px'}}
        >
          <Box onClick={handleOpen} sx={{display : 'flex',alignItems : 'center',justifyContent : 'space-around',cursor : 'pointer'}}>
            <Box>
              <h3>Create A Playlist</h3>
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
              <form onSubmit={handleSubmit}>
                <Box sx={{display: 'flex',justifyContent : 'space-between'}}>
                  <Typography id="modal-modal-title" variant="h2"  component="h2">
                      Add New Device
                  </Typography>
                  <IconButton sx={{color: darkMode ? 'white' : 'black'}} onClick={() => handleClose()}>
                      <CloseIcon/>
                  </IconButton>
                </Box>
                <Box sx={{display : 'flex',flexWrap:'nowrap',mt:5}}>
                  <Box sx={{px : 2}}>
                    <label>Device Name</label><br/>
                    <input
                      style={{background : 'none',border : '2px solid',borderColor : darkMode ? 'white' : 'black' ,padding : '10px',borderRadius : '10px',color : 'white'}}
                      placeholder='Device Name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                </Box>
                <button type='submit' style={{cursor:'pointer',marginTop:"20px",background : '#E44B23',color : 'white',paddingTop : '10px',paddingBottom : '10px',paddingLeft : '25px',paddingRight : '25px',borderRadius : '10px'}}>Add Device</button>
              </form>
            </Box>
          </Modal>
      </Box>
      
      
    </Box >
  );
}

export default PageHeader;
