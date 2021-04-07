import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ROUTES } from 'src/constants';

const FloatingActions = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        component={RouterLink}
        to={ROUTES.CREATE_PRODUCT}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(5),
    zIndex: theme.zIndex.tooltip,
  },
}));

export default FloatingActions;
