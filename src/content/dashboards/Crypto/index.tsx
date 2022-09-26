import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

import AccountBalance from './AccountBalance';
import Wallets from './Wallets';
import AccountSecurity from './AccountSecurity';
import WatchList from './WatchList';
import { useEffect, useState } from 'react';

function DashboardCrypto() {
 const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('https://kitecast-dev-api.azurewebsites.net/api/v1/customers/players/Fc64280c1ef74f9c9c8adb1906704362')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ paddingBottom: '200px' }}>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}

        >
          <Grid item xs={12}>
          <Grid container spacing={3}>
                {
                  products?.map((item)=>(
                    <Wallets Item={item} key={item.id}/>
                  ))
                }
          </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default DashboardCrypto;
