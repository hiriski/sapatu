import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
// import { ReactComponent as ManSvg } from 'src/assets/svg/man.svg';

const UserInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <ListItem dense disableGutters>
          <ListItemAvatar>
            <Avatar alt="Riski" color="primary" />
          </ListItemAvatar>
          <ListItemText primary="Angga Permana" secondary="Supervisor" />
        </ListItem>
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiListItemText-primary': {
      fontSize: 18,
    },
  },
}));

export default UserInfo;
