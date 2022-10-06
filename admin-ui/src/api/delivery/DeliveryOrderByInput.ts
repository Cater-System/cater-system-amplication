import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
