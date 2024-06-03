import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Page403.module.scss';

const Page403: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles['error-page__text-content']}>
          <h1 className={styles['error-page__title']}>403</h1>
          <p className={styles['error-page__subtitle']}>Нет прав доступа</p>
        </div>
        <Link to='/' className={styles.link}>
          Назад
        </Link>
      </section>
    </main>
  );
};

export { Page403 };
