import { useGetUserRequestQuery } from '@features/request/request-api.slice.ts';
import { IFullRequest } from '@shared/libs/interfaces';
import { Spinner } from '@shared/ui';
import { Chat } from '@widgets/Chat';
import { Header } from '@widgets/Header';
import { RequestInfo } from '@widgets/RequestInfo';
import { RequestNotificationHistory } from '@widgets/RequestNotificationHistory';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './RequestPage.module.scss';

const RequestPage: FC = () => {
  const { id: requestId } = useParams();
  const { data: requestResponse, isLoading } = useGetUserRequestQuery<{
    data: IFullRequest;
    isLoading: boolean;
  }>(requestId as string);

  const [request, setRequest] = useState<IFullRequest>();

  useEffect(() => {
    if (!isLoading) {
      setRequest(requestResponse);
    }
  }, [isLoading]);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {isLoading || !request ? (
          <Spinner size={'large'} />
        ) : (
          <>
            <section className={styles.info}>
              <RequestInfo request={request as IFullRequest} setRequest={setRequest} />
            </section>
            <section className={styles.chat}>
              <Chat messages={(request as IFullRequest)?.comments} requestId={(request as IFullRequest)?.id} />
            </section>
            <section className={styles.history}>
              <RequestNotificationHistory notifications={(request as IFullRequest)?.notifications} />
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export { RequestPage };
