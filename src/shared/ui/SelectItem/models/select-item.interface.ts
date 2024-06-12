import { ISelect } from '@shared/ui/SelectItem/models/select.interface.ts';

export interface ISelectItem {
  titleText: string;
  errorMessage: string;
  select: ISelect;
}
