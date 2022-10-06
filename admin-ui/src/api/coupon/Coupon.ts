import { Order } from "../order/Order";

export type Coupon = {
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
