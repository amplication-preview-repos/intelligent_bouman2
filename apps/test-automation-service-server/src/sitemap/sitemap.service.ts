import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SitemapServiceBase } from "./base/sitemap.service.base";

@Injectable()
export class SitemapService extends SitemapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
