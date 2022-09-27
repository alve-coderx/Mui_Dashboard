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
  styled,
  CardMedia
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMode } from 'src/hook/useMode';
import bill1 from '../../../../assets/billing1.png';
import bill2 from '../../../../assets/billing2.png';

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

function Wallets() {
  const {darkMode} = useMode()
  return (
    <>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              px: 1,
              border: '2px solid gray',
              background: 'transparent'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  p: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${bill1})`,
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Typography variant="h2" noWrap>
                  FREE
                </Typography>
              </Box>

              <Typography variant="h4" noWrap sx={{color: darkMode ? 'white' : 'black'}}>
                $15
              </Typography>
              <Typography variant="h4" sx={{ color: '#E44B23', mt: 1 }}>
                /month
              </Typography>
              <Typography variant="body1" sx={{ color: darkMode ? 'white' : 'black' , mt: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button style={{border:'none', marginTop: "45px", background: '#E44B23', color: 'white', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px'}}>Currently Active</button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              px: 1,
              border: '2px solid gray',
              background: 'transparent'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  p: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${bill2})`,
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Typography variant="h2" noWrap>
                  PRO
                </Typography>
              </Box>

              <Typography variant="h4" noWrap sx={{color: darkMode ? 'white' : 'black'}}>
                $15
              </Typography>
              <Typography variant="h4" sx={{ color: '#E44B23', mt: 1 }}>
                /month
              </Typography>
              <Typography variant="body1" sx={{ color: darkMode ? 'white' : 'black' , mt: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                 <Button
                href="/dashboards/devices"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{ color: '#E44B23', borderColor: '#E44B23',my:2,px:3,py:1  }}
                size="small"
              >
            Get Started
          </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              px: 1,
              border: '2px solid gray',
              background: 'transparent'
            }}
          >
            <CardContent>
              <Box
                sx={{
                  p: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${bill2})`,
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Typography variant="h2" noWrap>
                  ENTERPRISE
                </Typography>
              </Box>

              <Typography variant="h4" noWrap sx={{color: darkMode ? 'white' : 'black'}}>
                $15
              </Typography>
              <Typography variant="h4" sx={{ color: '#E44B23', mt: 1 }}>
                /month
              </Typography>
              <Typography variant="body1" sx={{ color: darkMode ? 'white' : 'black' , mt: 2 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Button
                href="/dashboards/devices"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{ color: '#E44B23', borderColor: '#E44B23',my:2,px:3,py:1  }}
                size="small"
              >
            Get Started
          </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
    </>
  );
}

export default Wallets;
