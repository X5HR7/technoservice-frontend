import { useGetUserRequestsQuery } from '@features/request/request-api.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { IRequest } from '@shared/libs/interfaces';
import { Button, Spinner } from '@shared/ui';
import { Header } from '@widgets/Header';
import { Requests } from '@widgets/Requests';
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ClientRequestsPage.module.scss';

const ClientRequestsPage: FC = () => {
  const navigate = useNavigate();
  const currentUser = useTypedSelector(state => state.auth.user);

  const { data: requests, isLoading } = useGetUserRequestsQuery<{
    data: IRequest[];
    isLoading: boolean;
  }>(null);

  useEffect(() => {
    if (currentUser?.role !== 'client') navigate('/403', { replace: true });
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {isLoading ? (
          <Spinner size={'large'} />
        ) : (
          <section className={styles.requests}>
            <Requests requests={requests} />
            <Button disabled={false} appearance={'positive'} mode={'secondary'}>
              Test btn
            </Button>
          </section>
        )}
      </main>
    </div>
  );
};

export { ClientRequestsPage };
