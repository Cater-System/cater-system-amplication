import { Address } from "../address/Address";

export type Company = {
  address?: Address | null;
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
