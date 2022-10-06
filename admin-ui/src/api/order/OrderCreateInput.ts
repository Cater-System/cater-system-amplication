import { InputJsonValue } from "../../types";
import { CouponWhereUniqueInput } from "../coupon/CouponWhereUniqueInput";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  address?: InputJsonValue;
  coupon: CouponWhereUniqueInput;
  delivery: DeliveryWhereUniqueInput;
  orderNumber: string;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status: "Pending" | "InProgress" | "Completed";
  user: UserWhereUniqueInput;
};
