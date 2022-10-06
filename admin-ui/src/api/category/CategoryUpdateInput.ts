import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string;
  product?: ProductWhereUniqueInput | null;
};
