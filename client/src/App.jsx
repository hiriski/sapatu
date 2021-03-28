import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

/* providers */
import ThemeProvider from 'src/providers/ThemeProvider';

const App = () => {
  const isLoggedIn = true;
  const rootRoute = useRoutes(routes(isLoggedIn));
  return <ThemeProvider>{rootRoute}</ThemeProvider>;
};

export default App;
