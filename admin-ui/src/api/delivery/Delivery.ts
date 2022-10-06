import { Order } from "../order/Order";

export type Delivery = {
  cost: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
