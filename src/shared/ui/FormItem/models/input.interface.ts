import { ChangeEvent } from 'react';

export interface IInput {
  id: string;
  type: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}
