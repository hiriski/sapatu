import React from 'react';
import SectionTitle from 'src/components/SectionTitle';
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from '../ProductItem';

const SidebarProductList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SectionTitle title="List Produk" />
      <ProductItem />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: '100%',
  },
}));

export default SidebarProductList;
