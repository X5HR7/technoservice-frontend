import { useLoginMutation } from '@features/auth/auth-api.slice.ts';
import { setCredentials } from '@features/auth/auth.slice.ts';
import { IUser } from '@shared/libs/interfaces';
import { useDispatch } from 'react-redux';

const useLogin = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async (email: string, password: string) => {
    const { user, accessToken }: { user: IUser; accessToken: string } = await login({
      email,
      password
    }).unwrap();
    dispatch(setCredentials({ user, accessToken }));
  };

  return { handleLogin, isLoading };
};

export { useLogin };
