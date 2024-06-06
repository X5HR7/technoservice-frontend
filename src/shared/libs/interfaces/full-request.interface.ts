import { IRequest } from '@shared/libs/interfaces/request.interface.ts';
import { IUser } from '@shared/libs/interfaces/user.interface.ts';
import { INotification } from '@shared/libs/interfaces/notification.interface.ts';
import { IComment } from '@shared/libs/interfaces/comment.interface.ts';

export interface IFullRequest extends IRequest {
  master: IUser;
  notifications: INotification[];
  comments: IComment[]
}