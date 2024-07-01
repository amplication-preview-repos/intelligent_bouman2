import * as graphql from "@nestjs/graphql";
import { SitemapResolverBase } from "./base/sitemap.resolver.base";
import { Sitemap } from "./base/Sitemap";
import { SitemapService } from "./sitemap.service";

@graphql.Resolver(() => Sitemap)
export class SitemapResolver extends SitemapResolverBase {
  constructor(protected readonly service: SitemapService) {
    super(service);
  }
}
