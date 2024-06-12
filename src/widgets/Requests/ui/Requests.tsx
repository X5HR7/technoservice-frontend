import { Request } from '@entities/Request';
import { CreateRequestForm } from '@features/CreateRequestForm';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { IRequest } from '@shared/libs/interfaces';
import { Button } from '@shared/ui';
import { Modal } from '@widgets/Modal';
import { IRequests } from '@widgets/Requests/model/requests.interface.ts';
import React, { FC, useState } from 'react';
import styles from './Requests.module.scss';

const Requests: FC<IRequests> = ({ requests: requestsArr }) => {
  const currentUser = useTypedSelector(state => state.auth.user);

  const [isOpened, setIsOpened] = useState(false);
  const [requests, setRequests] = useState<IRequest[]>(requestsArr);

  const currentRequests = requests?.filter(request => !Boolean(request.completedAt));
  const completedRequests = requests?.filter(requests => Boolean(requests.completedAt));

  const handleOpenModalButtonClick = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Modal isOpened={isOpened} setIsOpened={setIsOpened} className={styles.modal}>
        <CreateRequestForm
          isModalOpened={isOpened}
          closeModal={closeModal}
          setRequests={setRequests}
        />
      </Modal>
      <section className={styles['request-section']}>
        <div className={styles.header}>
          <h2 className={styles['request-section__header']}>Текущие заявки</h2>
          {['admin', 'master'].includes(currentUser?.role as string) ? null : (
            <Button
              disabled={false}
              appearance={'positive'}
              mode={'secondary'}
              onClick={handleOpenModalButtonClick}
            >
              Новая заявка
            </Button>
          )}
        </div>
        <ul className={styles.requests}>
          {currentRequests.length > 0 ? (
            currentRequests.map(request => <Request request={request} key={request.id} />)
          ) : (
            <p className={styles.request__not_found}>Обрабатываемых заявок на данный момент нет!</p>
          )}
        </ul>
      </section>
      {currentUser?.role === 'admin' ? null : (
        <section className={styles['request-section']}>
          <h2 className={styles['request-section__header']}>История заявок</h2>
          <ul className={styles.requests}>
            {completedRequests.length > 0 ? (
              completedRequests.map(request => <Request request={request} key={request.id} />)
            ) : (
              <p className={styles.request__not_found}>Вы никогда не оставляли у нас заявки!</p>
            )}
          </ul>
        </section>
      )}
    </>
  );
};

export { Requests };
