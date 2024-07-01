import { JsonValue } from "type-fest";
import { Url } from "../url/Url";

export type TestResult = {
  createdAt: Date;
  id: string;
  result: JsonValue;
  runAt: Date | null;
  updatedAt: Date;
  url?: Url | null;
};
