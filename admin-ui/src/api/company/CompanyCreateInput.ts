import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CompanyCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email: string;
  name: string;
  phoneNumber?: string | null;
};
