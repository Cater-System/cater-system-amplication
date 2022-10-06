import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CategoryCreateInput = {
  description?: string | null;
  name: string;
  product?: ProductWhereUniqueInput | null;
};
