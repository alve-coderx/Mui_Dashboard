import { Box } from '@mui/material';
import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';
import { useMode } from 'src/hook/useMode';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

function HeaderButtons() {
  const {darkMode} = useMode()
  const Search = styled('div')(({ theme }) => ({
    marginRight : '10px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: darkMode ? alpha(theme.palette.common.white, 0.15) : '#F9F9F9',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color : !darkMode ? 'black' : 'white'
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));
  
  return (
    <Box sx={{display:'flex'}}>
      <Search>
        <SearchIconWrapper>
          Search Project ...
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
