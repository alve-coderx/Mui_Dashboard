import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import logo from '../../../assets/logo.png'
import logolg from '../../../assets/logolg.png'
import './style.css'
import {
  Box,
  styled,
  Divider,
  useTheme,
  Button,
  darken,
  Modal,
  Fab
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';
import { useMode } from 'src/hook/useMode';
import { Link, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {
  alpha,
  Stack,
  lighten,
  IconButton,
  Tooltip,
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from '../Header/Buttons';
import HeaderUserbox from '../Header/Userbox';
import HeaderMenu from '../Header/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// const SidebarWrapper = styled(Box)(
//   ({ theme }) => `
//         width: ${theme.sidebar.width};
//         min-width: ${theme.sidebar.width};
//         color: ${theme.colors.alpha.trueWhite[70]};
//         position: relative;
//         z-index: 7;
//         height: 100%;
//         padding-bottom: 68px;
// `
// );
const drawerWidth = 280;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  display: 'flex',
  flexDirection: 'inherit',
  flexWrap : 'wrap',
  alignItems: 'center',
  justifyContent : 'space-between',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const OutletBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: '100%',
  color: '#4eac6d',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const style = {
  position: 'absolute',
  top: '94%',
  left: '3%',
  boxShadow: 24,
  color: 'white', borderColor: '#E44B23',
  px: 3, py: 1, background: '#E44B23',
  width: '200px',

};
function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  const { darkMode } = useMode()
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mainopen, setmainOpen] = React.useState(true);
  const toggleDrawer = () => {
    setmainOpen(!mainopen);
  };
  setTimeout(handleOpen, 1000)
  const handleLogin = () => {
    loginWithRedirect()
    handleClose()
  }
  const {setDarkMode} = useMode()
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        height: '100%',
        background : darkMode ? 'black' : 'white',
        position: 'fixed',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(0),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(0),
          },
        }),
      },
    }),
  );
  return (
    <>
      {/* <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background: !darkMode ? "white" : darken(theme.colors.alpha.black[100], 1),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      > */}
      <AppBar sx={{background : darkMode ? 'black' : 'white'}} position="sticky" open={mainopen}>
        <Box sx={{display : 'flex'}}>
          <IconButton onClick={toggleDrawer} color="primary" sx={{ color: darkMode ? 'white' : 'black' }}>
            <MenuIcon />
          </IconButton>
          <Typography  sx={{ color: darkMode ? 'white' : 'black',fontSize : '28px',fontWeight : '600' }}>
            {
              window.location.pathname === "/dashboards/devices" ? "Dashboard"
                :
                window.location.pathname === "/dashboards/media" ? "Media"
                  :
                  window.location.pathname === "/management/playlists" ? "Playlists"
                    :
                    window.location.pathname === "management/profile/billing" ? "Billing"
                      :
                      ""

            }
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <HeaderButtons />
          {
            isAuthenticated && <HeaderUserbox />
          }

        </Box>
      </AppBar>
      <Drawer variant="permanent" open={mainopen}>
        <Scrollbar >
          <Box className={!isAuthenticated && 'blur'}>
            <Box mt={3}
              className={!isAuthenticated && 'bw'}

            >
              <Link to='/dashboards/devices'>
                <Box
                  mx={2}
                  sx={{
                    width: '240px'
                  }}
                >

                  <img src={darkMode ? logo : logolg} style={{ width: '100%' }} />

                </Box>
              </Link>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu mainopen={mainopen}/>
          </Box>
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10]
          }}
        />
        <Box p={2}

        >
          
          {
            !isAuthenticated && (
              <>
                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Button
                    className='noneblur'
                    variant="contained"
                    sx={style}
                    onClick={() => handleLogin()}
                  >
                    Login
                  </Button>
                </Modal>
              </>
            )
          }
          {
            isAuthenticated && (
              <Button

                variant="outlined"
                fullWidth
                sx={{ color: '#E44B23', borderColor: '#E44B23', px: 3, py: 1 }}
                onClick={() => logout()}
              >
                logout
              </Button>
            )
          }
        </Box>
      </Drawer>
      {/* </SidebarWrapper> */}
      {/* <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background: !darkMode ? "white" : darken(theme.colors.alpha.black[100], 1),
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Link to='/dashboards/devices'>
                <Box
                  mx={2}
                  sx={{
                    width: '240px'
                  }}
                >
                  <img src={darkMode ? logo : logolg} style={{ width: '100%' }} />
                </Box>
              </Link>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
            <SidebarMenu />
          </Scrollbar>
          <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10]
          }}
        />
        <Box p={1}

        >
          {
            isAuthenticated && (
              <Button

                variant="outlined"
                fullWidth
                sx={{ color: '#E44B23', borderColor: '#E44B23', px: 3, py: 1 }}
                onClick={() => logout()}
              >
                logout
              </Button>
            )
          }
        </Box>
        </SidebarWrapper>
      </Drawer> */}
      <OutletBox sx={{background : darkMode ? '#1E1E1E' : 'white'}} position="absolute" open={mainopen}>
        <Box
          className={!isAuthenticated && 'blur'}
          sx={{
            position: 'relative',
            display: 'block',
            flex: 1,
            pt: `${theme.header.height}`,

          }}
        >
          <Box className={!isAuthenticated && 'bw'} display="block" sx={{ background: !darkMode ? '#F9F9F9' : '#1E1E1E' }}>
            <Fab onClick={() => setDarkMode(!darkMode)} color="secondary" aria-label="edit" sx={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>
              <Brightness4Icon />
            </Fab>
            <Outlet />
          </Box>
        </Box>
      </OutletBox>

    </>
  );
}

export default Sidebar;