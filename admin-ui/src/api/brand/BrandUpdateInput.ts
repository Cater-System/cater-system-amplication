import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  description?: string;
  name?: string;
  products?: ProductUpdateManyWithoutBrandsInput;
};
