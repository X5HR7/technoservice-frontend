import { IRequest } from '@shared/libs/interfaces/request.interface.ts';
import { IUser } from '@shared/libs/interfaces/user.interface.ts';

export interface IComment {
  id: string;
  text: string;
  createdAt: Date;
  authorId: string;
  requestId: string;

  author?: IUser;
  request?: IRequest;
}
