import { Dispatch, SetStateAction } from 'react';
import { IFullRequest } from '@shared/libs/interfaces';

export interface IRequestModal {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  requestId: string;
  setRequest: Dispatch<SetStateAction<IFullRequest | undefined>>;
}
