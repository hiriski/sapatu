import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

import StoreIcon from '@material-ui/icons/Store';

import { PRODUCT_SIZES, ROUTES } from 'src/constants';
import SidebarProductList from 'src/components/SidebarProductList';
import TableProductList from 'src/components/TableProductList';

import api from 'src/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from 'src/redux/actions/productActions';

const ProductListView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isFetching, isSuccess, products } = useSelector(
    (state) => state.product.list,
  );

  const fetchData = () => {
    dispatch(fetchProductList());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page title="List Produk">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <PageTitle
              title="List Produk"
              subtitle="Kelola produk dengan sangat mudah"
              // icon={<StoreIcon />}
            />
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              justifyContent="center"
            >
              <TableProductList products={products} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default ProductListView;
