import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductAttributeTitle } from "../productAttribute/ProductAttributeTitle";

export const ProductAttributeItemEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
