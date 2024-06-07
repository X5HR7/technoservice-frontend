import { IComment } from '@shared/libs/interfaces';

export interface IChat {
  messages: IComment[];
  requestId: string;
}
