export interface IRequestError {
  status: number;
  data: IData;
}

interface IData {
  message: Array<string>;
  statusCode: number;
  error: string;
}
