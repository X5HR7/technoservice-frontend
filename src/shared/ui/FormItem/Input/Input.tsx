import { IInput } from '@shared/ui/FormItem/models/input.interface.ts';
import React, { FC } from 'react';
import styles from './Input.module.scss';

const Input: FC<IInput> = ({ type, value, ...props }) => {
  return (
    <input
      className={`${styles.form__input} ${type === 'email' ? styles.form__input_type_email : ''}`}
      required={true}
      type={type}
      {...{ ...props, value: value ? value : '' }}
    />
  );
};

export { Input };
