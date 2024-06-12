import { IFullRequest } from '@shared/libs/interfaces';
import { Dispatch, SetStateAction } from 'react';

export interface IRequestInfo {
  request: IFullRequest;
  setRequest: Dispatch<SetStateAction<IFullRequest | undefined>>;
}
