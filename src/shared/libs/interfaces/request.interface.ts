import { IComment } from '@shared/libs/interfaces/comment.interface.ts';

export interface IRequest {
  id: string;
  number: number;
  equipment: string;
  type: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date;
  completedAt?: Date;
  masterId?: string;
  clientId: string;

  comments?: IComment[]
}
