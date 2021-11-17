import {
  IJob,
  ISearchFormValues,
  ISearchGroupByAttributeGroup,
  IWebsite,
} from "../utils/interfaces";

export type Dispatch = (action: IStoreAction) => void;

export type IStoreAction =
  | {
      type: "GET_ORGA_OFFERS";
      payload: { jobs: IJob[]; name: string; websites: IWebsite[] };
    }
  | {
      type: "SEARCH";
      payload: ISearchFormValues;
    };

export type IStoreState = {
  jobs: IJob[];
  name: string;
  searchGroupByAttributes: ISearchGroupByAttributeGroup[];
  searchResults: { data: IJob[]; length: number };
  searchTerms: ISearchFormValues;
  websites: IWebsite[];
};
