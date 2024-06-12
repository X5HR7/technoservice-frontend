import { ChatMessage } from '@entities/ChatMessage';
import { useSendMessageMutation } from '@features/comment/comment-api.slice.ts';
import { IComment } from '@shared/libs/interfaces';
import { IChat } from '@widgets/Chat/model/chat.interface.ts';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from './Chat.module.scss';

const Chat: FC<IChat> = ({ messages: messagesInitialValue, requestId }) => {
  const [messages, setMessages] = useState<IComment[]>(messagesInitialValue);
  const [currentMessageValue, setCurrentMessageValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  useEffect(() => {
    if (currentMessageValue) setIsValid(true);
    else setIsValid(false);
  }, [currentMessageValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentMessageValue(event.target.value);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const comment: IComment = await sendMessage({
      requestId,
      message: currentMessageValue
    }).unwrap();

    if (comment) {
      setMessages(prev => [...prev, comment]);
      setCurrentMessageValue('');
    } else setIsValid(false);
  };

  return (
    <div className={styles.chat}>
      <h1 className={styles.chat__title}>Чат</h1>
      <div className={styles.chat__content}>
        <ul className={styles.chat__messages}>
          {messages.length > 0 ? (
            messages.map(message => <ChatMessage {...message} key={message.id} />)
          ) : (
            <p className={styles.empty}>К данной заявке еще нет комментариев!</p>
          )}
        </ul>
        <form className={styles.chat__form} onSubmit={handleFormSubmit}>
          <input
            type={'text'}
            className={styles['chat__form-input']}
            value={currentMessageValue}
            onChange={handleInputChange}
          />
          <button
            type={'submit'}
            disabled={!isValid || isLoading}
            className={styles['chat__form-button']}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export { Chat };
