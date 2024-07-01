import { StringFilter } from "../../util/StringFilter";
import { SitemapWhereUniqueInput } from "../sitemap/SitemapWhereUniqueInput";
import { TestResultListRelationFilter } from "../testResult/TestResultListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UrlWhereInput = {
  id?: StringFilter;
  sitemap?: SitemapWhereUniqueInput;
  testResults?: TestResultListRelationFilter;
  url?: StringNullableFilter;
};
