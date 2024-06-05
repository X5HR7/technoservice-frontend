import { ISchema } from '@features/CreateRequestForm/lib/ISchema.ts';
import { formInitialValues } from '@features/CreateRequestForm/lib/formInitialValues.ts';
import { ICreateRequestForm } from '@features/CreateRequestForm/model/CreateRequestForm.ts';
import { useCreateRequestMutation } from '@features/request/request-api.slice.ts';
import useForm from '@shared/libs/hooks/useForm.ts';
import { FormItem, Spinner, SubmitButton } from '@shared/ui';
import React, { FC, FormEvent, useEffect } from 'react';
import styles from './CreateRequestForm.module.scss';

const CreateRequestForm: FC<ICreateRequestForm> = ({ isModalOpened, closeModal, setRequests }) => {
  const { values, errors, isValid, setIsValid, handleChange, resetForm } =
    useForm<ISchema>(formInitialValues);
  const [createRequest, { isLoading }] = useCreateRequestMutation();

  useEffect(() => {
    if (!isModalOpened) {
      resetForm();
    }
  }, [isModalOpened]);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const request = await createRequest({ ...values }).unwrap();
    if (!request) {
      setIsValid(false);
    } else {
      setRequests(prev => [...prev, request]);
      closeModal();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate={true} className={styles.form}>
      <FormItem
        titleText={'Оборудование'}
        errorMessage={errors?.equipment || ''}
        input={{
          id: 'equipment',
          type: 'text',
          value: values.equipment,
          onChange: handleChange,
          placeholder: 'Оборудование',
          minLength: 3
        }}
      />
      <FormItem
        titleText={'Тип поломки'}
        errorMessage={errors?.type || ''}
        input={{
          id: 'type',
          type: 'text',
          value: values.type,
          onChange: handleChange,
          placeholder: 'Тип поломки',
          minLength: 3
        }}
      />
      <FormItem
        titleText={'Описание проблемы'}
        errorMessage={errors?.description || ''}
        input={{
          id: 'description',
          type: 'text',
          value: values.description,
          onChange: handleChange,
          placeholder: 'Описание',
          minLength: 3
        }}
      />
      <SubmitButton disabled={!isValid}>
        {isLoading ? <Spinner size={'small'} /> : 'Создать'}
      </SubmitButton>
    </form>
  );
};

export { CreateRequestForm };
