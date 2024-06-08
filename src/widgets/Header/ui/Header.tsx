import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
  const userRole = useTypedSelector(state => state.auth.user?.role);

  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
            }
          >
            Главная
          </NavLink>
        </li>

        {userRole === 'client' && (
          <li className={styles.nav__item}>
            <NavLink
              to={'/client'}
              className={({ isActive }) =>
                `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
              }
            >
              Мои запросы
            </NavLink>
          </li>
        )}

        {userRole === 'master' && (
          <li className={styles.nav__item}>
            <NavLink
              to={'/master'}
              className={({ isActive }) =>
                `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
              }
            >
              Текущие запросы
            </NavLink>
          </li>
        )}

        {userRole === 'admin' && (
          <li className={styles.nav__item}>
            <NavLink
              to={'/admin'}
              className={({ isActive }) =>
                `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
              }
            >
              Управление запросами
            </NavLink>
          </li>
        )}
        <li className={styles.nav__item}>
          <NavLink
            to={'/statistics'}
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles.nav__link_active : ''}`
            }
          >
            Статистика
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export { Header };
