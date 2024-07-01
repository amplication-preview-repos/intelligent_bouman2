import { Module } from "@nestjs/common";
import { SitemapModuleBase } from "./base/sitemap.module.base";
import { SitemapService } from "./sitemap.service";
import { SitemapController } from "./sitemap.controller";
import { SitemapResolver } from "./sitemap.resolver";

@Module({
  imports: [SitemapModuleBase],
  controllers: [SitemapController],
  providers: [SitemapService, SitemapResolver],
  exports: [SitemapService],
})
export class SitemapModule {}
