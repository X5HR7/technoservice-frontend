import { IRequestProps } from '@entities/Request/model/request.interface.ts';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Request.module.scss';

const Request: FC<IRequestProps> = ({ request }) => {
  const { id, number, equipment, type, description, status, createdAt } = request;

  return (
    <li className={styles.requests__item}>
      <Link to={`/requests/${id}`} replace={true} className={styles.link}>
        <div className={styles.request}>
          <div className={styles.request__col}>
            <p className={styles['request__col-title']}>Номер заявки</p>
            <p className={styles['request__col-value']}>{number}</p>
          </div>
          <div className={styles.request__col}>
            <p className={styles['request__col-title']}>Оборудование</p>
            <p className={styles['request__col-value']}>{equipment}</p>
          </div>
          <div className={styles.request__col}>
            <p className={styles['request__col-title']}>Тип неисправности</p>
            <p className={styles['request__col-value']}>{type}</p>
          </div>
          <div className={styles.request__col}>
            <p className={styles['request__col-title']}>Статус</p>
            <p className={styles['request__col-value']}>{status}</p>
          </div>
          <div className={styles.request__col}>
            <p className={styles['request__col-title']}>Создан</p>
            <p className={styles['request__col-value']}>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export { Request };
