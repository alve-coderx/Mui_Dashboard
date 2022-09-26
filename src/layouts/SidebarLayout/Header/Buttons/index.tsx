import { Box } from '@mui/material';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import { useMode } from 'src/hook/useMode';
function HeaderButtons() {
  return (
    <Box>
      <HeaderSearch />
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
