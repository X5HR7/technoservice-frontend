import React, { FC } from 'react';
import styles from './Page404.module.scss';
import { Link } from 'react-router-dom';

const Page404: FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles['error-page__text-content']}>
          <h1 className={styles['error-page__title']}>404</h1>
          <p className={styles['error-page__subtitle']}>Страница не найдена</p>
        </div>
        <Link to='/' className={styles.link}>Назад</Link>
      </section>
    </main>
  );
};

export { Page404 };
