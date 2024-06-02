import { useRegisterMutation } from '@features/auth/auth-api.slice.ts';
import { setCredentials } from '@features/auth/auth.slice.ts';
import { IUser } from '@shared/libs/interfaces';
import { IForm } from '@widgets/RegisterForm/lib/form.interface.ts';
import { useDispatch } from 'react-redux';

const useRegister = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleRegister = async (data: IForm) => {
    const { user, accessToken }: { user: IUser; accessToken: string } = await register({
      ...data
    }).unwrap();
    dispatch(setCredentials({ user, accessToken }));
  };

  return { isLoading, handleRegister };
};

export { useRegister };
