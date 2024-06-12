import { useUpdateMaster } from '@features/RequestModal/lib/useUpdateMaster.ts';
import { useUpdateStatus } from '@features/RequestModal/lib/useUpdateStatus.ts';
import { IRequestModal } from '@features/RequestModal/model/request-modal.interface.ts';
import { useGetMastersQuery } from '@features/user/user-api.slice.ts';
import { useTypedSelector } from '@shared/libs/hooks/useTypedSelector.ts';
import { IUser } from '@shared/libs/interfaces';
import { SelectItem, Spinner, SubmitButton } from '@shared/ui';
import { Modal } from '@widgets/Modal';
import React, { FC, FormEvent, useEffect, useState } from 'react';
import styles from './RequestModal.module.scss';

const RequestModal: FC<IRequestModal> = ({ isOpened, setIsOpened, requestId, setRequest }) => {
  const [status, setStatus] = useState<string>('');
  const [masterId, setMasterId] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const currentUser = useTypedSelector(state => state.auth.user);

  const { data: masters, isLoading: isMastersLoading } = useGetMastersQuery<{
    data: IUser[];
    isLoading: boolean;
  }>(null);

  const { handleMasterUpdate: updateMaster, isLoading: isUpdateMasterLoading } = useUpdateMaster();
  const { handleStatusUpdate: updateStatus, isLoading: isUpdateStatusLoading } = useUpdateStatus();

  useEffect(() => {
    if ((!status || !masterId) && currentUser?.role !== 'master') setIsValid(false);
    else if (!status && currentUser?.role === 'master') setIsValid(false);
    else setIsValid(true);
  }, [status, masterId]);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValid(false);

    if (masterId) {
      const request = await updateMaster(requestId, masterId);
      setRequest(request);
    }

    if (status) {
      // @ts-ignore
      const request = await updateStatus(requestId, status);
      setRequest(request);
    }

    setTimeout(() => setIsOpened(false), 2000);
  };

  return (
    <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
      <h2 className={styles.title}>Обновление заявки</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <SelectItem
          titleText={'Обновить статус'}
          errorMessage={''}
          select={{
            id: 'status',
            defaultSelectText: 'Статус',
            options: [
              { id: 'pending', name: 'pending' },
              { id: 'in-progress', name: 'in-progress' },
              { id: 'completed', name: 'completed' }
            ],
            setValue: setStatus
          }}
        />
        {currentUser?.role !== 'admin' ? null : isMastersLoading ? (
          <Spinner size={'medium'} />
        ) : (
          <SelectItem
            titleText={'Выбрать мастера'}
            errorMessage={''}
            select={{
              id: 'master',
              defaultSelectText: 'Мастер',
              options: masters?.map(({ id, firstName, lastName }) => ({
                id,
                name: `${firstName} ${lastName}`
              })),
              setValue: setMasterId
            }}
          />
        )}

        <div className={styles.form__button}>
          <SubmitButton
            disabled={
              isMastersLoading || !isValid || isUpdateMasterLoading || isUpdateStatusLoading
            }
          >
            Сохранить
          </SubmitButton>
        </div>
      </form>
    </Modal>
  );
};

export { RequestModal };
