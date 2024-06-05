import React, { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  disabled: boolean;
  appearance: 'positive' | 'negative' | 'neutral';
  mode: 'primary' | 'secondary';
  onClick: () => void;
  children?: any;
}

const Button: FC<IButton> = ({
  appearance = 'positive',
  disabled = false,
  mode = 'primary',
  children,
  onClick
}) => {
  return (
    <button
      className={`${styles.button} ${styles[appearance]} ${styles[mode]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
