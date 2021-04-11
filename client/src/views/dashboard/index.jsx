import React from 'react';
import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';
import { useLocation } from 'react-router-dom';

const DashboardView = () => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);
  console.log(location);

  React.useEffect(() => {
    fetch(`http://apisapatu.riski.me/auth/google/callback${location.search}`, {
      headers: new Headers({ accept: 'application/json' }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.error(error);
      });
  }, []);
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
