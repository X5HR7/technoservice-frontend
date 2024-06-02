import { IUser } from '@shared/libs/interfaces';

export interface IInitialState {
  user: IUser | null;
  accessToken: string | null;
}

export interface ISetCredentialsPayload {
  user: IUser;
  accessToken: string;
}
