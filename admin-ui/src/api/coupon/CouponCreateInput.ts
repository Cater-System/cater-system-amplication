import { OrderCreateNestedManyWithoutCouponsInput } from "./OrderCreateNestedManyWithoutCouponsInput";

export type CouponCreateInput = {
  code: string;
  description?: string | null;
  name: string;
  orders?: OrderCreateNestedManyWithoutCouponsInput;
};
