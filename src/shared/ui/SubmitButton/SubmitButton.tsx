import React, { FC } from 'react';
import styles from './SubmitButton.module.scss';

interface ISubmitButton {
  disabled: boolean;
  form?: string;
  children: any,
  error?: string
}

const SubmitButton: FC<ISubmitButton> = ({ disabled, form, children, error }) => {
  return (
    <>
      <button type='submit' className={styles['form__submit-button']} disabled={disabled} form={form}>
        {children}
      </button>
      <p className={styles.error}>{error}</p>
    </>
  );
};

export { SubmitButton };
