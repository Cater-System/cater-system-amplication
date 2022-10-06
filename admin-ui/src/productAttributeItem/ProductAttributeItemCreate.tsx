import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductAttributeTitle } from "../productAttribute/ProductAttributeTitle";

export const ProductAttributeItemCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="productattribute.id"
          reference="ProductAttribute"
          label="Product Attribute"
        >
          <SelectInput optionText={ProductAttributeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
