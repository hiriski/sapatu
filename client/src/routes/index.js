import React from 'react';
import { ROUTES } from '../constants';

import { Navigate, Outlet } from 'react-router-dom';

/* layouts */
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

/* views */
import DashboardView from 'src/views/dashboard';
import LoginView from 'src/views/auth/LoginView';
import RegisterView from 'src/views/auth/RegisterView';
import NotMatchView from 'src/views/errors/NotMatchView';
import SettingsView from 'src/views/settings';

import CreateProductView from 'src/views/product/CreateProductView';
import ProductDetailsView from 'src/views/product/ProductDetailsView';
import ProductListView from 'src/views/product/ProductListView';

import CreateOrderView from 'src/views/order/CreateOrderView';
import OrderDetailsView from 'src/views/order/OrderDetailsView';
import OrderListView from 'src/views/order/OrderListView';

import CreateReceiptView from 'src/views/receipt/CreateReceiptView';
import ReceiptListView from 'src/views/receipt/ReceiptListView';
import ChatListView from 'src/views/chat/ChatListView';
import TeamListView from 'src/views/team/TeamListView';
import KnowledgeView from 'src/views/knowledge';
import CourierTrackingView from 'src/views/receipt/CourierTrackingView';
import CreateUserView from 'src/views/team/CreateUserView';

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
          { path: '/track/:id', element: <CourierTrackingView /> },
          { path: '/', element: <ReceiptListView /> },
        ],
      },
      {
        path: 'chat',
        element: <Outlet />,
        children: [{ path: '/', element: <ChatListView /> }],
      },
      {
        path: 'team',
        element: <Outlet />,
        children: [
          { path: '/create', element: <CreateUserView /> },
          { path: '/', element: <TeamListView /> },
        ],
      },
      {
        path: 'settings',
        element: <Outlet />,
        children: [{ path: '/', element: <SettingsView /> }],
      },
      { path: 'knowledge', element: <KnowledgeView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '404', element: <NotMatchView /> },
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
