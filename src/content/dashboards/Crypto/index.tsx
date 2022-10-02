import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';

function DashboardCrypto() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://kitecast-stg-api.azurewebsites.net/api/v1/platform-data/Fc64280c1ef74f9c9c8adb1906704362')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.players?.mediaPlayers)
        console.log(data?.players?.mediaPlayers)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ minHeight: '90vh' }}>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ width: '100%' }}>
        <Grid
          container sx={{ px: 3 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
            {
              products?.map((item) => (
                <Wallets Item={item} key={item.id} />
              ))
            }
        </Grid>
      </Box>
    </div>
  );
}

export default DashboardCrypto;
