import { Sitemap as TSitemap } from "../api/sitemap/Sitemap";

export const SITEMAP_TITLE_FIELD = "name";

export const SitemapTitle = (record: TSitemap): string => {
  return record.name?.toString() || String(record.id);
};
