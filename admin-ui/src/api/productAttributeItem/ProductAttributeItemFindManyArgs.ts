import { ProductAttributeItemWhereInput } from "./ProductAttributeItemWhereInput";
import { ProductAttributeItemOrderByInput } from "./ProductAttributeItemOrderByInput";

export type ProductAttributeItemFindManyArgs = {
  where?: ProductAttributeItemWhereInput;
  orderBy?: Array<ProductAttributeItemOrderByInput>;
  skip?: number;
  take?: number;
};
