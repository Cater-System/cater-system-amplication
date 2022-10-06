import { OrderUpdateManyWithoutCouponsInput } from "./OrderUpdateManyWithoutCouponsInput";

export type CouponUpdateInput = {
  code?: string;
  description?: string | null;
  name?: string;
  orders?: OrderUpdateManyWithoutCouponsInput;
};
