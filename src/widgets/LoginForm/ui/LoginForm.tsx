import useForm from '@shared/libs/hooks/useForm.ts';
import { IRequestError } from '@shared/libs/interfaces';
import { FormItem, Spinner, SubmitButton } from '@shared/ui';
import { IForm } from '@widgets/LoginForm/lib/form.interface.ts';
import { formInitialValues } from '@widgets/LoginForm/lib/formInitialValues.ts';
import { useLogin } from '@widgets/LoginForm/lib/useLogin.ts';
import React, { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
  const [error, setError] = useState<IRequestError | null>(null);
  const { values, errors, isValid, handleChange, resetForm, setIsValid } =
    useForm<IForm>(formInitialValues);

  const navigate = useNavigate();
  const { handleLogin: login, isLoading } = useLogin();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login(values.email, values.password)
      .then(() => {
        navigate('/', { replace: true });
        resetForm();
      })
      .catch(error => {
        setError(error);
        setIsValid(false);
      });
  };

  return (
    <form className={styles.form} noValidate={true} onSubmit={handleSubmit}>
      <FormItem
        titleText={'Email'}
        errorMessage={errors.email || ''}
        input={{
          id: 'email',
          type: 'email',
          value: values.email,
          onChange: handleChange
        }}
      />
      <FormItem
        titleText={'Пароль'}
        errorMessage={errors.password || ''}
        input={{
          id: 'password',
          type: 'password',
          value: values.password,
          onChange: handleChange,
          minLength: 5
        }}
      />
      <SubmitButton disabled={!isValid || isLoading} error={error?.data?.message?.toString()}>
        {isLoading ? <Spinner size={'small'} /> : 'Войти'}
      </SubmitButton>
    </form>
  );
};

export { LoginForm };
