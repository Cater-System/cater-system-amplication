import { JsonValue } from "type-fest";
import { Coupon } from "../coupon/Coupon";
import { Delivery } from "../delivery/Delivery";
import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  address: JsonValue;
  coupon?: Coupon;
  createdAt: Date;
  delivery?: Delivery;
  id: string;
  orderNumber: string;
  products?: Array<Product>;
  status?: "Pending" | "InProgress" | "Completed";
  updatedAt: Date;
  user?: User;
};
