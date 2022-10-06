import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type BrandWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
};
