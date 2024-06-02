import { RegisterForm } from '@widgets/RegisterForm';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.scss';

const RegisterPage: FC = () => {
  return (
    <div className={styles.register}>
      {/* Header */}
      <main className={styles.main}>
        <section className={styles['form-section']}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
          <RegisterForm />
        </section>
        <section className={`${styles['form-section']} ${styles.nav}`}>
          <p className={styles['login-text']}>Уже зарегистрированы?</p>
          <Link to={'/sign-in'} replace={true} className={styles.link}>
            Войти
          </Link>
        </section>
      </main>
    </div>
  );
};

export { RegisterPage };
