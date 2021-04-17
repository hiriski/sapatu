import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

/* providers */
import ThemeProvider from 'src/providers/ThemeProvider';
import GlobalStyles from 'src/components/commons/GlobalStyles';
import { getUserToken } from './utils';

const App = () => {
  const token = getUserToken();
  const rootRoute = useRoutes(routes(token));
  return (
    <ThemeProvider>
      <GlobalStyles />
      {rootRoute}
    </ThemeProvider>
  );
};

export default App;
