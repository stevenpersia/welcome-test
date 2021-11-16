import { IJob, IWebsite } from "../utils/interfaces";

export type Dispatch = (action: IStoreAction) => void;

export type IStoreAction = {
  type: "CHANGE_NAME_TEST";
};

export type IStoreState = {
  jobs: IJob[];
  name: string;
  websites: IWebsite[];
};
