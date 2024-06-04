import React, { FC } from 'react';
import styles from './Button.module.scss'

interface IButton {
  disabled: boolean;
  appearance: 'positive' | 'negative' | 'neutral';
  mode: 'primary' | 'secondary';
  children?: any;
}

const Button: FC<IButton> = ({appearance='positive', disabled=false, mode='primary', children}) => {
  return (
    <button className={`${styles.button} ${styles[appearance]} ${styles[mode]}`} disabled={disabled}>
      {children}
    </button>
  );
};

export {Button};
