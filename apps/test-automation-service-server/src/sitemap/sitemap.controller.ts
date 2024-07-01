import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SitemapService } from "./sitemap.service";
import { SitemapControllerBase } from "./base/sitemap.controller.base";

@swagger.ApiTags("sitemaps")
@common.Controller("sitemaps")
export class SitemapController extends SitemapControllerBase {
  constructor(protected readonly service: SitemapService) {
    super(service);
  }
}
