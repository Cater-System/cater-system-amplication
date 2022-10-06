import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type AddressWhereInput = {
  addressLine_1?: StringFilter;
  addressLine_2?: StringNullableFilter;
  city?: StringNullableFilter;
  company?: CompanyWhereUniqueInput;
  coordinates?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  postcode?: StringNullableFilter;
  suburb?: StringNullableFilter;
};
