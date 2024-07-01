import { Module } from "@nestjs/common";
import { TestAutomationService } from "./testautomation.service";
import { TestAutomationController } from "./testautomation.controller";
import { TestAutomationResolver } from "./testautomation.resolver";

@Module({
  controllers: [TestAutomationController],
  providers: [TestAutomationService, TestAutomationResolver],
  exports: [TestAutomationService],
})
export class TestAutomationModule {}
