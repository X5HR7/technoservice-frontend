import { IRequestInfo } from '@widgets/RequestInfo/model/request-info.interface.ts';
import React, { FC } from 'react';
import styles from './RequestInfo.module.scss';

const RequestInfo: FC<IRequestInfo> = ({ request }) => {
  const { number, equipment, type, status, createdAt, updatedAt, completedAt, description } =
    request;
  return (
    <div className={styles.request}>
      <h1 className={styles.request__number}>Подробная информация</h1>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Номер заявки:</p>
        <p className={styles['request__item-value']}>{number}</p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Оборудование:</p>
        <p className={styles['request__item-value']}>{equipment}</p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Тип поломки:</p>
        <p className={styles['request__item-value']}>{type}</p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Статус выполнения:</p>
        <p className={styles['request__item-value']}>{status}</p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Дата подачи заявки:</p>
        <p className={styles['request__item-value']}>{new Date(createdAt).toLocaleDateString()}</p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Последнее обновление:</p>
        <p className={styles['request__item-value']}>
          {updatedAt ? new Date(updatedAt).toLocaleDateString() : '-'}
        </p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Дата окончания:</p>
        <p className={styles['request__item-value']}>
          {completedAt ? new Date(completedAt).toLocaleDateString() : '-'}
        </p>
      </div>
      <div className={styles.request__item}>
        <p className={styles['request__item-title']}>Подробное описание проблемы:</p>
        <p className={styles['request__item-value']}>{description}</p>
      </div>
    </div>
  );
};

export { RequestInfo };
