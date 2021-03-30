import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const OrderDetailsView = () => {
  return (
    <Page title="Order Details">
      <PageTitle title="Detail Order" subtitle="Informasi detail pesanan" />
      <div>Product List</div>
    </Page>
  );
};

export default OrderDetailsView;
