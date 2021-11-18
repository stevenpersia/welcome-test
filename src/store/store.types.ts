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
    }
  | {
      type: "SELECT_JOB";
      payload: IJob | undefined;
    }
  | {
      type: "TOGGLE_MODAL";
      payload: boolean;
    };

export type IStoreState = {
  jobs: IJob[];
  isModalVisible: boolean;
  name: string;
  searchGroupByAttributes: ISearchGroupByAttributeGroup[];
  searchResults: { data: IJob[]; length: number };
  searchTerms: ISearchFormValues;
  selectedJob: IJob | undefined;
  websites: IWebsite[];
};
