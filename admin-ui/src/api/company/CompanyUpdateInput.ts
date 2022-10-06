import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string;
  name?: string;
  phoneNumber?: string | null;
};
