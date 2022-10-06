import { ProductAttribute as TProductAttribute } from "../api/productAttribute/ProductAttribute";

export const PRODUCTATTRIBUTE_TITLE_FIELD = "name";

export const ProductAttributeTitle = (record: TProductAttribute): string => {
  return record.name || record.id;
};
