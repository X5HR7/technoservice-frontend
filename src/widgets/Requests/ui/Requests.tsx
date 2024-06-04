import { IRequests } from '@widgets/Requests/model/requests.interface.ts';
import React, { FC } from 'react';
import styles from './Requests.module.scss';
import { Request } from '@entities/Request';

const Requests: FC<IRequests> = ({ requests }) => {
  const currentRequests = requests?.filter(request => !Boolean(request.completedAt));
  const completedRequests = requests?.filter(requests => Boolean(requests.completedAt));

  return (
    <>
      <section className={styles['request-section']}>
        <h2 className={styles['request-section__header']}>Текущие заявки</h2>
        <ul className={styles.requests}>
          {
            currentRequests.length > 0 ? (
              currentRequests.map(request => (
               <Request request={request} key={request.id} />
              ))
            ) : (
              <p className={styles.request__not_found}>Обрабатываемых заявок на данный момент нет!</p>
            )
          }
        </ul>
      </section>
      <section className={styles['request-section']}>
        <h2 className={styles['request-section__header']}>История заявок</h2>
        <ul className={styles.requests}>
          {
            completedRequests.length > 0 ? (
              completedRequests.map(request => (
                <Request request={request} key={request.id} />
              ))
            ) : (
              <p className={styles.request__not_found}>Вы никогда не оставляли у нас заявки!</p>
            )
          }
        </ul>
      </section>
    </>
  );
};

export { Requests };
