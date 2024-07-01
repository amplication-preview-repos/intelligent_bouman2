import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TestAutomationService } from "./testautomation.service";
import { UrlDto } from "../testAutomation/UrlDto";
import { TestResultDto } from "../testAutomation/TestResultDto";

@swagger.ApiTags("testAutomations")
@common.Controller("testAutomations")
export class TestAutomationController {
  constructor(protected readonly service: TestAutomationService) {}

  @common.Post("/parse-sitemap")
  @swagger.ApiOkResponse({
    type: UrlDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ParseSitemap(
    @common.Body()
    body: UrlDto[]
  ): Promise<UrlDto[]> {
        return this.service.ParseSitemap(body);
      }

  @common.Post("/run-visual-test")
  @swagger.ApiOkResponse({
    type: TestResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RunVisualRegressionTest(
    @common.Body()
    body: UrlDto[]
  ): Promise<TestResultDto[]> {
        return this.service.RunVisualRegressionTest(body);
      }
}
