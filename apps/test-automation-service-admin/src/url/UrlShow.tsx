import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { URL_TITLE_FIELD } from "./UrlTitle";
import { SITEMAP_TITLE_FIELD } from "../sitemap/SitemapTitle";

export const UrlShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Sitemap" source="sitemap.id" reference="Sitemap">
          <TextField source={SITEMAP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="TestResult"
          target="urlId"
          label="TestResults"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="result" source="result" />
            <TextField label="runAt" source="runAt" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Url" source="url.id" reference="Url">
              <TextField source={URL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
