import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const CreateOrderView = () => {
  return (
    <Page title="Buat Pesanan">
      <PageTitle
        title="Buat Pesanan"
        subtitle="Buat Pesanan kemudian serahkan ke tim gudang"
      />
      <div>Create order</div>
    </Page>
  );
};

export default CreateOrderView;
