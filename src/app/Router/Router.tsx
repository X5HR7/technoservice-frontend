import { ProtectedRoute } from '@app/Router/ProtectedRoute.tsx';
import { PublicRoute } from '@app/Router/PublicRoute.tsx';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPage } from '@pages/AdminPage';
import { ClientRequestsPage } from '@pages/ClientRequestsPage';
import { LoginPage } from '@pages/LoginPage';
import { MainPage } from '@pages/MainPage';
import { MasterRequestsPage } from '@pages/MasterRequestsPage';
import { Page403 } from '@pages/Page403';
import { Page404 } from '@pages/Page404';
import { RegisterPage } from '@pages/RegisterPage';
import { StatisticsPage } from '@pages/StatisticsPage';

interface IRouter {
  isAuth: string;
}

const Router: FC<IRouter> = ({ isAuth }) => {
  return (
    <Routes>
      <Route path={'/'} element={<ProtectedRoute element={MainPage} isAuth={isAuth} />} />
      <Route
        path={'/client'}
        element={<ProtectedRoute element={ClientRequestsPage} isAuth={isAuth} />}
      />
      <Route
        path={'/master'}
        element={<ProtectedRoute element={MasterRequestsPage} isAuth={isAuth} />}
      />
      <Route path={'/admin'} element={<ProtectedRoute element={AdminPage} isAuth={isAuth} />} />
      <Route path={'/statistics'} element={<ProtectedRoute element={StatisticsPage} isAuth={isAuth} />} />
      <Route path={'/sign-in'} element={<PublicRoute element={LoginPage} isAuth={isAuth} />} />
      <Route path={'/sign-up'} element={<PublicRoute element={RegisterPage} isAuth={isAuth} />} />
      <Route path={'/403'} element={<Page403 />} />
      <Route path={'*'} element={<Page404 />} />
    </Routes>
  );
};

export { Router };
