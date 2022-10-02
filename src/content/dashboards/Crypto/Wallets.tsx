import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  IconButton,
  styled,
  Modal,

} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import device from '../../../assets/device.png'
import { useMode } from 'src/hook/useMode';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${theme.palette.mode === 'dark'
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(['all'])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);



function Wallets({ Item }) {
  const { darkMode } = useMode()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [serial, setSerial] = useState("");
  const handleDelete = () => {
    fetch(`https://kitecast-dev-api.azurewebsites.net/api/v1/customers/players/${Item.id}`,
      {
        method: 'DELETE'
      })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDevice = {
      "id": Item.id,
      "name": name,
      "serialNumber": serial,
      "pairingCode": Item.pairingCode,
      "ownerId": "Fc64280c1ef74f9c9c8adb1906704362",
      "isActive": true,
      "playlistId": Item.id
    }
    fetch("https://kitecast-dev-api.azurewebsites.net/api/v1/customers/players", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newDevice),
    })
      .then((res) => res.json())
      .then(() => handleClose())
  }
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
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card
        sx={{
          p:2,
          border: !darkMode ? 'mone' : '2px solid gray',
          background: !darkMode ? 'white' : 'transparent',
          borderRadius: '34px',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py:2
            }}
          >
            <Tooltip title={Item.id} arrow>
              <Typography variant="h3" sx={{ color: !darkMode ? '#1E1E1E' : 'white', }} noWrap>
                {Item.name}
              </Typography>
            </Tooltip>
            <Box>
              <Tooltip title="Edit Order" arrow>
                <IconButton
                  sx={{
                    color: '#FABB18',
                    borderRadius: '50%',
                    border: '2px solid #FABB18',
                    ml: 1
                  }}
                  size="small"
                  onClick={handleOpen}
                >
                  <EditTwoToneIcon fontSize="small" />

                </IconButton>
              </Tooltip>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography id="modal-modal-title" variant="h2" component="h2">
                        Edit {Item.name}
                      </Typography>
                      <IconButton sx={{ color: darkMode ? 'white' : 'black' }} onClick={() => handleClose()}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', mt: 5 }}>
                      <Box sx={{ px: 2 }}>
                        <label>Device Name</label><br />
                        <input
                          style={{ background: 'none', border: '2px solid', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                          placeholder='Device Name'
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Box>
                      <Box sx={{ px: 2 }}>
                        <label>Pairing Code</label><br />
                        <input
                          style={{ background: 'none', border: '2px solid', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                          placeholder='Pairing Code'
                          disabled
                          value={Item.pairingCode}
                        />
                      </Box>
                      <Box sx={{ px: 2 }}>
                        <label>Serial Number</label><br />
                        <input
                          style={{ background: 'none', border: '2px solid ', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                          placeholder='Serial Number'
                          onChange={(e) => setSerial(e.target.value)}
                        />
                      </Box>
                    </Box>
                    <button type='submit' style={{ cursor: 'pointer', marginTop: "20px", background: '#E44B23', color: 'white', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px' }}>Add Device</button>
                  </form>
                </Box>
              </Modal>
              <Tooltip title="Delete Order" arrow>
                <IconButton
                  sx={{
                    color: '#E44B23',
                    borderRadius: '50%',
                    border: '2px solid #E44B23',
                    ml: 1
                  }}
                  size="small"
                  onClick={() => handleDelete()}
                >
                  <DeleteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box
            sx={{
              pt: 3
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
              <Box>
                <Box>
                  <Typography sx={{ fontSize: '10px', color: !darkMode ? 'black' : 'white', fontWeight: 'bolder' }}>
                    Pairing Code
                  </Typography>
                  <Typography sx={{ fontSize: '15px', color: !darkMode ? 'black' : 'white', fontWeight: 'bolder' }}>
                    {Item.pairingCode}
                  </Typography>
                </Box>
                <Box sx={{ pt: 2 }}>
                  <Typography sx={{ fontSize: '10px', color: !darkMode ? 'black' : 'white', fontWeight: 'bolder' }}>
                    Serial Number
                  </Typography >
                  <Tooltip title={Item.serialNumber}>
                    <Typography sx={{ fontSize: '15px', color: !darkMode ? 'black' : 'white', fontWeight: 'bolder' }}>
                    </Typography>
                  </Tooltip>
                </Box>
              </Box>
              <Box sx={{ background: darkMode ? '#32221E' : '#FBE1D7', p: 3, borderRadius: '20px' }}>
                <img src={device} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Wallets;
