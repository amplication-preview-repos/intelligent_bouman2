import { Injectable } from "@nestjs/common";
import { SitemapInput } from "../testAutomation/SitemapInput";
import { UrlDto } from "../testAutomation/UrlDto";
import { TestResultDto } from "../testAutomation/TestResultDto";

@Injectable()
export class TestAutomationService {
  constructor() {}
  async ParseSitemap(args: SitemapInput): Promise<UrlDto[]> {
    throw new Error("Not implemented");
  }
  async RunVisualRegressionTest(args: UrlDto[]): Promise<TestResultDto[]> {
    throw new Error("Not implemented");
  }
}
