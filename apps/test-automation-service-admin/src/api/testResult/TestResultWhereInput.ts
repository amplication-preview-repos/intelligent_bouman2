import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UrlWhereUniqueInput } from "../url/UrlWhereUniqueInput";

export type TestResultWhereInput = {
  id?: StringFilter;
  result?: JsonFilter;
  runAt?: DateTimeNullableFilter;
  url?: UrlWhereUniqueInput;
};
