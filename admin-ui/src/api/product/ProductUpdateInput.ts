import { ProductAttributeUpdateManyWithoutProductsInput } from "./ProductAttributeUpdateManyWithoutProductsInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryUpdateManyWithoutProductsInput } from "./CategoryUpdateManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductUpdateInput = {
  attributes?: ProductAttributeUpdateManyWithoutProductsInput;
  brand?: BrandWhereUniqueInput;
  categories?: CategoryUpdateManyWithoutProductsInput;
  name?: string;
  order?: OrderWhereUniqueInput | null;
  price?: number;
  sku?: string;
};
