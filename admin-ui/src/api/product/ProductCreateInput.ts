import { ProductAttributeCreateNestedManyWithoutProductsInput } from "./ProductAttributeCreateNestedManyWithoutProductsInput";
import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";
import { CategoryCreateNestedManyWithoutProductsInput } from "./CategoryCreateNestedManyWithoutProductsInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  attributes?: ProductAttributeCreateNestedManyWithoutProductsInput;
  brand: BrandWhereUniqueInput;
  categories?: CategoryCreateNestedManyWithoutProductsInput;
  name: string;
  order?: OrderWhereUniqueInput | null;
  price: number;
  sku: string;
};
