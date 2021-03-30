import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const DashboardView = () => {
  return (
    <Page title="Welcome Back">
      <PageTitle
        title="Dashboard"
        subtitle="Kelola Semua Produk, Pesanan dan Resi dengan mudah"
      />
      <div>DashboardView</div>
    </Page>
  );
};

export default DashboardView;
