import service from "../../instance";
import { CreateStatusRequestPayload, CreateStatusResponseType } from "./types";

export const create = (
  payload: CreateStatusRequestPayload
): Promise<CreateStatusResponseType> => service.post("status", payload);

export const list = (categoryId: number) =>
  service.get("status", { params: { categoryId: Number(categoryId) } });

export const update = (id: number, payload: CreateStatusRequestPayload) =>
  service.put(`status/${id}`, payload);
