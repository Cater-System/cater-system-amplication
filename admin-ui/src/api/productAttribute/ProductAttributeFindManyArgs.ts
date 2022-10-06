import { ProductAttributeWhereInput } from "./ProductAttributeWhereInput";
import { ProductAttributeOrderByInput } from "./ProductAttributeOrderByInput";

export type ProductAttributeFindManyArgs = {
  where?: ProductAttributeWhereInput;
  orderBy?: Array<ProductAttributeOrderByInput>;
  skip?: number;
  take?: number;
};
