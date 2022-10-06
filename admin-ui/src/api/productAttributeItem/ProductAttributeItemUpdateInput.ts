import { ProductAttributeWhereUniqueInput } from "../productAttribute/ProductAttributeWhereUniqueInput";

export type ProductAttributeItemUpdateInput = {
  name?: string | null;
  productAttribute?: ProductAttributeWhereUniqueInput;
};
