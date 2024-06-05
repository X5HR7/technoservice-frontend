import closeButtonIcon from '@shared/assets/close-btn.svg';
import React, { FC, useCallback, useEffect } from 'react';
import styles from './Modal.module.scss';

interface IModal {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  children?: any;
  className?: string;
}

const Modal: FC<IModal> = ({ isOpened, setIsOpened, children, className }) => {
  const handleCloseOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event?.key?.toLowerCase() === 'escape') {
        setIsOpened(false);
      }
    },
    [setIsOpened]
  );

  useEffect(() => {
    if (isOpened) document.addEventListener('keydown', handleCloseOnEsc);
    else document.removeEventListener('keydown', handleCloseOnEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseOnEsc);
    };
  }, [isOpened, handleCloseOnEsc]);

  const closeModal = () => {
    setIsOpened(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.modal} ${isOpened ? styles.modal__opened : ''}`} onClick={closeModal}>
      <div className={`${styles.modal__container} ${className || ''}`} onClick={handleModalClick}>
        <button className={styles.modal__button} type={'button'} onClick={closeModal}>
          <img src={closeButtonIcon} alt='Close' className={styles.modal__button} />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
