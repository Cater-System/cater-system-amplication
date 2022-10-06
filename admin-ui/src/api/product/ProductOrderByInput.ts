import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
