import { OrderCreateNestedManyWithoutDeliveriesInput } from "./OrderCreateNestedManyWithoutDeliveriesInput";

export type DeliveryCreateInput = {
  cost?: number | null;
  description?: string | null;
  name: string;
  orders?: OrderCreateNestedManyWithoutDeliveriesInput;
};
