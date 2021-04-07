import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

/* providers */
import ThemeProvider from 'src/providers/ThemeProvider';
import GlobalStyles from 'src/components/commons/GlobalStyles';
import { getUserToken } from './utils';

const data = {
  success: true,
  token: '5|ViuWhayMwqJLaMN1hzbtd7eJLCmz7eSKIVMWJR21',
  token_type: 'bearer',
  user: {
    id: 11,
    username: 'admin1',
    name: 'admin1',
    email: 'admin1@domain.com',
    created_at: '2021-04-05T14:25:53.000000Z',
  },
};

const App = () => {
  const isLoggedIn = getUserToken();
  const rootRoute = useRoutes(routes(isLoggedIn));
  return (
    <ThemeProvider>
      <GlobalStyles />
      {rootRoute}
    </ThemeProvider>
  );
};

export default App;
