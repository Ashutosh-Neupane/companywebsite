export type ApiErrorResponse = {
  response?: {
    data?: {
      message?: string;
      errors?: { [key: string]: string };
    };
  };
};
