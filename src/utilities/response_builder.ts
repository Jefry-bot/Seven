import { Response } from "../types/response";

export const success = <T>(object: T): Response<T> => {
  const response: Response<T> = {
    data: object,
    message: "Process successfull on server",
    status: {
      code: 200,
      message: "OK",
    },
  };

  return response;
};
