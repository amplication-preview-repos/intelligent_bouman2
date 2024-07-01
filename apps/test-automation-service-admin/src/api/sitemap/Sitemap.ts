import { Url } from "../url/Url";

export type Sitemap = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  url: string | null;
  urls?: Array<Url>;
};
