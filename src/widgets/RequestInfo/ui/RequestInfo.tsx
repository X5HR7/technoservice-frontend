import { RequestModal } from '@features/RequestModal';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { Button } from '@shared/ui';
import { IRequestInfo } from '@widgets/RequestInfo/model/request-info.interface.ts';
import React, { FC, useState } from 'react';
import styles from './RequestInfo.module.scss';

const RequestInfo: FC<IRequestInfo> = ({ request, setRequest }) => {
  const { number, equipment, type, status, createdAt, updatedAt, completedAt, description } =
    request;

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const currentUser = useTypedSelector(state => state.auth.user);

  const handleButtonClick = () => {
    setIsOpened(true);
  };

  return (
    <>
      <RequestModal
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        requestId={request.id}
        setRequest={setRequest}
      />
      <div className={styles.request}>
        <h1 className={styles.request__title}>
          <span>Подробная информация</span>
          {['admin', 'master'].includes(currentUser?.role as string) ? (
            <Button
              disabled={false}
              appearance={'positive'}
              mode={'primary'}
              onClick={handleButtonClick}
            >
              Редактировать
            </Button>
          ) : null}
        </h1>
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
          <p className={styles['request__item-value']}>
            {new Date(createdAt).toLocaleDateString()}
          </p>
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
    </>
  );
};

export { RequestInfo };
