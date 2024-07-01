import { UrlUpdateManyWithoutSitemapsInput } from "./UrlUpdateManyWithoutSitemapsInput";

export type SitemapUpdateInput = {
  name?: string | null;
  url?: string | null;
  urls?: UrlUpdateManyWithoutSitemapsInput;
};
