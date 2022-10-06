import { ProductAttributeItem as TProductAttributeItem } from "../api/productAttributeItem/ProductAttributeItem";

export const PRODUCTATTRIBUTEITEM_TITLE_FIELD = "name";

export const ProductAttributeItemTitle = (
  record: TProductAttributeItem
): string => {
  return record.name || record.id;
};
