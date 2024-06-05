import { Button, FormItem, Spinner } from '@shared/ui';
import { Header } from '@widgets/Header';
import { Modal } from '@widgets/Modal';
import React, { FC, useState } from 'react';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div>
      <Header />
      <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
        <form className={styles.form}>
          <FormItem
            titleText={'Имя'}
            errorMessage={'Error'}
            input={{
              value: '',
              type: 'text',
              maxLength: 30,
              minLength: 5,
              id: 'firstName'
            }}
          />
          <FormItem
            titleText={'Фамилия'}
            errorMessage={'Error'}
            input={{
              value: '',
              type: 'text',
              maxLength: 30,
              minLength: 5,
              id: 'lastName',
              placeholder: 'Введите фамилию'
            }}
          />
          <FormItem
            titleText={'Почта'}
            errorMessage={'Error'}
            input={{
              value: '',
              type: 'email',
              maxLength: 30,
              minLength: 5,
              id: 'email'
            }}
          />
        </form>
      </Modal>

      <Spinner size={'large'} />
      <Button
        disabled={false}
        appearance={'positive'}
        mode={'primary'}
        onClick={() => setIsOpened(true)}
      >
        Open
      </Button>
    </div>
  );
};

export { MainPage };
