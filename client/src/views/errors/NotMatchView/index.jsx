import React from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from '@material-ui/core';
import Page from '../../../components/commons/Page';
import { ROUTES } from 'src/constants';
import { useNavigate } from 'react-router-dom';

const NotMatchView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md" className={classes.container}>
          <Box>
            <img
              alt="Not Found"
              className={classes.image}
              src="/static/images/error-page-not-found-vector.jpg"
            />
          </Box>
          <Box className={classes.textContainer}>
            <Typography color="textPrimary" variant="h1">
              404: Opss..
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Aku nggak bisa menemukan halaman yang kamu minta
            </Typography>
            <Box className={classes.buttonContainer}>
              <Button
                onClick={() => navigate(ROUTES.DASHBOARD)}
                variant="outlined"
                color="primary"
              >
                Balik ke Dashboard
              </Button>
            </Box>
          </Box>
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
    width: 250,
  },
  textContainer: {
    paddingLeft: theme.spacing(2),
    '& h1': {
      fontWeight: 'bold',
      fontSize: 34,
      marginBottom: theme.spacing(2),
    },
    '& .MuiTypography-subtitle2': {
      fontSize: 16,
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(3),
  },
}));

export default NotMatchView;
