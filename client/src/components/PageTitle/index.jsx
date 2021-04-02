import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const PageTitle = ({ title, subtitle, icon }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <div className={classes.iconContainer}>{icon}</div>
        <div className={clsx(classes.textContainer, icon && classes.hasIcon)}>
          <Typography className={classes.title} component="h1" variant="h1">
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
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: theme.spacing(0.75),
    color: theme.palette.text.secondary,
  },
  subtitle: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
  },
  container: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    '& svg': {
      fontSize: 50,
    },
  },
  hasIcon: {
    marginLeft: theme.spacing(2),
  },
  textContainer: {},
}));

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
};

export default PageTitle;
