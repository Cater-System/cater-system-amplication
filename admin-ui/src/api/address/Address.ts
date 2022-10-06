import { Company } from "../company/Company";

export type Address = {
  addressLine_1: string;
  addressLine_2: string | null;
  addressType?: Array<"Billing" | "Shipping">;
  city: string | null;
  company?: Company | null;
  coordinates: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  postcode: string | null;
  suburb: string | null;
  updatedAt: Date;
};
