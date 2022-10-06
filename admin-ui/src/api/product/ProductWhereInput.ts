import { ProductAttributeListRelationFilter } from "../productAttribute/ProductAttributeListRelationFilter";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  attributes?: ProductAttributeListRelationFilter;
  brand?: BrandWhereUniqueInput;
  categories?: CategoryListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatFilter;
  sku?: StringFilter;
};
