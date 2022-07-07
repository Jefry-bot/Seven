import { Response } from "../types/response";

const success = <T>(object: T): Response<T> => {
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

const failed = <T extends Error>(object: T): Response<T> => {
  const response: Response<T> = {
    data: object,
    message: object.message,
    status: {
      code: 500,
      message: "Fatal error in server",
    },
  };

  return response;
}
export { success, failed };
