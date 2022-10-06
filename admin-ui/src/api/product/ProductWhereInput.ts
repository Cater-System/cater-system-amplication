import { ProductAttributeListRelationFilter } from "../productAttribute/ProductAttributeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  attributes?: ProductAttributeListRelationFilter;
  brand?: StringFilter;
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatFilter;
  sku?: StringFilter;
};
