import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const ProductListView = () => {
  return (
    <Page title="Product List">
      <PageTitle
        title="List Produk"
        subtitle="Menampilkan semua daftar produk"
      />
      <div>Product List</div>
    </Page>
  );
};

export default ProductListView;
