import { IRequest } from '@shared/libs/interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface ICreateRequestForm {
  isModalOpened: boolean;
  closeModal: () => void;
  setRequests: Dispatch<SetStateAction<IRequest[]>>;
}
