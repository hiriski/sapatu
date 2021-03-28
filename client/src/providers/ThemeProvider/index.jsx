import React from 'react';
import { CssBaseline, ThemeProvider as Provider } from '@material-ui/core';
import PropTypes from 'prop-types';
import theme from '../../theme';

const ThemeProvider = ({ children }) => {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
