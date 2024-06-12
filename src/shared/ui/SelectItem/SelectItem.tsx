import { Select } from '@shared/ui/SelectItem/Select/Select.tsx';
import { ISelectItem } from '@shared/ui/SelectItem/models/select-item.interface.ts';
import React, { FC } from 'react';
import styles from './SelectItem.module.scss';

const SelectItem: FC<ISelectItem> = ({ titleText, errorMessage, select }) => {
  return (
    <div className={`${styles['form__select-group']}`}>
      <label htmlFor={select.id} className={`${styles['form__select-title']}`}>
        {titleText}
      </label>
      <Select {...select} />
      <p className={`${styles['form__select-field']}`}>{errorMessage}</p>
    </div>
  );
};

export { SelectItem };
