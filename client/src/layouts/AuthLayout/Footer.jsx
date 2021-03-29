import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.footerText}>
        Developed and Maintained by{' '}
        <a target="_blank" rel="noreferrer" href="https://riski.me">
          Riski
        </a>
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 3,
    padding: theme.spacing(0.4, 2),
  },
  footerText: {
    color: theme.palette.background.paper,
    fontSize: 14,
    '& *': {
      color: theme.palette.background.paper,
      fontWeight: 'bold',
    },
  },
}));

export default Footer;
