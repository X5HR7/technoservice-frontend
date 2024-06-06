import { useGetUserRequestQuery } from '@features/request/request-api.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { IFullRequest } from '@shared/libs/interfaces';
import { Spinner } from '@shared/ui';
import { Chat } from '@widgets/Chat';
import { Header } from '@widgets/Header';
import { RequestInfo } from '@widgets/RequestInfo';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RequestPage.module.scss';

const RequestPage: FC = () => {
  const currentUser = useTypedSelector(state => state.auth.user);
  const { id: requestId } = useParams();
  const { data: request, isLoading } = useGetUserRequestQuery<{
    data: IFullRequest;
    isLoading: boolean;
  }>(requestId as string);

  useEffect(() => {
    if (!isLoading) {
      console.log(request);
    }
  }, [isLoading]);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {isLoading ? (
          <Spinner size={'large'} />
        ) : (
          <>
            <section className={styles.info}>
              <RequestInfo request={request} />
            </section>
            <section className={styles.chat}>
              <Chat />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export { RequestPage };
