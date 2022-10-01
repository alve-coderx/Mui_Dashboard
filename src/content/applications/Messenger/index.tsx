import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Wallets from './Wallets';
import { useState, useEffect } from 'react';

function DashboardCrypto() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://kitecast-stg-api.azurewebsites.net/api/v1/platform-data/68db375a-64b8-4dcd-b5e5-31a4628ab453')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.media?.mediaItems)
      })
      .catch((err) => console.log(err));
  }, [products]);
  return (
    <div style={{ minHeight: '90vh' }}>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid sx={{ px: 3 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          products?.map((item) => (
            <Wallets key={item.mediaId} Item={item} />
          ))
        }
      </Grid>
    </div>
  );
}

export default DashboardCrypto;
