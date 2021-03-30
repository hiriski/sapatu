import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ViewListIcon from '@material-ui/icons/ViewList';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import { ROUTES } from 'src/constants';

export default [
  {
    title: 'Dashboard',
    Icon: <DashboardIcon />,
    path: ROUTES.DASHBOARD,
  },
  {
    title: 'Produk',
    Icon: <StoreIcon />,
    path: ROUTES.PRODUCT_LIST,
    children: [
      {
        title: 'Buat Produk',
        Icon: <AddCircleIcon />,
        path: ROUTES.CREATE_PRODUCT,
      },
      {
        title: 'List Produk',
        Icon: <ViewListIcon />,
        path: ROUTES.PRODUCT_LIST,
      },
    ],
  },
  {
    title: 'Order',
    Icon: <ShoppingCartIcon />,
    path: ROUTES.ORDER_LIST,
    children: [
      {
        title: 'Buat Order',
        Icon: <AddShoppingCartIcon />,
        path: ROUTES.CREATE_ORDER,
      },
      {
        title: 'List Order',
        Icon: <ViewListIcon />,
        path: ROUTES.ORDER_LIST,
      },
    ],
  },
  {
    title: 'Resi',
    Icon: <ReceiptIcon />,
    path: ROUTES.RECEIPT_LIST,
    children: [
      {
        title: 'Upload Resi',
        Icon: <PostAddIcon />,
        path: ROUTES.CREATE_RECEIPT,
      },
      {
        title: 'List Resi',
        Icon: <ViewListIcon />,
        path: ROUTES.RECEIPT_LIST,
      },
      {
        title: 'Lacak Pengiriman',
        Icon: <LocalShippingIcon />,
        path: ROUTES.COURIER_TRACKING,
      },
    ],
  },
  {
    title: 'Chatting',
    Icon: <ForumIcon />,
    path: ROUTES.CHAT,
  },
  {
    title: 'TeamWork',
    Icon: <PeopleIcon />,
    path: ROUTES.TEAM,
    children: [
      {
        title: 'Buat User',
        Icon: <PersonAddIcon />,
        path: ROUTES.CREATE_USER,
      },
      {
        title: 'List User',
        Icon: <PeopleIcon />,
        path: ROUTES.TEAM,
      },
    ],
  },
  {
    title: 'Pengaturan',
    Icon: <SettingsIcon />,
    path: ROUTES.SETTINGS,
  },
  {
    title: 'Knowledge',
    Icon: <HelpIcon />,
    path: ROUTES.KNOWLEDGE,
  },
];
