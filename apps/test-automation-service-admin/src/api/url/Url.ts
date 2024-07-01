import { Sitemap } from "../sitemap/Sitemap";
import { TestResult } from "../testResult/TestResult";

export type Url = {
  createdAt: Date;
  id: string;
  sitemap?: Sitemap | null;
  testResults?: Array<TestResult>;
  updatedAt: Date;
  url: string | null;
};
