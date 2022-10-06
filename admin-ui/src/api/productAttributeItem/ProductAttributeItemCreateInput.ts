import { ProductAttributeWhereUniqueInput } from "../productAttribute/ProductAttributeWhereUniqueInput";

export type ProductAttributeItemCreateInput = {
  name?: string | null;
  productAttribute: ProductAttributeWhereUniqueInput;
};
