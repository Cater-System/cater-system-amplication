import { Coupon as TCoupon } from "../api/coupon/Coupon";

export const COUPON_TITLE_FIELD = "name";

export const CouponTitle = (record: TCoupon): string => {
  return record.name || record.id;
};
