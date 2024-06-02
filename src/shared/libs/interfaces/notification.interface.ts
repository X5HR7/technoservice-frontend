import { IUser } from '@shared/libs/interfaces/user.interface.ts';
import { IRequest } from '@shared/libs/interfaces/request.interface.ts';

export interface INotification {
  id: string;
  event: string;
  status: string;
  viewed: boolean;
  createdAt: Date;
  receiverId: string;
  requestId: string;

  receiver?: IUser;
  request?: IRequest;
}
