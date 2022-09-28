import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import logo from '../../../assets/logo.png'
import logolg from '../../../assets/logolg.png'
import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken,
} from '@mui/material';
import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';
import { useMode } from 'src/hook/useMode';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();
  const { darkMode } = useMode()
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0()
  console.log(user)
  return (
    <>
      <SidebarWrapper
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
        <Box p={2}>
          {
            !isAuthenticated && (

              <Button
                variant="outlined"
                fullWidth
                sx={{ color: '#E44B23', borderColor: '#E44B23', px: 3, py: 1 }}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
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
      </SidebarWrapper>
      <Drawer
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
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;