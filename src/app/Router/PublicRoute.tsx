import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: FC<{ element: FC, isAuth: string }> = ({ element: Component, isAuth, ...props }) => {
  switch (isAuth) {
    case 'auth':
      return (
        <Navigate to="/" replace={true} />
      );
    case 'not-auth':
      return (
        <Component {...props} />
      );
    default:
      return (
        // <Spinner size={'large'}/>
        <div></div>
      );
  }
};

export { PublicRoute };
