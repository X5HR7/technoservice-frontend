import React, { FC } from 'react';
import styles from './Request.module.scss'
import { IRequestProps } from '@entities/Request/model/request.interface.ts';

const Request: FC<IRequestProps> = () => {
  return (
    <li className={styles.requests__item}></li>
  );
};

export { Request };
