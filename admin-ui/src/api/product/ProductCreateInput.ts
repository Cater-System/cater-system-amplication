import { ProductAttributeCreateNestedManyWithoutProductsInput } from "./ProductAttributeCreateNestedManyWithoutProductsInput";
import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  attributes?: ProductAttributeCreateNestedManyWithoutProductsInput;
  brand: string;
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  name: string;
  order?: OrderWhereUniqueInput | null;
  price: number;
  sku: string;
};
