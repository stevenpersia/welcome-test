import { IJob, IWebsite } from "../utils/interfaces";

export type Dispatch = (action: IStoreAction) => void;

export type IStoreAction = {
  type: "GET_ORGA_OFFERS";
  payload: IStoreState;
};

export type IStoreState = {
  jobs: IJob[];
  name: string;
  websites: IWebsite[];
};
