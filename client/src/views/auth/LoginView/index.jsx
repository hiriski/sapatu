import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ROUTES } from 'src/constants';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/redux/actions/authActions';
import Page from 'src/components/commons/Page';

const LoginView = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [googleLoginUrl, setGoogleLoginUrl] = React.useState(null);

  const { isLoading, isSuccess, isError, errorMessage } = useSelector(
    (state) => state.auth.login,
  );

  React.useEffect(() => {
    fetch('http://apisapatu.riski.me/auth/google/url', {
      headers: new Headers({ accept: 'application/json' }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) => setGoogleLoginUrl(data.url))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              username: 'riski',
              password: 'secret',
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                // .email('Mohon isi email dengan benar')
                .max(255)
                .required('Username harus diisi ya.'),
              password: Yup.string().max(255).required('Password harus diisi'),
            })}
            onSubmit={(values) => {
              // navigate(ROUTES.DASHBOARD, { replace: true });
              // console.log(values);
              dispatch(login(values));
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography color="textPrimary" variant="h2">
                    Log In
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Login to your account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  label="Username"
                  margin="normal"
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{' '}
                  <Link
                    component={RouterLink}
                    to={ROUTES.REGISTER}
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
          <Box className={classes.socialLogin}>
            {/* <RouterLink to={ROUTES.AUTH_GOOGLE}>Login with Google</RouterLink> */}
            {googleLoginUrl && (
              <a className="App-link" href={googleLoginUrl}>
                Sign in with Google
              </a>
            )}
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
}));

export default LoginView;
