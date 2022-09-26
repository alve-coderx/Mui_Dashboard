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
  IconButton,
  styled,
  CardMedia
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useMode } from 'src/hook/useMode';
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

function Wallets({Item}) {
  const { darkMode} = useMode() 
  return (
    <>

        <Grid xs={12} sm={6} md={4} item>
            <Card
              sx={{
                p: 2,
                border: !darkMode ? 'mone' : '2px solid gray',
                background: !darkMode ? 'white' : 'transparent',
                borderRadius : '34px'
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box>
                    <Typography variant="h3" sx={{color : !darkMode ? '#1E1E1E' : 'white',}} noWrap>
                      Media 01
                    </Typography>
                    <Typography sx={{fontSize : '10px',color : !darkMode ? '#1E1E1E' : 'white',}}>
                          {Item.contentType}
                    </Typography>
                  </Box>
                  <Box>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          color: '#E44B23',
                          borderRadius: '50%',
                          border: '2px solid #E44B23',
                          ml: 1
                        }}
                        size="small"
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
                <Box sx={{display : 'flex',justifyContent : 'space-between',alignItems : 'center'}}>
                    <Box>
                      <img style={{width : '100%',borderRadius : '20px'}} src='https://images.unsplash.com/photo-1642540330592-937be40f65b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
                    </Box>
                </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
    </>
  );
}

export default Wallets;
