import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductAttributeWhereUniqueInput } from "../productAttribute/ProductAttributeWhereUniqueInput";

export type ProductAttributeItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  productAttribute?: ProductAttributeWhereUniqueInput;
};
