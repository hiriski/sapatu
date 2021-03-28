import React from 'react';
import { ROUTES } from '../constants';

import { Navigate, Outlet } from 'react-router-dom';

/* layouts */
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

/* views */
import DashboardView from '../views/dashboard';
import LoginView from '../views/auth/LoginView';
import RegisterView from '../views/auth/RegisterView';
import NotMatchView from '../views/errors/NotMatchView';
import SettingsView from '../views/settings';

import CreateProductView from 'src/views/product/CreateProductView';
import ProductDetailsView from 'src/views/product/ProductDetailsView';
import ProductListView from '../views/product/ProductListView';

import CreateOrderView from 'src/views/order/CreateOrderView';
import OrderDetailsView from 'src/views/order/OrderDetailsView';
import OrderListView from '../views/order/OrderListView';

import CreateReceiptView from 'src/views/receipt/CreateReceiptView';
import ReceiptListView from '../views/receipt/ReceiptListView';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <MainLayout /> : <Navigate to={ROUTES.LOGIN} />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardView />,
      },
      {
        path: 'product',
        element: <Outlet />,
        children: [
          { path: '/create', element: <CreateProductView /> },
          { path: '/:id', element: <ProductDetailsView /> },
          { path: '/', element: <ProductListView /> },
        ],
      },
      {
        path: 'order',
        element: <Outlet />,
        children: [
          { path: '/create', element: <CreateOrderView /> },
          { path: '/:id', element: <OrderDetailsView /> },
          { path: '/', element: <OrderListView /> },
        ],
      },
      {
        path: 'receipt',
        element: <Outlet />,
        children: [
          { path: '/create', element: <CreateReceiptView /> },
          { path: '/', element: <ReceiptListView /> },
        ],
      },
      { path: 'settings', element: <SettingsView /> },
      { path: '/', element: <Navigate to={ROUTES.DASHBOARD} /> },
      { path: '*', element: <Navigate to={ROUTES.NOT_MATCH} /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <AuthLayout /> : <Navigate to={ROUTES.DASHBOARD} />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotMatchView /> },
      { path: '/', element: <Navigate to={ROUTES.LOGIN} /> },
      { path: '*', element: <Navigate to={ROUTES.NOT_MATCH} /> },
    ],
  },
];

export default routes;
