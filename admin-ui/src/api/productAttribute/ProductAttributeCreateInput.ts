import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductAttributeItemCreateNestedManyWithoutProductAttributesInput } from "./ProductAttributeItemCreateNestedManyWithoutProductAttributesInput";

export type ProductAttributeCreateInput = {
  description?: string | null;
  name?: string | null;
  product?: ProductWhereUniqueInput | null;
  productAttributeItems?: ProductAttributeItemCreateNestedManyWithoutProductAttributesInput;
};
