import { UrlCreateNestedManyWithoutSitemapsInput } from "./UrlCreateNestedManyWithoutSitemapsInput";

export type SitemapCreateInput = {
  name?: string | null;
  url?: string | null;
  urls?: UrlCreateNestedManyWithoutSitemapsInput;
};
