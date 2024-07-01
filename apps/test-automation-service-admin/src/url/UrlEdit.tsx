import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SitemapTitle } from "../sitemap/SitemapTitle";
import { TestResultTitle } from "../testResult/TestResultTitle";

export const UrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="sitemap.id" reference="Sitemap" label="Sitemap">
          <SelectInput optionText={SitemapTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="testResults"
          reference="TestResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TestResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
