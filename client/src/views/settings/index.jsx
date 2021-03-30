import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

const SettingsView = () => {
  return (
    <Page title="Pengaturan">
      <PageTitle title="Pengaturan" subtitle="Kelola aplikasi dengan mudah" />
      <div>Settings</div>
    </Page>
  );
};

export default SettingsView;
