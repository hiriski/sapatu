import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const ProductItem = () => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={'Hello world'} secondary={'Lorem ipsum'} />
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default ProductItem;
