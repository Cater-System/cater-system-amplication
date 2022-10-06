import { InputJsonValue } from "../../types";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  address?: InputJsonValue;
  coupon?: CouponWhereUniqueInput;
  delivery?: DeliveryWhereUniqueInput;
  orderNumber?: string;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?: "Pending" | "InProgress" | "Completed";
  user?: UserWhereUniqueInput;
};
