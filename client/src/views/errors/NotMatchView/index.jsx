import React from 'react';
import { Box, Container, Typography, makeStyles } from '@material-ui/core';
import Page from '../../../components/commons/Page';

const NotMatchView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md" className={classes.container}>
          <Box textAlign="center">
            <img
              alt="Not Found"
              className={classes.image}
              src="/static/images/error-page-not-found-vector.jpg"
            />
          </Box>
          <Typography align="center" color="textPrimary" variant="h1">
            404: Opss..
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
        </Container>
      </Box>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    width: 300,
  },
}));

export default NotMatchView;
