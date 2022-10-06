import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "name";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.name || record.id;
};
