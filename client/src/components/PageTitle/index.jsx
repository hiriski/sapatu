import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { ROUTES } from 'src/constants';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const PageTitle = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.head} component="h1" variant="h1">
        {title}
      </Typography>
      <Typography
        className={classes.subtitle}
        component="p"
        variant="subtitle2"
      >
        {subtitle}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    fontWeight: 'bold',
  },
}));

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageTitle;
