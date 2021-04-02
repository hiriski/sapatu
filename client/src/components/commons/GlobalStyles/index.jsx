import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      a: {
        textDecoration: 'none',
      },
      '.MuiListItemText-primary': {
        fontSize: '0.97rem',
      },
      '.MuiSvgIcon-root': {
        fontSize: '1.3rem',
      },
      '::-webkit-scrollbar': {
        width: 7,
        height: 6,
        backgroundColor: theme.palette.background.paper,
      },
      '::-webkit-scrollbar-track': {
        borderRadius: 3,
      },
      '::-webkit-scrollbar-thumb': {
        borderRadius: 4,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#fdeff4',
      },
    },
  }),
);

const GlobalStyles = () => {
  useStyles();
  return null;
};

export default GlobalStyles;
