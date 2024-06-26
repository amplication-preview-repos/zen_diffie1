import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  album?: SortOrder;
  artist?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
