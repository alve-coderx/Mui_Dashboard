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

function DashboardCrypto() {
  return (
    <div style={{paddingBottom : '200px'}}>
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
