import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
