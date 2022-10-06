import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  description: string;
  name: string;
  products?: ProductCreateNestedManyWithoutBrandsInput;
};
