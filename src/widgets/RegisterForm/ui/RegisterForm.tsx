import useForm from '@shared/libs/hooks/useForm.ts';
import { IRequestError } from '@shared/libs/interfaces';
import { FormItem, Spinner, SubmitButton } from '@shared/ui';
import { IForm } from '@widgets/RegisterForm/lib/form.interface.ts';
import { formInitialValues } from '@widgets/RegisterForm/lib/formInitialValues.ts';
import { useRegister } from '@widgets/RegisterForm/lib/useRegister.ts';
import React, { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.scss';

const RegisterForm: FC = () => {
  const [error, setError] = useState<IRequestError | null>(null);
  const { values, errors, isValid, handleChange, resetForm, setIsValid } =
    useForm<IForm>(formInitialValues);

  const navigate = useNavigate();
  const { handleRegister: register, isLoading } = useRegister();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({ ...values })
      .then(() => {
        navigate('/', { replace: true });
        resetForm();
      })
      .catch(error => {
        setIsValid(false);
        setError(error);
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
        titleText={'Номер телефона'}
        errorMessage={errors.phone || ''}
        input={{
          id: 'phone',
          type: 'text',
          value: values.phone,
          onChange: handleChange,
          minLength: 11
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
      <FormItem
        titleText={'Имя'}
        errorMessage={errors.firstName || ''}
        input={{
          id: 'firstName',
          type: 'text',
          value: values.firstName,
          onChange: handleChange,
          minLength: 3,
          maxLength: 20
        }}
      />
      <FormItem
        titleText={'Фамилия'}
        errorMessage={errors.lastName || ''}
        input={{
          id: 'lastName',
          type: 'text',
          value: values.lastName,
          onChange: handleChange,
          minLength: 3,
          maxLength: 20
        }}
      />
      <SubmitButton disabled={!isValid || isLoading} error={error?.data?.message?.toString()}>
        {isLoading ? <Spinner size={'small'} /> : 'Войти'}
      </SubmitButton>
    </form>
  );
};

export { RegisterForm };
