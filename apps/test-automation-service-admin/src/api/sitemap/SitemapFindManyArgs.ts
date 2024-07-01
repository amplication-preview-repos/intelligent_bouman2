import { SitemapWhereInput } from "./SitemapWhereInput";
import { SitemapOrderByInput } from "./SitemapOrderByInput";

export type SitemapFindManyArgs = {
  where?: SitemapWhereInput;
  orderBy?: Array<SitemapOrderByInput>;
  skip?: number;
  take?: number;
};
