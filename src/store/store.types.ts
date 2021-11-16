import { IJob, IWebsite } from "../utils/types";

export type IStoreAction = {
  type: "CHANGE_NAME_TEST";
  payload: string;
};

export type IStoreState = {
  jobs: IJob[];
  name: string;
  websites: IWebsite[];
};
