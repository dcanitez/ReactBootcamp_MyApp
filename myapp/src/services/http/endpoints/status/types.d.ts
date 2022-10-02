export type CreateStatusRequestPayload = {
  title: string;
  color: string;
  categoryId: number;
};

export type CreateStatusResponseType = {
  data: {
    id: number;
    title: string;
    color: string;
    categoryId: number;
  };
};
