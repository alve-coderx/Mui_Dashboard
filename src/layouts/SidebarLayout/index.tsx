import { FC, ReactNode } from 'react';
import { Box, alpha, lighten, useTheme,Fab } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Sidebar from './Sidebar';
import Header from './Header';
import { useMode } from 'src/hook/useMode';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();
  const { darkMode,setDarkMode } = useMode()
  console.log(darkMode)
  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[5]
                : theme.colors.alpha.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`
            }
          }}
        >
          <Box display="block" sx={{background: !darkMode ? '#F9F9F9' : '#1E1E1E'}}>
            <Fab onClick={() => setDarkMode(!darkMode)} color="secondary" aria-label="edit" sx={{borderTopLeftRadius : '0',borderBottomLeftRadius : '0'}}>
              <Brightness4Icon />
            </Fab>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
