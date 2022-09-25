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
  styled
} from '@mui/material';

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
    background: ${
      theme.palette.mode === 'dark'
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
  return (
    <>
      
      <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
          <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color : 'white',
              px: 1,
              border : '2px solid gray',
              background : 'transparent'
            }}
          >
            <CardContent>
              <Box 
                sx={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'space-between'
                }}
              >
                <Typography variant="h5" noWrap>
                    Cardano
                </Typography>
                <AvatarWrapper>
                  <img
                    alt="Cardano"
                    src="/static/images/placeholders/logo/cardano.png"
                  />
                </AvatarWrapper>
              </Box>
              
              <Typography  noWrap>
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3
                }}
              >
                <Typography  gutterBottom noWrap>
                  $54,985.00
                </Typography>
                <Typography  noWrap>
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
