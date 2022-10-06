import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductAttributeItemUpdateManyWithoutProductAttributesInput } from "./ProductAttributeItemUpdateManyWithoutProductAttributesInput";

export type ProductAttributeUpdateInput = {
  description?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  productAttributeItems?: ProductAttributeItemUpdateManyWithoutProductAttributesInput;
};
