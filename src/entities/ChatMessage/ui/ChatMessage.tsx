import { useGetUserQuery } from '@features/user/user-api.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { IComment, IUser } from '@shared/libs/interfaces';
import { Spinner } from '@shared/ui';
import React, { FC } from 'react';
import styles from './ChatMessage.module.scss';

const ChatMessage: FC<IComment> = ({ authorId, text, createdAt }) => {
  const currentUserId = useTypedSelector(state => state.auth.user?.id);
  const isCurrentUserComment = currentUserId === authorId;

  const { data: author, isLoading } = useGetUserQuery<{ data: IUser; isLoading: boolean }>(
    authorId
  );

  return (
    <li className={`${styles.message} ${isCurrentUserComment ? styles.message_current : ''}`}>
      {
        isLoading ? (
          <Spinner size={'small'} />
        ) : (
          <p className={styles.message__author}>
            {`${author?.firstName} ${author?.lastName}`}
          </p>
        )
      }
      <p className={styles.message__date}>{new Date(createdAt).toLocaleTimeString()}</p>
      <p className={styles.message__text}>{text}</p>
    </li>
  );
};

export { ChatMessage };
