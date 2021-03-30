import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Dev from './Dev';
import navigations from './navigations';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const isMatchesToDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleNavigate = (path) => {
    navigate(path);
  };

  const renderSidebarContent = (
    <div className={classes.drawerContent}>
      <List>
        {navigations.map(({ title, Icon, path, children }, index) => (
          <div key={index}>
            <ListItem
              disableRipple
              className={classes.listItemButton}
              button
              onClick={() => handleNavigate(path)}
            >
              <ListItemIcon>{Icon}</ListItemIcon>
              <ListItemText primary={title} />
              {children &&
                (pathname.startsWith(path) ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                ))}
            </ListItem>
            {children && (
              <Collapse
                in={pathname.startsWith(path)}
                timeout="auto"
                unmountOnExit
              >
                {children.map(({ title, path, Icon }, index) => (
                  <List key={index} component="div" disablePadding>
                    <ListItem
                      className={classes.itemNested}
                      button
                      onClick={() => handleNavigate(path)}
                    >
                      <ListItemIcon>{Icon}</ListItemIcon>
                      <ListItemText primary={title} />
                    </ListItem>
                  </List>
                ))}
              </Collapse>
            )}
          </div>
        ))}
      </List>
      <Dev />
    </div>
  );

  return (
    <Box className={classes.root} zIndex="drawer">
      <Drawer
        className={classes.drawer}
        variant={isMatchesToDesktop ? 'permanent' : 'temporary'}
        classes={{
          paper: classes.paper,
        }}
      >
        {renderSidebarContent}
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
  },
  drawer: {},
  paper: {
    width: theme.custom.sidebar.width,
    borderRight: 0,
    padding: theme.spacing(0, 2),
  },
  listItemButton: {},
  itemNested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default Sidebar;
