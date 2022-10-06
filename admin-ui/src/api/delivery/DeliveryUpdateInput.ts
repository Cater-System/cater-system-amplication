import { OrderUpdateManyWithoutDeliveriesInput } from "./OrderUpdateManyWithoutDeliveriesInput";

export type DeliveryUpdateInput = {
  cost?: number | null;
  description?: string | null;
  name?: string;
  orders?: OrderUpdateManyWithoutDeliveriesInput;
};
