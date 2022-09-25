import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Wallets from './Wallets';

function DashboardCrypto() {
  return (
    <div>
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
            <Wallets />
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
}

export default DashboardCrypto;
