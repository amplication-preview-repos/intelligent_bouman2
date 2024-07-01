import { SitemapWhereUniqueInput } from "../sitemap/SitemapWhereUniqueInput";
import { TestResultCreateNestedManyWithoutUrlsInput } from "./TestResultCreateNestedManyWithoutUrlsInput";

export type UrlCreateInput = {
  sitemap?: SitemapWhereUniqueInput | null;
  testResults?: TestResultCreateNestedManyWithoutUrlsInput;
  url?: string | null;
};
