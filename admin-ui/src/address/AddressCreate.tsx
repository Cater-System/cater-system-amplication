import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address Line 1" source="addressLine_1" />
        <TextInput label="Address Line 2" source="addressLine_2" />
        <SelectArrayInput
          label="Address Type"
          source="addressType"
          choices={[
            { label: "Billing", value: "Billing" },
            { label: "Shipping", value: "Shipping" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="City" source="city" />
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <TextInput label="Coordinates" source="coordinates" />
        <TextInput label="Country" source="country" />
        <TextInput label="Postcode" source="postcode" />
        <TextInput label="Suburb" source="suburb" />
      </SimpleForm>
    </Create>
  );
};
