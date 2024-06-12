import { IStatItem } from '@entities/StatItem/model/stat-item.interface.ts';
import React, { FC } from 'react';
import styles from './StatItem.module.scss';

const StatItem: FC<IStatItem> = ({ title, value }) => {
  return (
    <li className={styles.stat}>
      <p className={styles.stat__title}>{title}</p>
      <p className={styles.stat__value}>{value}</p>
    </li>
  );
};

export { StatItem };
