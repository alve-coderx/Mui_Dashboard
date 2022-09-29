import { useContext } from 'react';

import {
  Box,
  alpha,
  Stack,
  darken,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Typography
} from '@mui/material';
import { SidebarContext } from 'src/contexts/SidebarContext';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderMenu from './Menu';
import { useMode } from 'src/hook/useMode';
import { useAuth0 } from '@auth0/auth0-react';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const { isAuthenticated } = useAuth0()
  const { darkMode } = useMode()
  const HeaderWrapper = styled(Box)(
    ({ theme }) => `
          height: ${theme.header.height};
          padding: ${theme.spacing(0, 2)};
          right: 0;
          z-index: 6;
          backdrop-filter: blur(3px);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          @media (min-width: ${theme.breakpoints.values.lg}px) {
              left: ${theme.sidebar.width};
              width: auto;
          }
  `
  );
  return (
    
      <>
      </>
  );
}

export default Header;
