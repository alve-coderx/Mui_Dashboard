import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import RecentOrders from './RecentOrders';

function ApplicationsTransactions() {
  
  return (
    <div style={{minHeight : '84vh'}}>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          sx={{p:3}}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
    </div>
  );
}

export default ApplicationsTransactions;
