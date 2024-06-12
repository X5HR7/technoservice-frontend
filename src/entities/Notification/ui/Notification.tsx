import { INotification } from '@shared/libs/interfaces';
import { notificationMessages } from '@shared/libs/utils/notificationMessages.ts';
import React, { FC } from 'react';
import styles from './Notification.module.scss';

const Notification: FC<INotification> = ({ event }) => {
  return (
    <li className={styles.notification}>
      <p className={styles.notification__title}>Событие:</p>
      <p className={styles.notification__text}>
        {
          notificationMessages[
            event as 'request-created' | 'request-master-set' | 'request-status-updated'
          ]
        }
      </p>
    </li>
  );
};

export { Notification };
