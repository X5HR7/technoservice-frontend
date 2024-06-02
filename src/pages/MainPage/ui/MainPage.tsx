import React, { FC } from 'react';
import { FormItem, Spinner } from '@shared/ui';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  return (
    <div>
      <form className={styles.form}>
        <FormItem titleText={'Имя'} errorMessage={'Error'} input={{
          value: '',
          type: 'text',
          maxLength: 30,
          minLength: 5,
          id: 'firstName'
        }} />
        <FormItem titleText={'Фамилия'} errorMessage={'Error'} input={{
          value: '',
          type: 'text',
          maxLength: 30,
          minLength: 5,
          id: 'lastName',
          placeholder: 'Введите фамилию'
        }} />
        <FormItem titleText={'Почта'} errorMessage={'Error'} input={{
          value: '',
          type: 'email',
          maxLength: 30,
          minLength: 5,
          id: 'email'
        }} />
      </form>
      <Spinner size={'large'} />
    </div>
  );
};

export { MainPage };
