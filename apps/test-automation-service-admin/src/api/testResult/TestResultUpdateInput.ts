import { InputJsonValue } from "../../types";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type TestResultUpdateInput = {
  result?: InputJsonValue;
  runAt?: Date | null;
  url?: UrlWhereUniqueInput | null;
};
