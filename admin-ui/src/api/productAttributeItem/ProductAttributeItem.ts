import { ProductAttribute } from "../productAttribute/ProductAttribute";

export type ProductAttributeItem = {
  createdAt: Date;
  id: string;
  name: string | null;
  productAttribute?: ProductAttribute;
  updatedAt: Date;
};
