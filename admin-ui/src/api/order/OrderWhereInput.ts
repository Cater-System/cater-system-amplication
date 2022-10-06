import { JsonFilter } from "../../util/JsonFilter";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  address?: JsonFilter;
  coupon?: CouponWhereUniqueInput;
  delivery?: DeliveryWhereUniqueInput;
  id?: StringFilter;
  orderNumber?: StringFilter;
  products?: ProductListRelationFilter;
  status?: "Pending" | "InProgress" | "Completed";
  user?: UserWhereUniqueInput;
};
