import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlListRelationFilter } from "../url/UrlListRelationFilter";

export type SitemapWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  urls?: UrlListRelationFilter;
};
