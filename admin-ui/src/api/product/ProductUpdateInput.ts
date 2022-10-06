import { ProductAttributeUpdateManyWithoutProductsInput } from "./ProductAttributeUpdateManyWithoutProductsInput";
import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  attributes?: ProductAttributeUpdateManyWithoutProductsInput;
  brand?: string;
  categories?: CategoryUpdateManyWithoutProductsInput;
  name?: string;
  order?: OrderWhereUniqueInput | null;
  price?: number;
  sku?: string;
};
