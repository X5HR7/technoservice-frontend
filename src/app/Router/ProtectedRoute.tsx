import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<{ element: FC, isAuth: string }> = ({ element: Component, isAuth, ...props }) => {
  switch (isAuth) {
    case 'auth':
      return (
        <Component {...props} />
      );
    case 'not-auth':
      return (
        <Navigate to="/sign-in" replace={true} />
      );
    default:
      return (
        // <Spinner size={'large'}/>
        <div></div>
      );
  }
};

export { ProtectedRoute };
