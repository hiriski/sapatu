import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from 'src/redux/actions/alertActions';

const SnackbarComponent = () => {
  const classes = useStyles();
  const { show, message, autoHideDuration, severity } = useSelector(
    (state) => state.alert,
  );
  const dispatch = useDispatch();

  /** close alert */
  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <Snackbar
      open={show}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        elevation={8}
        onClose={handleClose}
        severity={severity}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default SnackbarComponent;
