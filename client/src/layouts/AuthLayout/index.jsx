import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Footer from './Footer';

const AuthLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {isNotMobile && <div className={classes.bgImg} />}
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
  },
  bgImg: {
    backgroundImage: `url('/static/images/martin-katler-fpjiQ8xaG6M-unsplash.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: 1,
    display: 'flex',
  },
  contentContainer: {
    display: 'flex',
    flex: '1',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    overflow: 'auto',
  },
}));

export default AuthLayout;
