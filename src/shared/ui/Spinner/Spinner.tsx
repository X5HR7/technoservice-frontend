import React, { FC } from 'react';
import styles from './Spinner.module.scss'

interface ISpinner {
  size: 'small' | 'medium' | 'large';
}

const Spinner: FC<ISpinner> = ({size}) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`}>

    </div>
  );
};

export {Spinner};
