import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

/* providers */
import ThemeProvider from 'src/providers/ThemeProvider';
import GlobalStyles from 'src/components/commons/GlobalStyles';
import { API_URL } from './constants';

const App = () => {
  const isLoggedIn = false;
  const rootRoute = useRoutes(routes(isLoggedIn));
  return (
    <ThemeProvider>
      <GlobalStyles />
      {rootRoute}
    </ThemeProvider>
  );
};

export default App;
