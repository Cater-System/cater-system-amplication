import { ProductAttribute } from "../productAttribute/ProductAttribute";
import { Brand } from "../brand/Brand";
import { Category } from "../category/Category";
import { Order } from "../order/Order";

export type Product = {
  attributes?: Array<ProductAttribute>;
  brand?: Brand;
  categories?: Array<Category>;
  createdAt: Date;
  id: string;
  name: string;
  order?: Order | null;
  price: number;
  sku: string;
  updatedAt: Date;
};
