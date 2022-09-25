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
  useTheme,

} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import device from '../../../assets/device.png'

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
  return (
    <>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} item>
          <Card
            sx={{
              color: 'white',
              p: 2,
              border: '2px solid gray',
              background: 'transparent',
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
                <Typography variant="h3" sx={{color : 'white'}} noWrap>
                  Device 01
                </Typography>
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
                    >
                      <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
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
                    <Box>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                    <Box sx={{pt : 2}}>
                      <Typography sx={{fontSize : '10px',color : '#919191'}}>
                        $54,985.00
                      </Typography>
                      <Typography noWrap>
                        34,985 ADA
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{background : '#F5F5F5',p:4,opacity : '.5 ',borderRadius : '20px'}}>
                    <img src={device} />
                  </Box>
               </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
