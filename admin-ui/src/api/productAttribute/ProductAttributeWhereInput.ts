import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductAttributeItemListRelationFilter } from "../productAttributeItem/ProductAttributeItemListRelationFilter";

export type ProductAttributeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  productAttributeItems?: ProductAttributeItemListRelationFilter;
};
