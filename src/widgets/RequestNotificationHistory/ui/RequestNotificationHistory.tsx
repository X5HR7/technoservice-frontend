import { Notification } from '@entities/Notification';
import { INotification } from '@shared/libs/interfaces';
import { IRequestNotificationHistory } from '@widgets/RequestNotificationHistory/model/request-norification-history.interface.ts';
import React, { FC, useState } from 'react';
import styles from './RequestNotificationHistory.module.scss';

const RequestNotificationHistory: FC<IRequestNotificationHistory> = ({
  notifications: notificationsInitialValue
}) => {
  const [notifications, setNotifications] = useState<INotification[]>(notificationsInitialValue);

  return (
    <div className={styles.notifications}>
      <h1 className={styles.notifications__title}>История уведомлений</h1>
      <ul className={styles.notifications__list}>
        {notifications.map(notification => (
          <Notification {...notification} key={notification.id} />
        ))}
      </ul>
    </div>
  );
};

export { RequestNotificationHistory };
