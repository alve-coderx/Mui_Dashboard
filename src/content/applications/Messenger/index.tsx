import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Wallets from './Wallets';
import {useState,useEffect} from 'react';

function DashboardCrypto() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('https://kitecast-dev-api.azurewebsites.net/api/v1/customers/media/Fc64280c1ef74f9c9c8adb1906704362?pageNumber=1&pageSize=5')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data)
        console.log(data.data)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{paddingBottom : '210px'}}>
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
                    <Wallets key={item.mediaId} Item={item}/>
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
