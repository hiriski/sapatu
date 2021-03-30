import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const OrderListView = () => {
  return (
    <Page title="Order List">
      <PageTitle title="List Order" subtitle="Menampilkan semua pesanan" />
      <div>Order details</div>
    </Page>
  );
};

export default OrderListView;
