import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
