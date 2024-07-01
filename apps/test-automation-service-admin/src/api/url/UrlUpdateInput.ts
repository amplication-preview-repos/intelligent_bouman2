import { SitemapWhereUniqueInput } from "../sitemap/SitemapWhereUniqueInput";
import { TestResultUpdateManyWithoutUrlsInput } from "./TestResultUpdateManyWithoutUrlsInput";

export type UrlUpdateInput = {
  sitemap?: SitemapWhereUniqueInput | null;
  testResults?: TestResultUpdateManyWithoutUrlsInput;
  url?: string | null;
};
