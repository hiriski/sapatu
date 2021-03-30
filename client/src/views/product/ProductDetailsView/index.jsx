import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const ProductDetailsView = () => {
  return (
    <Page title="Product Details">
      <PageTitle title="Details Produk" subtitle="Informasi details produk" />
      <div>Product Details</div>
    </Page>
  );
};

export default ProductDetailsView;
