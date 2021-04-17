import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const Dev = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListItem button component={Link} to={ROUTES.ACCOUNT}>
          <ListItemAvatar>
            <Avatar alt="Riski" src="/static/images/4yearsago.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="hiriski@outlook.com"
            secondary="Developer and Maintainer"
          />
        </ListItem>
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Dev;
