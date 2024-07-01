import * as graphql from "@nestjs/graphql";
import { SitemapInput } from "../testAutomation/SitemapInput";
import { UrlDto } from "../testAutomation/UrlDto";
import { TestResultDto } from "../testAutomation/TestResultDto";
import { TestAutomationService } from "./testautomation.service";

export class TestAutomationResolver {
  constructor(protected readonly service: TestAutomationService) {}

  @graphql.Mutation(() => [UrlDto])
  async ParseSitemap(
    @graphql.Args()
    args: SitemapInput
  ): Promise<UrlDto[]> {
    return this.service.ParseSitemap(args);
  }

  @graphql.Mutation(() => [TestResultDto])
  async RunVisualRegressionTest(
    @graphql.Args()
    args: UrlDto[]
  ): Promise<TestResultDto[]> {
    return this.service.RunVisualRegressionTest(args);
  }
}
