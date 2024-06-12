import { useLogoutMutation } from '@features/auth/auth-api.slice.ts';
import { logout } from '@features/auth/auth.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { Button } from '@shared/ui';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: FC = () => {
  const userRole = useTypedSelector(state => state.auth.user?.role);
  const [logoutOnServer, { isLoading }] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuitButtonClick = async () => {
    const isLoggedOut = await logoutOnServer(null).unwrap();

    if (isLoggedOut) {
      dispatch(logout());
      // setTimeout(() => , 2000);
      navigate('/', { replace: true })
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <ul className={styles.nav}>
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
        <div className={styles.quit}>
          <Button
            disabled={isLoading}
            appearance={'negative'}
            mode={'primary'}
            onClick={handleQuitButtonClick}
          >
            Выйти
          </Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
