import { INotification } from '@shared/libs/interfaces';
import React, { FC } from 'react';
import styles from './Notification.module.scss';

const Notification: FC<INotification> = ({ event }) => {
  return (
    <li className={styles.notification}>
      <p className={styles.notification__title}>Событие:</p>
      <p className={styles.notification__text}>{event}</p>
    </li>
  );
};

export { Notification };
