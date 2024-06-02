import React, { FC } from 'react';
import styles from './LoginPage.module.scss';
import { LoginForm } from '@widgets/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage: FC = () => {
  return (
    <div className={styles.login}>
      {/* Header */}
      <main className={styles.main}>
        <section className={styles['form-section']}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
          <LoginForm />
        </section>
        <section className={`${styles['form-section']} ${styles.nav}`}>
          <p className={styles['login-text']}>Ещё не зарегистрированы?</p>
          <Link to={'/sign-up'} replace={true} className={styles.link}>Создать аккаунт</Link>
        </section>
      </main>
    </div>
  );
};

export { LoginPage };
