type StatusCode =
  | { code: 200; message: "OK" }
  | { code: 400; message: "Bad Request" }
  | { code: 500; message: "Fatal error in server" };

type Response<T> = {
  data: T;
  message: string;
  status: StatusCode;
};

export { Response, StatusCode };
