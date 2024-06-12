import { Router } from '@app/Router/Router.tsx';
import { useRefreshTokensQuery } from '@features/auth/auth-api.slice.ts';
import { ISetCredentialsPayload } from '@features/auth/auth.interface.ts';
import { setCredentials } from '@features/auth/auth.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = useState<string>('loading');
  const { user } = useTypedSelector(state => state.auth);
  const { data, isLoading } = useRefreshTokensQuery<{
    data: ISetCredentialsPayload;
    isLoading: boolean;
  }>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
    if (isLoading === false && !data) setIsAuth('not-auth');
  }, [isLoading]);

  useEffect(() => {
    if (user) {
      setIsAuth('auth');
    } else {
      setIsAuth('not-auth');
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Router isAuth={isAuth} />
    </BrowserRouter>
  );
};
export { App };
