import { IStoreAction, IStoreState } from "./store.types";

export const storeReducer = (state: IStoreState, action: IStoreAction) => {
  switch (action.type) {
    case "GET_ORGA_OFFERS": {
      return { ...state, ...action.payload };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}.`);
  }
};
