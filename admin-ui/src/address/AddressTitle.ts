import { Address as TAddress } from "../api/address/Address";

export const ADDRESS_TITLE_FIELD = "addressLine_1";

export const AddressTitle = (record: TAddress): string => {
  return record.addressLine_1 || record.id;
};
