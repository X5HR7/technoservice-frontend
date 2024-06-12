import { ISelectOption } from '@shared/ui/SelectItem/models/select-option.interface.ts';
import { ISelect } from '@shared/ui/SelectItem/models/select.interface.ts';
import { Icon16Dropdown } from '@vkontakte/icons';
import React, { FC, useEffect, useState } from 'react';
import styles from './Select.module.scss';

const Select: FC<ISelect> = ({ defaultSelectText, options, setValue }) => {
  const [selectText, setSelectText] = useState<string>(defaultSelectText);
  const [showOptionList, setShowOptionList] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<ISelectOption[]>(options);

  // @ts-ignore
  const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
    if (
      !event?.target?.classList.contains('custom-select-option') &&
      !event?.target?.classList.contains('selected-text')
    ) {
      setShowOptionList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleListDisplay = () => {
    setShowOptionList(prevState => !prevState);
  };

  // @ts-ignore
  const handleOptionClick = (event: MouseEvent<HTMLElement>) => {
    setSelectText(event?.target?.getAttribute('data-name'));
    setValue(event?.target?.getAttribute('value'));
    setShowOptionList(false);
  };

  return (
    <div className={styles.select}>
      <div className={styles.select__value} onClick={handleListDisplay}>
        <span>{selectText}</span>
        <Icon16Dropdown className={`${styles.arrow} ${showOptionList ? styles.arrow_up : ''}`} />
      </div>
      {showOptionList && (
        <ul className={styles.select__options}>
          {optionList.map(option => {
            return (
              <li
                className={styles.select__option}
                data-name={option.name}
                value={option.id}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Select };
