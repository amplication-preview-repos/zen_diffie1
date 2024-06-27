import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  birthDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  predictionText?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
