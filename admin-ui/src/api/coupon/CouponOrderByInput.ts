import { SortOrder } from "../../util/SortOrder";

export type CouponOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
