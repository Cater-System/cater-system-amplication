import { Product } from "../product/Product";
import { ProductAttributeItem } from "../productAttributeItem/ProductAttributeItem";

export type ProductAttribute = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  product?: Product | null;
  productAttributeItems?: Array<ProductAttributeItem>;
  updatedAt: Date;
};
