import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { ROUTES } from 'src/constants';

const FloatingActions = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="add"
        size="medium"
        onClick={() => navigate(ROUTES.CREATE_PRODUCT)}
      >
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" size="medium">
        <EditIcon />
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default FloatingActions;
