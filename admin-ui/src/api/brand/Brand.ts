import { Product } from "../product/Product";

export type Brand = {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  products?: Array<Product>;
  updatedAt: Date;
};
