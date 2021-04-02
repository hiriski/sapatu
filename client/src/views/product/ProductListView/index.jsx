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
import ProductItem from 'src/components/ProductItem';

const ProductListView = () => {
  const classes = useStyles();
  return (
    <Page title="List Produk">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
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
              <ProductItem title="Hello World" info="Lorem ipsum dolor" />
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SidebarProductList />
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
