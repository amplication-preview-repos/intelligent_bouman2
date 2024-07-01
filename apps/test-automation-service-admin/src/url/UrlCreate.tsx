import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SitemapTitle } from "../sitemap/SitemapTitle";
import { TestResultTitle } from "../testResult/TestResultTitle";

export const UrlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
