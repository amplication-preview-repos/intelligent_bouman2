import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UrlTitle } from "../url/UrlTitle";

export const TestResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="runAt" source="runAt" />
        <ReferenceInput source="url.id" reference="Url" label="Url">
          <SelectInput optionText={UrlTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
