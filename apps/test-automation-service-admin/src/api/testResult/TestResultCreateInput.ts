import { InputJsonValue } from "../../types";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type TestResultCreateInput = {
  result?: InputJsonValue;
  runAt?: Date | null;
  url?: UrlWhereUniqueInput | null;
};
