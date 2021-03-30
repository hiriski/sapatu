import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TopBar from 'src/components/TopBar';

import Sidebar from 'src/components/Sidebar';
import FloatingActions from 'src/components/FloatingAction';
import { ROUTES } from 'src/constants';

const MainLayout = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <div className={classes.root}>
      {pathname === ROUTES.NOT_MATCH ? (
        <div className={classes.notFoundContainer}>
          <Outlet />
        </div>
      ) : (
        <>
          <Sidebar />
          <TopBar />
          <FloatingActions />
          <div className={classes.wrapper}>
            <Container className={classes.contentContainer}>
              <div className={classes.content}>
                <Outlet />
              </div>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.custom.sidebar.width,
    },
  },
  notFoundContainer: {
    minHeight: '100vh',
    width: '100%',
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

export default MainLayout;
