import { IInput } from '@shared/ui/FormItem/models/input.interface.ts';

export interface IFormItem {
  titleText: string;
  errorMessage: string;
  input: IInput;
}
