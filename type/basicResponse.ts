export type BasicResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
};
