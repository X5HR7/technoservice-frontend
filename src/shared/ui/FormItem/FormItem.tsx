import { Input } from '@shared/ui/FormItem/Input/Input.tsx';
import { IFormItem } from '@shared/ui/FormItem/models/form-item.interface.ts';
import React, { FC } from 'react';
import styles from './FormItem.module.scss';

const FormItem: FC<IFormItem> = ({ titleText, errorMessage, input }) => {
  return (
    <div className={`${styles['form__input-group']}`}>
      <label htmlFor={input.id} className={`${styles['form__input-title']}`}>
        {titleText}
      </label>
      <Input {...input} placeholder={`Введите ${titleText.toLowerCase()}`} />
      <p className={`${styles['form__input-field']}`}>{errorMessage}</p>
    </div>
  );
};

export { FormItem };
