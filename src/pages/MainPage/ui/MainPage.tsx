import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage: FC = () => {
  const navigate = useNavigate();
  const currentUser = useTypedSelector(state => state.auth.user);

  useEffect(() => {
    if (currentUser?.role) navigate(`/${currentUser.role}`, { replace: true });
    else navigate(`/statistics`, { replace: true });
  }, []);

  return null;
};

export { MainPage };
