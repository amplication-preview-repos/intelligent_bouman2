import { SortOrder } from "../../util/SortOrder";

export type TestResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  runAt?: SortOrder;
  updatedAt?: SortOrder;
  urlId?: SortOrder;
};
