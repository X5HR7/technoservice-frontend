import { ISelectOption } from '@shared/ui/SelectItem/models/select-option.interface.ts';
import { Dispatch, SetStateAction } from 'react';

export interface ISelect {
  id: string;
  defaultSelectText: string;
  options: ISelectOption[];
  setValue: Dispatch<SetStateAction<string>>;
}
