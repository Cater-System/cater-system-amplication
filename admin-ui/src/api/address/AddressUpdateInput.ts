import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type AddressUpdateInput = {
  addressLine_1?: string;
  addressLine_2?: string | null;
  addressType?: Array<"Billing" | "Shipping">;
  city?: string | null;
  company?: CompanyWhereUniqueInput | null;
  coordinates?: string | null;
  country?: string | null;
  postcode?: string | null;
  suburb?: string | null;
};
