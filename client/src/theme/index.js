import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';
import custom from './custom';

export default createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: '#fbfbfb',
      paper: colors.common.white,
    },
    primary: {
      // main: colors.indigo[500],
      main: '#f70c62',
      dark: '#d80d57',
      light: '#ffc1d8',
    },
    secondary: {
      main: colors.indigo[500],
      dark: colors.indigo[800],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
  custom,
});
