import { useState } from 'react'
import { Typography, Modal, Grid, Box, TextField, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Ret from '../../../assets/ret1.png';
import CloseIcon from '@mui/icons-material/Close';
import { useMode } from 'src/hook/useMode';



function PageHeader() {
  const [name, setName] = useState("");
  const [pairingCode, setPairingCode] = useState("");
  const [serial, setSerial] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { darkMode } = useMode()
  const style = {
    position: 'absolute' as 'absolute',
    color: darkMode ? 'white' : 'black',
    bgcolor: darkMode ? 'black' : 'white',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 10,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const time = new Date().toLocaleTimeString()
    const newDevice = {
      "customerId": "Fc64280c1ef74f9c9c8adb1906704362",
      "name": name,
      "pairingCode": pairingCode,
      "serialNumber": serial,
      "ContentCheckTime" : time
    }
    fetch("https://kitecast-stg-api.azurewebsites.net/api/v1/devices", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newDevice),
    })
      .then((res) => res.json())
      .then(() => handleClose())


  }
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 4,flexWrap : 'wrap',alignItems : 'center'  }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item sx={{ mr: 2 }}>
        <Typography gutterBottom sx={{color : !darkMode ? '#1E1E1E' : 'white',fontSize:'54px',fontWeight: '400'}} >
              Today 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={{ color: !darkMode ? 'black' : 'white', fontWeight: '400',fontSize : '28px' }} >
          {new Date().getDate()}, {new Date().getFullYear()} | {new Date().toLocaleTimeString()}

          </Typography>
        </Grid>
      </Box>

      <Box
        sx={{ background: !darkMode ? 'white' : '#3E3E3E', color: !darkMode ? 'black' : 'white', border: '2px solid trasnparent', borderRadius: '20px', width: '250px' }}
      >
        <Box onClick={handleOpen} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', cursor: 'pointer' }}>
          <Box>
            <h3>Add New Device</h3>
          </Box>
          <img style={{ width: '25px', height: '25px', borderRadius: '20%' }} src={Ret} />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between',alignItems : 'center' }}>
                <Typography id="modal-modal-title" variant="h2" component="h2">
                  Add New Device
                </Typography>
                <IconButton sx={{ color: darkMode ? 'white' : 'black' }} onClick={() => handleClose()}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <label>Device Name</label><br />
                  <input
                    style={{ background: 'none', border: '2px solid', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                    placeholder='Device Name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <label>Pairing Code</label><br />
                  <input
                    style={{ background: 'none', border: '2px solid', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                    placeholder='Pairing Code'
                    onChange={(e) => setPairingCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <label>Serial Number</label><br />
                  <input
                    style={{ background: 'none', border: '2px solid ', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                    placeholder='Serial Number'
                    onChange={(e) => setSerial(e.target.value)}
                  />
                </Grid>
              </Grid>
              <button type='submit' style={{ cursor: 'pointer', marginTop: "20px", background: '#E44B23', color: 'white', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px' }}>Add Device</button>
            </form>
          </Box>
        </Modal>
      </Box>


    </Box >
  );
}

export default PageHeader;
