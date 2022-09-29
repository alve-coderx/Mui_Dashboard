import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Wallets from './Wallets';

function DashboardCrypto() {
  return (
    <div style={{paddingBottom : '200px'}}>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
          sx={{px:4,py:3}}
          
        >
          <Grid item xs={12}>
            <Wallets />
          </Grid>
         
        </Grid>
    </div>
  );
}

export default DashboardCrypto;
