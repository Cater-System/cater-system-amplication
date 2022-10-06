import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type DeliveryWhereInput = {
  cost?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
};
