import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

const SidebarProfileInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar></Avatar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default SidebarProfileInfo;
